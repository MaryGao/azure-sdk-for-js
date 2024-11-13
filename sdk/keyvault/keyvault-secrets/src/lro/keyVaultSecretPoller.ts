// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";
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
import { initOperation } from "../../../../core/core-lro/dist/esm/poller/operation.js";


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
  vaultUrl: string;
  client: KeyVaultClient;
  name: string;
  operationOptions?: OperationOptions;
  intervalInMs?: number;
  resumeFrom?: string;
}

export abstract class KeyVaultSecretPoller<TState extends PollOperationState<TResult>, TResult> implements PollerLike<TState, TResult>, RunningOperation<TResult> {
  protected httpPoller: CorePollerLike<OperationState<TResult>, TResult>;
  protected options: KeyVaultKeyPollerOptions;
  constructor(options: KeyVaultKeyPollerOptions) {
    this.options = options;
    this.httpPoller = createHttpPoller({
      sendInitialRequest: this.sendInitialRequest.bind(this),
      sendPollRequest: this.sendPollRequest.bind(this),
    }, options);
  }
  sendInitialRequest(): Promise<OperationResponse<unknown>> {
    throw new Error("Method not implemented.");
  }
  sendPollRequest(_path: string, _options?: { abortSignal?: AbortSignalLike; }): Promise<OperationResponse<TResult, RawRequest>> {
    throw new Error("Method not implemented.");
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
