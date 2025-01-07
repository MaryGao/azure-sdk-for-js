/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  EnrollmentAccount,
  EnrollmentAccountsListByDepartmentOptionalParams,
  EnrollmentAccountsListByBillingAccountOptionalParams,
  EnrollmentAccountsGetByDepartmentOptionalParams,
  EnrollmentAccountsGetByDepartmentResponse,
  EnrollmentAccountsGetOptionalParams,
  EnrollmentAccountsGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a EnrollmentAccounts. */
export interface EnrollmentAccounts {
  /**
   * Lists the enrollment accounts for a department. The operation is supported only for billing accounts
   * with agreement type Enterprise Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param departmentName The name of the department.
   * @param options The options parameters.
   */
  listByDepartment(
    billingAccountName: string,
    departmentName: string,
    options?: EnrollmentAccountsListByDepartmentOptionalParams,
  ): PagedAsyncIterableIterator<EnrollmentAccount>;
  /**
   * Lists the enrollment accounts for a billing account. The operation is supported only for billing
   * accounts with agreement type Enterprise Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  listByBillingAccount(
    billingAccountName: string,
    options?: EnrollmentAccountsListByBillingAccountOptionalParams,
  ): PagedAsyncIterableIterator<EnrollmentAccount>;
  /**
   * Gets an enrollment account by department. The operation is supported only for billing accounts with
   * agreement type Enterprise Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param departmentName The name of the department.
   * @param enrollmentAccountName The name of the enrollment account.
   * @param options The options parameters.
   */
  getByDepartment(
    billingAccountName: string,
    departmentName: string,
    enrollmentAccountName: string,
    options?: EnrollmentAccountsGetByDepartmentOptionalParams,
  ): Promise<EnrollmentAccountsGetByDepartmentResponse>;
  /**
   * Gets an enrollment account by ID. The operation is supported only for billing accounts with
   * agreement type Enterprise Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param enrollmentAccountName The name of the enrollment account.
   * @param options The options parameters.
   */
  get(
    billingAccountName: string,
    enrollmentAccountName: string,
    options?: EnrollmentAccountsGetOptionalParams,
  ): Promise<EnrollmentAccountsGetResponse>;
}
