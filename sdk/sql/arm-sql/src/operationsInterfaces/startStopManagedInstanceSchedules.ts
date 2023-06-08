/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  StartStopManagedInstanceSchedule,
  StartStopManagedInstanceSchedulesListByInstanceOptionalParams,
  StartStopScheduleName,
  StartStopManagedInstanceSchedulesGetOptionalParams,
  StartStopManagedInstanceSchedulesGetResponse,
  StartStopManagedInstanceSchedulesCreateOrUpdateOptionalParams,
  StartStopManagedInstanceSchedulesCreateOrUpdateResponse,
  StartStopManagedInstanceSchedulesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a StartStopManagedInstanceSchedules. */
export interface StartStopManagedInstanceSchedules {
  /**
   * Lists the managed instance's Start/Stop schedules.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: StartStopManagedInstanceSchedulesListByInstanceOptionalParams
  ): PagedAsyncIterableIterator<StartStopManagedInstanceSchedule>;
  /**
   * Gets the managed instance's Start/Stop schedule.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param startStopScheduleName Name of the managed instance Start/Stop schedule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    startStopScheduleName: StartStopScheduleName,
    options?: StartStopManagedInstanceSchedulesGetOptionalParams
  ): Promise<StartStopManagedInstanceSchedulesGetResponse>;
  /**
   * Creates or updates the managed instance's Start/Stop schedule.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param startStopScheduleName Name of the managed instance Start/Stop schedule.
   * @param parameters The requested managed instance Start/Stop schedule.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    startStopScheduleName: StartStopScheduleName,
    parameters: StartStopManagedInstanceSchedule,
    options?: StartStopManagedInstanceSchedulesCreateOrUpdateOptionalParams
  ): Promise<StartStopManagedInstanceSchedulesCreateOrUpdateResponse>;
  /**
   * Deletes the managed instance's Start/Stop schedule.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param startStopScheduleName Name of the managed instance Start/Stop schedule.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    managedInstanceName: string,
    startStopScheduleName: StartStopScheduleName,
    options?: StartStopManagedInstanceSchedulesDeleteOptionalParams
  ): Promise<void>;
}
