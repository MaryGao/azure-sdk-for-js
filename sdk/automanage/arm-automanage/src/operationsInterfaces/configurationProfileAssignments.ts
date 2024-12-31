/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ConfigurationProfileAssignment,
  ConfigurationProfileAssignmentsListByVirtualMachinesOptionalParams,
  ConfigurationProfileAssignmentsListOptionalParams,
  ConfigurationProfileAssignmentsListBySubscriptionOptionalParams,
  ConfigurationProfileAssignmentsListByMachineNameOptionalParams,
  ConfigurationProfileAssignmentsListByClusterNameOptionalParams,
  ConfigurationProfileAssignmentsCreateOrUpdateOptionalParams,
  ConfigurationProfileAssignmentsCreateOrUpdateResponse,
  ConfigurationProfileAssignmentsGetOptionalParams,
  ConfigurationProfileAssignmentsGetResponse,
  ConfigurationProfileAssignmentsDeleteOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ConfigurationProfileAssignments. */
export interface ConfigurationProfileAssignments {
  /**
   * Get list of configuration profile assignments
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  listByVirtualMachines(
    resourceGroupName: string,
    vmName: string,
    options?: ConfigurationProfileAssignmentsListByVirtualMachinesOptionalParams
  ): PagedAsyncIterableIterator<ConfigurationProfileAssignment>;
  /**
   * Get list of configuration profile assignments
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: ConfigurationProfileAssignmentsListOptionalParams
  ): PagedAsyncIterableIterator<ConfigurationProfileAssignment>;
  /**
   * Get list of configuration profile assignments under a given subscription
   * @param options The options parameters.
   */
  listBySubscription(
    options?: ConfigurationProfileAssignmentsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<ConfigurationProfileAssignment>;
  /**
   * Get list of configuration profile assignments
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the Arc machine.
   * @param options The options parameters.
   */
  listByMachineName(
    resourceGroupName: string,
    machineName: string,
    options?: ConfigurationProfileAssignmentsListByMachineNameOptionalParams
  ): PagedAsyncIterableIterator<ConfigurationProfileAssignment>;
  /**
   * Get list of configuration profile assignments
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Arc machine.
   * @param options The options parameters.
   */
  listByClusterName(
    resourceGroupName: string,
    clusterName: string,
    options?: ConfigurationProfileAssignmentsListByClusterNameOptionalParams
  ): PagedAsyncIterableIterator<ConfigurationProfileAssignment>;
  /**
   * Creates an association between a VM and Automanage configuration profile
   * @param configurationProfileAssignmentName Name of the configuration profile assignment. Only default
   *                                           is supported.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the create or update configuration profile assignment.
   * @param options The options parameters.
   */
  createOrUpdate(
    configurationProfileAssignmentName: string,
    resourceGroupName: string,
    vmName: string,
    parameters: ConfigurationProfileAssignment,
    options?: ConfigurationProfileAssignmentsCreateOrUpdateOptionalParams
  ): Promise<ConfigurationProfileAssignmentsCreateOrUpdateResponse>;
  /**
   * Get information about a configuration profile assignment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param configurationProfileAssignmentName The configuration profile assignment name.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    configurationProfileAssignmentName: string,
    vmName: string,
    options?: ConfigurationProfileAssignmentsGetOptionalParams
  ): Promise<ConfigurationProfileAssignmentsGetResponse>;
  /**
   * Delete a configuration profile assignment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param configurationProfileAssignmentName Name of the configuration profile assignment
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    configurationProfileAssignmentName: string,
    vmName: string,
    options?: ConfigurationProfileAssignmentsDeleteOptionalParams
  ): Promise<void>;
}
