/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Report,
  HCIReportsListByConfigurationProfileAssignmentsOptionalParams,
  HCIReportsGetOptionalParams,
  HCIReportsGetResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a HCIReports. */
export interface HCIReports {
  /**
   * Retrieve a list of reports within a given configuration profile assignment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Arc machine.
   * @param configurationProfileAssignmentName The configuration profile assignment name.
   * @param options The options parameters.
   */
  listByConfigurationProfileAssignments(
    resourceGroupName: string,
    clusterName: string,
    configurationProfileAssignmentName: string,
    options?: HCIReportsListByConfigurationProfileAssignmentsOptionalParams
  ): PagedAsyncIterableIterator<Report>;
  /**
   * Get information about a report associated with a configuration profile assignment run
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Arc machine.
   * @param configurationProfileAssignmentName The configuration profile assignment name.
   * @param reportName The report name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    configurationProfileAssignmentName: string,
    reportName: string,
    options?: HCIReportsGetOptionalParams
  ): Promise<HCIReportsGetResponse>;
}
