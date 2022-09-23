/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  TargetType,
  TargetTypesListOptionalParams,
  TargetTypesGetOptionalParams,
  TargetTypesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a TargetTypes. */
export interface TargetTypes {
  /**
   * Get a list of Target Type resources for given location.
   * @param locationName String that represents a Location resource name.
   * @param options The options parameters.
   */
  list(
    locationName: string,
    options?: TargetTypesListOptionalParams
  ): PagedAsyncIterableIterator<TargetType>;
  /**
   * Get a Target Type resources for given location.
   * @param locationName String that represents a Location resource name.
   * @param targetTypeName String that represents a Target Type resource name.
   * @param options The options parameters.
   */
  get(
    locationName: string,
    targetTypeName: string,
    options?: TargetTypesGetOptionalParams
  ): Promise<TargetTypesGetResponse>;
}
