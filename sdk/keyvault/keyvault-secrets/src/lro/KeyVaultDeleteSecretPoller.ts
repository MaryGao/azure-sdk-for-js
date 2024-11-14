// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createRestError, OperationOptions, PathUncheckedResponse, StreamableMethod } from "@azure-rest/core-client";
import { AbortSignalLike } from "@azure/abort-controller";
import {
  CancelOnProgress,
  RunningOperation,
  OperationResponse,
  OperationState,
  createHttpPoller,
  RawRequest,
  PollerLike as CorePollerLike,
} from "@azure/core-lro";
import { KeyVaultClient } from "../generated/keyVaultClient.js";
import { DeleteSecretOptionalParams, GetDeletedSecretOptionalParams } from "../generated/index.js";
import { _deleteSecretSend, _getDeletedSecretSend } from "../generated/api/operations.js";


/**
 * PollOperationState contains an opinionated list of the smallest set of properties needed
 * to define any long running operation poller.
 *
 * While the Poller class works as the local control mechanism to start triggering, wait for,
 * and potentially cancel a long running operation, the PollOperationState documents the status
 * of the remote long running operation.
 *
 * It should be updated at least when the operation starts, when it's finished, and when it's cancelled.
 * Though, implementations can have any other number of properties that can be updated by other reasons.
 */
export interface PollOperationState<TResult> {
  /**
   * True if the operation has started.
   */
  isStarted?: boolean;
  /**
   * True if the operation has been completed.
   */
  isCompleted?: boolean;
  /**
   * True if the operation has been cancelled.
   */
  isCancelled?: boolean;
  /**
   * Will exist if the operation encountered any error.
   */
  error?: Error;
  /**
   * Will exist if the operation concluded in a result of an expected type.
   */
  result?: TResult;
}

/**
 * Abstract representation of a poller, intended to expose just the minimal API that the user needs to work with.
 */
export interface PollerLike<TState extends PollOperationState<TResult>, TResult> {
  /**
   * Returns a promise that will resolve once a single polling request finishes.
   * It does this by calling the update method of the Poller's operation.
   */
  poll(options?: {
    abortSignal?: AbortSignalLike;
  }): Promise<void>;
  /**
   * Returns a promise that will resolve once the underlying operation is completed.
   */
  pollUntilDone(pollOptions?: {
    abortSignal?: AbortSignalLike;
  }): Promise<TResult>;
  /**
   * Invokes the provided callback after each polling is completed,
   * sending the current state of the poller's operation.
   *
   * It returns a method that can be used to stop receiving updates on the given callback function.
   */
  onProgress(callback: (state: TState) => void): CancelOnProgress;
  /**
   * Returns true if the poller has finished polling.
   */
  isDone(): boolean;
  /**
   * Stops the poller. After this, no manual or automated requests can be sent.
   */
  stopPolling(): void;
  /**
   * Returns true if the poller is stopped.
   */
  isStopped(): boolean;
  /**
   * Attempts to cancel the underlying operation.
   * @deprecated `cancelOperation` has been deprecated because it was not implemented.
   */
  cancelOperation(options?: {
    abortSignal?: AbortSignalLike;
  }): Promise<void>;
  /**
   * Returns the state of the operation.
   * The TState defined in PollerLike can be a subset of the TState defined in
   * the Poller implementation.
   */
  getOperationState(): TState;
  /**
   * Returns the result value of the operation,
   * regardless of the state of the poller.
   * It can return undefined or an incomplete form of the final TResult value
   * depending on the implementation.
   */
  getResult(): TResult | undefined;
  /**
   * Returns a serialized version of the poller's operation
   * by invoking the operation's toString method.
   */
  toString(): string;
}

/**
 * Common parameters to a Key Vault Key Poller.
 */
export interface KeyVaultKeyPollerOptions {
  client: KeyVaultClient;
  name: string;
  operationOptions?: OperationOptions;
  intervalInMs?: number;
  resumeFrom?: string;
}

function getLroResponse<TResponse extends PathUncheckedResponse>(
  response: TResponse,
  expectedStatuses: string[],
): OperationResponse<TResponse> {
  if (!expectedStatuses.includes(response.status)) {
    throw createRestError(response);
  }

  return {
    flatResponse: response,
    rawResponse: {
      ...response,
      statusCode: Number.parseInt(response.status),
      body: response.body,
      // fake header
      headers: {
       "operation-location": "https://fake.com",}
    },
  };
}

