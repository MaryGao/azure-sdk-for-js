/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/**
 * <br>Represents a collection of settings for configuring Alpha ID support for a specific resource.
 * <br>
 *             Initially, Alpha IDs were restricted to customers that had valid use cases for them, so this configuration could be leveraged to enable its usage.
 *
 */
export interface AlphaIdConfiguration {
  /** Indicates whether the use of Alpha IDs is supported for a specific resource. */
  enabled: boolean;
}

/** The Communication Services error. */
export interface CommunicationErrorResponse {
  /** The Communication Services error. */
  error: CommunicationError;
}

/** The Communication Services error. */
export interface CommunicationError {
  /** The error code. */
  code: string;
  /** The error message. */
  message: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * Further details about specific errors that led to this error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: CommunicationError[];
  /**
   * The inner error if any.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly innerError?: CommunicationError;
}

/** Optional parameters. */
export interface AlphaIdsGetConfigurationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getConfiguration operation. */
export type AlphaIdsGetConfigurationResponse = AlphaIdConfiguration;

/** Optional parameters. */
export interface AlphaIdsUpsertConfigurationOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the upsertConfiguration operation. */
export type AlphaIdsUpsertConfigurationResponse = AlphaIdConfiguration;

/** Optional parameters. */
export interface AlphaIDsClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
