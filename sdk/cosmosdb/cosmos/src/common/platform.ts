// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Constants } from "./constants";

/**
 * @hidden
 */
export function getUserAgent(suffix?: string): string {
  const ua = `${userAgentDetails()} ${Constants.SDKName}/${Constants.SDKVersion}`;
  if (suffix) {
    return ua + " " + suffix;
  }
  return ua;
}

// TODO: Standardize across other platforms from @azure/core-util
function userAgentDetails(): string {
  let userAgentDetail = "<environment undetectable>";

  if (globalThis.navigator && globalThis.navigator.userAgent) {
    userAgentDetail = globalThis.navigator.userAgent;
  }

  if (globalThis.process && globalThis.process.version) {
    userAgentDetail = `Node.js/${process.version.slice(1)} (${process.platform}; ${process.arch})`;
  }

  return userAgentDetail;
}
