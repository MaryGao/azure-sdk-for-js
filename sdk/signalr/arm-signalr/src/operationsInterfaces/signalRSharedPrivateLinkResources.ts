/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  SharedPrivateLinkResource,
  SignalRSharedPrivateLinkResourcesListOptionalParams,
  SignalRSharedPrivateLinkResourcesGetOptionalParams,
  SignalRSharedPrivateLinkResourcesGetResponse,
  SignalRSharedPrivateLinkResourcesCreateOrUpdateOptionalParams,
  SignalRSharedPrivateLinkResourcesCreateOrUpdateResponse,
  SignalRSharedPrivateLinkResourcesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SignalRSharedPrivateLinkResources. */
export interface SignalRSharedPrivateLinkResources {
  /**
   * List shared private link resources
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    options?: SignalRSharedPrivateLinkResourcesListOptionalParams
  ): PagedAsyncIterableIterator<SharedPrivateLinkResource>;
  /**
   * Get the specified shared private link resource
   * @param sharedPrivateLinkResourceName The name of the shared private link resource
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  get(
    sharedPrivateLinkResourceName: string,
    resourceGroupName: string,
    resourceName: string,
    options?: SignalRSharedPrivateLinkResourcesGetOptionalParams
  ): Promise<SignalRSharedPrivateLinkResourcesGetResponse>;
  /**
   * Create or update a shared private link resource
   * @param sharedPrivateLinkResourceName The name of the shared private link resource
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param parameters The shared private link resource
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    sharedPrivateLinkResourceName: string,
    resourceGroupName: string,
    resourceName: string,
    parameters: SharedPrivateLinkResource,
    options?: SignalRSharedPrivateLinkResourcesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SignalRSharedPrivateLinkResourcesCreateOrUpdateResponse>,
      SignalRSharedPrivateLinkResourcesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a shared private link resource
   * @param sharedPrivateLinkResourceName The name of the shared private link resource
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param parameters The shared private link resource
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    sharedPrivateLinkResourceName: string,
    resourceGroupName: string,
    resourceName: string,
    parameters: SharedPrivateLinkResource,
    options?: SignalRSharedPrivateLinkResourcesCreateOrUpdateOptionalParams
  ): Promise<SignalRSharedPrivateLinkResourcesCreateOrUpdateResponse>;
  /**
   * Delete the specified shared private link resource
   * @param sharedPrivateLinkResourceName The name of the shared private link resource
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  beginDelete(
    sharedPrivateLinkResourceName: string,
    resourceGroupName: string,
    resourceName: string,
    options?: SignalRSharedPrivateLinkResourcesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete the specified shared private link resource
   * @param sharedPrivateLinkResourceName The name of the shared private link resource
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    sharedPrivateLinkResourceName: string,
    resourceGroupName: string,
    resourceName: string,
    options?: SignalRSharedPrivateLinkResourcesDeleteOptionalParams
  ): Promise<void>;
}
