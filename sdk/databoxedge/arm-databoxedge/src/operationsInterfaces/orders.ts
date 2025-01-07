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
  Order,
  OrdersListByDataBoxEdgeDeviceOptionalParams,
  OrdersGetOptionalParams,
  OrdersGetResponse,
  OrdersCreateOrUpdateOptionalParams,
  OrdersCreateOrUpdateResponse,
  OrdersDeleteOptionalParams,
  OrdersListDCAccessCodeOptionalParams,
  OrdersListDCAccessCodeResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Orders. */
export interface Orders {
  /**
   * Lists all the orders related to a Data Box Edge/Data Box Gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  listByDataBoxEdgeDevice(
    deviceName: string,
    resourceGroupName: string,
    options?: OrdersListByDataBoxEdgeDeviceOptionalParams
  ): PagedAsyncIterableIterator<Order>;
  /**
   * Gets a specific order by name.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  get(
    deviceName: string,
    resourceGroupName: string,
    options?: OrdersGetOptionalParams
  ): Promise<OrdersGetResponse>;
  /**
   * Creates or updates an order.
   * @param deviceName The order details of a device.
   * @param resourceGroupName The resource group name.
   * @param order The order to be created or updated.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    deviceName: string,
    resourceGroupName: string,
    order: Order,
    options?: OrdersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<OrdersCreateOrUpdateResponse>,
      OrdersCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an order.
   * @param deviceName The order details of a device.
   * @param resourceGroupName The resource group name.
   * @param order The order to be created or updated.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    deviceName: string,
    resourceGroupName: string,
    order: Order,
    options?: OrdersCreateOrUpdateOptionalParams
  ): Promise<OrdersCreateOrUpdateResponse>;
  /**
   * Deletes the order related to the device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  beginDelete(
    deviceName: string,
    resourceGroupName: string,
    options?: OrdersDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the order related to the device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    deviceName: string,
    resourceGroupName: string,
    options?: OrdersDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets the DCAccess Code
   * @param deviceName The device name
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  listDCAccessCode(
    deviceName: string,
    resourceGroupName: string,
    options?: OrdersListDCAccessCodeOptionalParams
  ): Promise<OrdersListDCAccessCodeResponse>;
}
