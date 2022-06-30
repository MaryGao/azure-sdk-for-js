/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { IdentityRestClientOptionalParams } from "./models";

export class IdentityRestClientContext extends coreClient.ServiceClient {
  endpoint: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the IdentityRestClientContext class.
   * @param endpoint The communication resource, for example https://my-resource.communication.azure.com
   * @param options The parameter options
   */
  constructor(endpoint: string, options?: IdentityRestClientOptionalParams) {
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: IdentityRestClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-communication-identity/1.1.0`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "{endpoint}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.endpoint = endpoint;

    // Assigning values to Constant parameters
    this.apiVersion = options.apiVersion || "2022-06-01";
  }
}
