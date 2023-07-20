/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AccessReviewInstance,
  AccessReviewInstancesAssignedForMyApprovalListOptionalParams,
  AccessReviewInstancesAssignedForMyApprovalGetByIdOptionalParams,
  AccessReviewInstancesAssignedForMyApprovalGetByIdResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AccessReviewInstancesAssignedForMyApproval. */
export interface AccessReviewInstancesAssignedForMyApproval {
  /**
   * Get access review instances assigned for my approval.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param options The options parameters.
   */
  list(
    scheduleDefinitionId: string,
    options?: AccessReviewInstancesAssignedForMyApprovalListOptionalParams
  ): PagedAsyncIterableIterator<AccessReviewInstance>;
  /**
   * Get single access review instance assigned for my approval.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The options parameters.
   */
  getById(
    scheduleDefinitionId: string,
    id: string,
    options?: AccessReviewInstancesAssignedForMyApprovalGetByIdOptionalParams
  ): Promise<AccessReviewInstancesAssignedForMyApprovalGetByIdResponse>;
}