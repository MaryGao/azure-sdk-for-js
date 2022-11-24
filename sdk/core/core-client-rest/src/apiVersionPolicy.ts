// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PipelinePolicy } from "@azure/core-rest-pipeline";
import { ClientOptions } from "./common";

export const apiVersionPolicyName = "ApiVersionPolicy";

/**
 * Creates a policy that sets the apiVersion as a query parameter on every request
 * @param options - Client options
 * @returns Pipeline policy that sets the apiVersion as a query parameter on every request
 */
export function apiVersionPolicy(options: ClientOptions): PipelinePolicy {
  return {
    name: apiVersionPolicyName,
    sendRequest: (req, next) => {
      // if we already have apiVersion in url we'll use it
      // this apiVersion may add by current oepration or return by server
      // if there is no apiVesion we'll add client one
      const url = new URL(req.url);
      if (!url.searchParams.get("api-version") && options.apiVersion) {
        // append the apiVersion with client one
        url.searchParams.append("api-version", options.apiVersion);
        req.url = url.toString();
      }

      return next(req);
    },
  };
}
