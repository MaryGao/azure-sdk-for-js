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
  BillingRequest,
  BillingRequestsListByBillingProfileOptionalParams,
  BillingRequestsListByCustomerOptionalParams,
  BillingRequestsListByInvoiceSectionOptionalParams,
  BillingRequestsListByBillingAccountOptionalParams,
  BillingRequestsListByUserOptionalParams,
  BillingRequestsGetOptionalParams,
  BillingRequestsGetResponse,
  BillingRequestsCreateOrUpdateOptionalParams,
  BillingRequestsCreateOrUpdateResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BillingRequests. */
export interface BillingRequests {
  /**
   * The list of billing requests submitted for the billing profile.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  listByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    options?: BillingRequestsListByBillingProfileOptionalParams,
  ): PagedAsyncIterableIterator<BillingRequest>;
  /**
   * The list of billing requests submitted for the customer.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param customerName The ID that uniquely identifies a customer.
   * @param options The options parameters.
   */
  listByCustomer(
    billingAccountName: string,
    billingProfileName: string,
    customerName: string,
    options?: BillingRequestsListByCustomerOptionalParams,
  ): PagedAsyncIterableIterator<BillingRequest>;
  /**
   * The list of billing requests submitted for the invoice section.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The options parameters.
   */
  listByInvoiceSection(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: BillingRequestsListByInvoiceSectionOptionalParams,
  ): PagedAsyncIterableIterator<BillingRequest>;
  /**
   * The list of billing requests submitted for the billing account.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  listByBillingAccount(
    billingAccountName: string,
    options?: BillingRequestsListByBillingAccountOptionalParams,
  ): PagedAsyncIterableIterator<BillingRequest>;
  /**
   * The list of billing requests submitted by a user.
   * @param options The options parameters.
   */
  listByUser(
    options?: BillingRequestsListByUserOptionalParams,
  ): PagedAsyncIterableIterator<BillingRequest>;
  /**
   * Gets a billing request by its ID.
   * @param billingRequestName The ID that uniquely identifies a billing request.
   * @param options The options parameters.
   */
  get(
    billingRequestName: string,
    options?: BillingRequestsGetOptionalParams,
  ): Promise<BillingRequestsGetResponse>;
  /**
   * Create or update a billing request.
   * @param billingRequestName The ID that uniquely identifies a billing request.
   * @param parameters A request submitted by a user to manage billing. Users with an owner role on the
   *                   scope can approve or decline these requests.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    billingRequestName: string,
    parameters: BillingRequest,
    options?: BillingRequestsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BillingRequestsCreateOrUpdateResponse>,
      BillingRequestsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a billing request.
   * @param billingRequestName The ID that uniquely identifies a billing request.
   * @param parameters A request submitted by a user to manage billing. Users with an owner role on the
   *                   scope can approve or decline these requests.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    billingRequestName: string,
    parameters: BillingRequest,
    options?: BillingRequestsCreateOrUpdateOptionalParams,
  ): Promise<BillingRequestsCreateOrUpdateResponse>;
}
