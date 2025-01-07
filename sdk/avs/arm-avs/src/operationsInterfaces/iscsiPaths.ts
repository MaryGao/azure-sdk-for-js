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
  IscsiPath,
  IscsiPathsListByPrivateCloudOptionalParams,
  IscsiPathsGetOptionalParams,
  IscsiPathsGetResponse,
  IscsiPathsCreateOrUpdateOptionalParams,
  IscsiPathsCreateOrUpdateResponse,
  IscsiPathsDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a IscsiPaths. */
export interface IscsiPaths {
  /**
   * List IscsiPath resources by PrivateCloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  listByPrivateCloud(
    resourceGroupName: string,
    privateCloudName: string,
    options?: IscsiPathsListByPrivateCloudOptionalParams,
  ): PagedAsyncIterableIterator<IscsiPath>;
  /**
   * Get a IscsiPath
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    privateCloudName: string,
    options?: IscsiPathsGetOptionalParams,
  ): Promise<IscsiPathsGetResponse>;
  /**
   * Create a IscsiPath
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    privateCloudName: string,
    resource: IscsiPath,
    options?: IscsiPathsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<IscsiPathsCreateOrUpdateResponse>,
      IscsiPathsCreateOrUpdateResponse
    >
  >;
  /**
   * Create a IscsiPath
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    resource: IscsiPath,
    options?: IscsiPathsCreateOrUpdateOptionalParams,
  ): Promise<IscsiPathsCreateOrUpdateResponse>;
  /**
   * Delete a IscsiPath
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    privateCloudName: string,
    options?: IscsiPathsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a IscsiPath
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    options?: IscsiPathsDeleteOptionalParams,
  ): Promise<void>;
}
