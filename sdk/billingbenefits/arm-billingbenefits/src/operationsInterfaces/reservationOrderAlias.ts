/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ReservationOrderAliasRequest,
  ReservationOrderAliasCreateOptionalParams,
  ReservationOrderAliasCreateResponse,
  ReservationOrderAliasGetOptionalParams,
  ReservationOrderAliasGetResponse
} from "../models/index.js";

/** Interface representing a ReservationOrderAlias. */
export interface ReservationOrderAlias {
  /**
   * Create a reservation order alias.
   * @param reservationOrderAliasName Name of the reservation order alias
   * @param body Request body for creating a reservation order alias
   * @param options The options parameters.
   */
  beginCreate(
    reservationOrderAliasName: string,
    body: ReservationOrderAliasRequest,
    options?: ReservationOrderAliasCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ReservationOrderAliasCreateResponse>,
      ReservationOrderAliasCreateResponse
    >
  >;
  /**
   * Create a reservation order alias.
   * @param reservationOrderAliasName Name of the reservation order alias
   * @param body Request body for creating a reservation order alias
   * @param options The options parameters.
   */
  beginCreateAndWait(
    reservationOrderAliasName: string,
    body: ReservationOrderAliasRequest,
    options?: ReservationOrderAliasCreateOptionalParams
  ): Promise<ReservationOrderAliasCreateResponse>;
  /**
   * Get a reservation order alias.
   * @param reservationOrderAliasName Name of the reservation order alias
   * @param options The options parameters.
   */
  get(
    reservationOrderAliasName: string,
    options?: ReservationOrderAliasGetOptionalParams
  ): Promise<ReservationOrderAliasGetResponse>;
}
