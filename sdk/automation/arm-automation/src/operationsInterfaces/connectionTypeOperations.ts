/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ConnectionType,
  ConnectionTypeListByAutomationAccountOptionalParams,
  ConnectionTypeDeleteOptionalParams,
  ConnectionTypeGetOptionalParams,
  ConnectionTypeGetResponse,
  ConnectionTypeCreateOrUpdateParameters,
  ConnectionTypeCreateOrUpdateOptionalParams,
  ConnectionTypeCreateOrUpdateResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ConnectionTypeOperations. */
export interface ConnectionTypeOperations {
  /**
   * Retrieve a list of connection types.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: ConnectionTypeListByAutomationAccountOptionalParams
  ): PagedAsyncIterableIterator<ConnectionType>;
  /**
   * Delete the connection type.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionTypeName The name of connection type.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    automationAccountName: string,
    connectionTypeName: string,
    options?: ConnectionTypeDeleteOptionalParams
  ): Promise<void>;
  /**
   * Retrieve the connection type identified by connection type name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionTypeName The name of connection type.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    connectionTypeName: string,
    options?: ConnectionTypeGetOptionalParams
  ): Promise<ConnectionTypeGetResponse>;
  /**
   * Create a connection type.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionTypeName The parameters supplied to the create or update connection type operation.
   * @param parameters The parameters supplied to the create or update connection type operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    automationAccountName: string,
    connectionTypeName: string,
    parameters: ConnectionTypeCreateOrUpdateParameters,
    options?: ConnectionTypeCreateOrUpdateOptionalParams
  ): Promise<ConnectionTypeCreateOrUpdateResponse>;
}
