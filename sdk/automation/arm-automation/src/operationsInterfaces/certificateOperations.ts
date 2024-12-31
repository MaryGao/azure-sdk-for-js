/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Certificate,
  CertificateListByAutomationAccountOptionalParams,
  CertificateDeleteOptionalParams,
  CertificateGetOptionalParams,
  CertificateGetResponse,
  CertificateCreateOrUpdateParameters,
  CertificateCreateOrUpdateOptionalParams,
  CertificateCreateOrUpdateResponse,
  CertificateUpdateParameters,
  CertificateUpdateOptionalParams,
  CertificateUpdateResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a CertificateOperations. */
export interface CertificateOperations {
  /**
   * Retrieve a list of certificates.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: CertificateListByAutomationAccountOptionalParams
  ): PagedAsyncIterableIterator<Certificate>;
  /**
   * Delete the certificate.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param certificateName The name of certificate.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    automationAccountName: string,
    certificateName: string,
    options?: CertificateDeleteOptionalParams
  ): Promise<void>;
  /**
   * Retrieve the certificate identified by certificate name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param certificateName The name of certificate.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    certificateName: string,
    options?: CertificateGetOptionalParams
  ): Promise<CertificateGetResponse>;
  /**
   * Create a certificate.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param certificateName The parameters supplied to the create or update certificate operation.
   * @param parameters The parameters supplied to the create or update certificate operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    automationAccountName: string,
    certificateName: string,
    parameters: CertificateCreateOrUpdateParameters,
    options?: CertificateCreateOrUpdateOptionalParams
  ): Promise<CertificateCreateOrUpdateResponse>;
  /**
   * Update a certificate.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param certificateName The parameters supplied to the update certificate operation.
   * @param parameters The parameters supplied to the update certificate operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    automationAccountName: string,
    certificateName: string,
    parameters: CertificateUpdateParameters,
    options?: CertificateUpdateOptionalParams
  ): Promise<CertificateUpdateResponse>;
}
