/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ConfigurationProfileAssignment,
  ConfigurationProfileHCIAssignmentsCreateOrUpdateOptionalParams,
  ConfigurationProfileHCIAssignmentsCreateOrUpdateResponse,
  ConfigurationProfileHCIAssignmentsGetOptionalParams,
  ConfigurationProfileHCIAssignmentsGetResponse,
  ConfigurationProfileHCIAssignmentsDeleteOptionalParams
} from "../models/index.js";

/** Interface representing a ConfigurationProfileHCIAssignments. */
export interface ConfigurationProfileHCIAssignments {
  /**
   * Creates an association between a AzureStackHCI cluster and Automanage configuration profile
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Arc machine.
   * @param configurationProfileAssignmentName Name of the configuration profile assignment. Only default
   *                                           is supported.
   * @param parameters Parameters supplied to the create or update configuration profile assignment.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    clusterName: string,
    configurationProfileAssignmentName: string,
    parameters: ConfigurationProfileAssignment,
    options?: ConfigurationProfileHCIAssignmentsCreateOrUpdateOptionalParams
  ): Promise<ConfigurationProfileHCIAssignmentsCreateOrUpdateResponse>;
  /**
   * Get information about a configuration profile assignment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Arc machine.
   * @param configurationProfileAssignmentName The configuration profile assignment name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    configurationProfileAssignmentName: string,
    options?: ConfigurationProfileHCIAssignmentsGetOptionalParams
  ): Promise<ConfigurationProfileHCIAssignmentsGetResponse>;
  /**
   * Delete a configuration profile assignment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Arc machine.
   * @param configurationProfileAssignmentName Name of the configuration profile assignment
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    clusterName: string,
    configurationProfileAssignmentName: string,
    options?: ConfigurationProfileHCIAssignmentsDeleteOptionalParams
  ): Promise<void>;
}
