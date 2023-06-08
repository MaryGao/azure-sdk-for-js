/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AzureBareMetalInstance,
  AzureBareMetalInstancesListBySubscriptionOptionalParams,
  AzureBareMetalInstancesListByResourceGroupOptionalParams,
  AzureBareMetalInstancesGetOptionalParams,
  AzureBareMetalInstancesGetResponse,
  Tags,
  AzureBareMetalInstancesUpdateOptionalParams,
  AzureBareMetalInstancesUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AzureBareMetalInstances. */
export interface AzureBareMetalInstances {
  /**
   * Gets a list of AzureBareMetal instances in the specified subscription. The operations returns
   * various properties of each Azure BareMetal instance.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: AzureBareMetalInstancesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<AzureBareMetalInstance>;
  /**
   * Gets a list of AzureBareMetal instances in the specified subscription and resource group. The
   * operations returns various properties of each Azure BareMetal instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: AzureBareMetalInstancesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<AzureBareMetalInstance>;
  /**
   * Gets an Azure BareMetal instance for the specified subscription, resource group, and instance name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureBareMetalInstanceName Name of the Azure BareMetal on Azure instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    azureBareMetalInstanceName: string,
    options?: AzureBareMetalInstancesGetOptionalParams
  ): Promise<AzureBareMetalInstancesGetResponse>;
  /**
   * Patches the Tags field of a Azure BareMetal instance for the specified subscription, resource group,
   * and instance name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureBareMetalInstanceName Name of the Azure BareMetal on Azure instance.
   * @param tagsParameter Request body that only contains the new Tags field
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    azureBareMetalInstanceName: string,
    tagsParameter: Tags,
    options?: AzureBareMetalInstancesUpdateOptionalParams
  ): Promise<AzureBareMetalInstancesUpdateResponse>;
}
