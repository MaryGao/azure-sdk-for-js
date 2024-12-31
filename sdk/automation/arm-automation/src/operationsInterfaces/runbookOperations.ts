/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Runbook,
  RunbookListByAutomationAccountOptionalParams,
  RunbookPublishOptionalParams,
  RunbookPublishResponse,
  RunbookGetContentOptionalParams,
  RunbookGetContentResponse,
  RunbookGetOptionalParams,
  RunbookGetResponse,
  RunbookCreateOrUpdateParameters,
  RunbookCreateOrUpdateOptionalParams,
  RunbookCreateOrUpdateResponse,
  RunbookUpdateParameters,
  RunbookUpdateOptionalParams,
  RunbookUpdateResponse,
  RunbookDeleteOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RunbookOperations. */
export interface RunbookOperations {
  /**
   * Retrieve a list of runbooks.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: RunbookListByAutomationAccountOptionalParams
  ): PagedAsyncIterableIterator<Runbook>;
  /**
   * Publish runbook draft.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The parameters supplied to the publish runbook operation.
   * @param options The options parameters.
   */
  beginPublish(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    options?: RunbookPublishOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<RunbookPublishResponse>,
      RunbookPublishResponse
    >
  >;
  /**
   * Publish runbook draft.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The parameters supplied to the publish runbook operation.
   * @param options The options parameters.
   */
  beginPublishAndWait(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    options?: RunbookPublishOptionalParams
  ): Promise<RunbookPublishResponse>;
  /**
   * Retrieve the content of runbook identified by runbook name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param options The options parameters.
   */
  getContent(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    options?: RunbookGetContentOptionalParams
  ): Promise<RunbookGetContentResponse>;
  /**
   * Retrieve the runbook identified by runbook name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    options?: RunbookGetOptionalParams
  ): Promise<RunbookGetResponse>;
  /**
   * Create the runbook identified by runbook name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param parameters The create or update parameters for runbook. Provide either content link for a
   *                   published runbook or draft, not both.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    parameters: RunbookCreateOrUpdateParameters,
    options?: RunbookCreateOrUpdateOptionalParams
  ): Promise<RunbookCreateOrUpdateResponse>;
  /**
   * Update the runbook identified by runbook name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param parameters The update parameters for runbook.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    parameters: RunbookUpdateParameters,
    options?: RunbookUpdateOptionalParams
  ): Promise<RunbookUpdateResponse>;
  /**
   * Delete the runbook by name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    options?: RunbookDeleteOptionalParams
  ): Promise<void>;
}
