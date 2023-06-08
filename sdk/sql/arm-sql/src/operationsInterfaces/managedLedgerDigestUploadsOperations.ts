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
  ManagedLedgerDigestUploads,
  ManagedLedgerDigestUploadsListByDatabaseOptionalParams,
  ManagedLedgerDigestUploadsName,
  ManagedLedgerDigestUploadsGetOptionalParams,
  ManagedLedgerDigestUploadsGetResponse,
  ManagedLedgerDigestUploadsCreateOrUpdateOptionalParams,
  ManagedLedgerDigestUploadsCreateOrUpdateResponse,
  ManagedLedgerDigestUploadsDisableOptionalParams,
  ManagedLedgerDigestUploadsDisableResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedLedgerDigestUploadsOperations. */
export interface ManagedLedgerDigestUploadsOperations {
  /**
   * Gets all ledger digest upload settings on a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  listByDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedLedgerDigestUploadsListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<ManagedLedgerDigestUploads>;
  /**
   * Gets the current ledger digest upload configuration for a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param ledgerDigestUploads
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    ledgerDigestUploads: ManagedLedgerDigestUploadsName,
    options?: ManagedLedgerDigestUploadsGetOptionalParams
  ): Promise<ManagedLedgerDigestUploadsGetResponse>;
  /**
   * Enables upload ledger digests to an Azure Storage account or an Azure Confidential Ledger instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param ledgerDigestUploads The name of the Ledger Digest Upload Configurations.
   * @param parameters The Ledger Digest Storage Endpoint.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    ledgerDigestUploads: ManagedLedgerDigestUploadsName,
    parameters: ManagedLedgerDigestUploads,
    options?: ManagedLedgerDigestUploadsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedLedgerDigestUploadsCreateOrUpdateResponse>,
      ManagedLedgerDigestUploadsCreateOrUpdateResponse
    >
  >;
  /**
   * Enables upload ledger digests to an Azure Storage account or an Azure Confidential Ledger instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param ledgerDigestUploads The name of the Ledger Digest Upload Configurations.
   * @param parameters The Ledger Digest Storage Endpoint.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    ledgerDigestUploads: ManagedLedgerDigestUploadsName,
    parameters: ManagedLedgerDigestUploads,
    options?: ManagedLedgerDigestUploadsCreateOrUpdateOptionalParams
  ): Promise<ManagedLedgerDigestUploadsCreateOrUpdateResponse>;
  /**
   * Disables uploading ledger digests to an Azure Storage account or an Azure Confidential Ledger
   * instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param ledgerDigestUploads
   * @param options The options parameters.
   */
  beginDisable(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    ledgerDigestUploads: ManagedLedgerDigestUploadsName,
    options?: ManagedLedgerDigestUploadsDisableOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedLedgerDigestUploadsDisableResponse>,
      ManagedLedgerDigestUploadsDisableResponse
    >
  >;
  /**
   * Disables uploading ledger digests to an Azure Storage account or an Azure Confidential Ledger
   * instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param ledgerDigestUploads
   * @param options The options parameters.
   */
  beginDisableAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    ledgerDigestUploads: ManagedLedgerDigestUploadsName,
    options?: ManagedLedgerDigestUploadsDisableOptionalParams
  ): Promise<ManagedLedgerDigestUploadsDisableResponse>;
}
