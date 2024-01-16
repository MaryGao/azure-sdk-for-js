// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { LongRunningOperation, OperationResponse } from "./models";
import { OperationState, PollerLike } from "../poller/models";
import {
  getErrorFromResponse,
  getOperationLocation,
  getOperationStatus,
  getResourceLocation,
  getStatusFromInitialResponse,
  inferLroMode,
  isOperationError,
  parseRetryAfter,
} from "./operation";
import { CreateHttpPollerOptions } from "./models";
import { buildCreatePoller } from "../poller/poller";

/**
 * Creates a poller that can be used to poll a long-running operation.
 * @param lro - Description of the long-running operation
 * @param options - options to configure the poller
 * @returns an initialized poller
 */
export function createHttpPoller<TResult, TState extends OperationState<TResult>>(
  lro: LongRunningOperation,
  options?: CreateHttpPollerOptions<TResult, TState>,
): PollerLike<TState, TResult> {
  const {
    resourceLocationConfig,
    intervalInMs,
    processResult,
    restoreFrom,
    updateState,
    withOperationLocation,
    resolveOnUnsuccessful = false,
  } = options || {};
  return buildCreatePoller<OperationResponse, TResult, TState>({
    getStatusFromInitialResponse,
    getStatusFromPollResponse: getOperationStatus,
    isOperationError,
    getOperationLocation,
    getResourceLocation,
    getPollingInterval: parseRetryAfter,
    getError: getErrorFromResponse,
    resolveOnUnsuccessful,
  })(
    {
      init: async () => {
        const response = await lro.sendInitialRequest();
        const config = inferLroMode(response.rawResponse, resourceLocationConfig);
        const metadata: Record<string, string> = {};
        if (config?.mode) {
          metadata["mode"] = config.mode;
        }
        if (resourceLocationConfig) {
          metadata["resourceLocationConfig"] = resourceLocationConfig;
        }
        return {
          response,
          operationLocation: config?.operationLocation,
          resourceLocation: config?.resourceLocation,
          initialUri: config?.initialUri,
          requestMethod: config?.requestMethod,
          metadata,
        };
      },
      poll: lro.sendPollRequest,
    },
    {
      intervalInMs,
      withOperationLocation,
      restoreFrom,
      updateState,
      processResult: processResult
        ? ({ flatResponse }, state) => processResult(flatResponse, state)
        : ({ flatResponse }) => flatResponse as TResult,
    },
  );
}