export class KeyVaultDeleteSecretPoller<TState extends PollOperationState<TResult>, TResult> implements PollerLike<TState, TResult>, RunningOperation<TResult> {
  protected httpPoller: CorePollerLike<OperationState<TResult>, TResult>;
  protected options: KeyVaultKeyPollerOptions;
  constructor(options: KeyVaultKeyPollerOptions) {
    this.options = options;
    this.httpPoller = createHttpPoller({
      sendInitialRequest: this.sendInitialRequest.bind(this),
      sendPollRequest: this.sendPollRequest.bind(this),
    }, options);
  }

  /**
 * Sends a delete request for the given Key Vault Key's name to the Key Vault service.
 * Since the Key Vault Key won't be immediately deleted, we have {@link beginDeleteKey}.
 */
  private deleteSecret(name: string, options: DeleteSecretOptionalParams = {}): Promise<StreamableMethod> {
    return _deleteSecretSend(this.options.client["_client"], name, options) as any;
  }

  /**
 * The getDeletedSecret method returns the specified deleted secret along with its properties.
 * This operation requires the secrets/get permission.
 */
  private getDeletedSecret(
    name: string,
    options: GetDeletedSecretOptionalParams = {},
  ): Promise<StreamableMethod> {
    return _getDeletedSecretSend(this.options.client["_client"], name, options) as any;
  }

  async sendInitialRequest(): Promise<OperationResponse<unknown>> {
    const initialResponse = await this.deleteSecret(this.options.name, this.options as DeleteSecretOptionalParams);
    // console.log("initialResponse", initialResponse);
    return getLroResponse(initialResponse, ["200"]);
  }
  async sendPollRequest(_path: string, _options?: { abortSignal?: AbortSignalLike; }): Promise<OperationResponse<TResult, RawRequest>> {
    let response;
    if (!this.isDone()) {
      try {
        response = await this.getDeletedSecret(this.options.name, this.options as GetDeletedSecretOptionalParams);
        console.log("response", response);
        // state.result = await this.getDeletedSecret(name, this.operationOptions);
        // state.isCompleted = true;
        // console.log("isCompleted***1", state, new Date().toISOString(), !state.isCompleted);
      } catch (error: any) {
        console.log(error)
        if (error.statusCode === 403) {
          // At this point, the resource exists but the user doesn't have access to it.
          // state.isCompleted = true;
          // console.log("isCompleted***2", state, new Date().toISOString(), !state.isCompleted);
        } else if (error.statusCode !== 404) {
          // state.error = error;
          // state.isCompleted = true;
          // console.log("isCompleted***3", state, new Date().toISOString(), !state.isCompleted);
          throw error;
        }
      }
    }
    return response ? getLroResponse(response, ["200"]) : { flatResponse: {} as any, rawResponse: {} as any };
  }
  async poll(options?: {
    abortSignal?: AbortSignalLike;
  }): Promise<void> {
    await this.httpPoller.poll(options);
  }
  pollUntilDone(pollOptions?: {
    abortSignal?: AbortSignalLike;
  }): Promise<any> {
    return this.httpPoller.pollUntilDone(pollOptions);
  }
  onProgress(callback: (state: any) => void): CancelOnProgress {
    return this.httpPoller.onProgress(callback);
  }
  isDone(): boolean {
    return this.httpPoller.isDone;
  }
  stopPolling(): void {
    throw new Error("Method not implemented.");
  }
  isStopped(): boolean {
    throw new Error("Method not implemented.");
  }
  cancelOperation(_options?: {
    abortSignal?: AbortSignalLike;
  }): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getOperationState(): any {
    if (!this.httpPoller.operationState) {
      throw new Error(
        "Operation state is not available. The poller may not have been started and you could await submitted() before calling getOperationState().",
      );
    }
    return this.httpPoller.operationState;
  }
  getResult(): any {
    return this.httpPoller.result;
  }
  toString(): string {
    if (!this.httpPoller.operationState) {
      throw new Error(
        "Operation state is not available. The poller may not have been started and you could await submitted() before calling getOperationState().",
      );
    }
    return JSON.stringify({
      state: this.httpPoller.operationState,
    });
  }

}
