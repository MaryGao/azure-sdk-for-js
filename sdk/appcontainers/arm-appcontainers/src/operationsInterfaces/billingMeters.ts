/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  BillingMetersGetOptionalParams,
  BillingMetersGetResponse,
} from "../models/index.js";

/** Interface representing a BillingMeters. */
export interface BillingMeters {
  /**
   * Get all billingMeters for a location.
   * @param location The name of Azure region.
   * @param options The options parameters.
   */
  get(
    location: string,
    options?: BillingMetersGetOptionalParams,
  ): Promise<BillingMetersGetResponse>;
}
