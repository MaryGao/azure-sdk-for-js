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
  Reservation,
  ReservationsListByBillingAccountOptionalParams,
  ReservationsListByBillingProfileOptionalParams,
  ReservationsListByReservationOrderOptionalParams,
  ReservationsGetByReservationOrderOptionalParams,
  ReservationsGetByReservationOrderResponse,
  Patch,
  ReservationsUpdateByBillingAccountOptionalParams,
  ReservationsUpdateByBillingAccountResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Reservations. */
export interface Reservations {
  /**
   * Lists the reservations in the billing account and the roll up counts of reservations group by
   * provisioning states.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  listByBillingAccount(
    billingAccountName: string,
    options?: ReservationsListByBillingAccountOptionalParams,
  ): PagedAsyncIterableIterator<Reservation>;
  /**
   * Lists the reservations for a billing profile and the roll up counts of reservations group by
   * provisioning state.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  listByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    options?: ReservationsListByBillingProfileOptionalParams,
  ): PagedAsyncIterableIterator<Reservation>;
  /**
   * List Reservations within a single ReservationOrder in the billing account.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param reservationOrderId Order Id of the reservation
   * @param options The options parameters.
   */
  listByReservationOrder(
    billingAccountName: string,
    reservationOrderId: string,
    options?: ReservationsListByReservationOrderOptionalParams,
  ): PagedAsyncIterableIterator<Reservation>;
  /**
   * Get specific Reservation details in the billing account.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param reservationOrderId Order Id of the reservation
   * @param reservationId Id of the reservation item
   * @param options The options parameters.
   */
  getByReservationOrder(
    billingAccountName: string,
    reservationOrderId: string,
    reservationId: string,
    options?: ReservationsGetByReservationOrderOptionalParams,
  ): Promise<ReservationsGetByReservationOrderResponse>;
  /**
   * Update reservation by billing account.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param reservationOrderId Order Id of the reservation
   * @param reservationId Id of the reservation item
   * @param body Request body for patching a reservation
   * @param options The options parameters.
   */
  beginUpdateByBillingAccount(
    billingAccountName: string,
    reservationOrderId: string,
    reservationId: string,
    body: Patch,
    options?: ReservationsUpdateByBillingAccountOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ReservationsUpdateByBillingAccountResponse>,
      ReservationsUpdateByBillingAccountResponse
    >
  >;
  /**
   * Update reservation by billing account.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param reservationOrderId Order Id of the reservation
   * @param reservationId Id of the reservation item
   * @param body Request body for patching a reservation
   * @param options The options parameters.
   */
  beginUpdateByBillingAccountAndWait(
    billingAccountName: string,
    reservationOrderId: string,
    reservationId: string,
    body: Patch,
    options?: ReservationsUpdateByBillingAccountOptionalParams,
  ): Promise<ReservationsUpdateByBillingAccountResponse>;
}
