/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  AmlFilesystemArchiveInfo,
  AmlFilesystemsArchiveOptionalParams,
  StorageCacheManagementClient
} from "@azure/arm-storagecache";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Archive data from the AML file system.
 *
 * @summary Archive data from the AML file system.
 * x-ms-original-file: specification/storagecache/resource-manager/Microsoft.StorageCache/preview/2023-03-01-preview/examples/amlFilesystems_Archive.json
 */
async function amlFilesystemsArchive() {
  const subscriptionId =
    process.env["STORAGECACHE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["STORAGECACHE_RESOURCE_GROUP"] || "scgroup";
  const amlFilesystemName = "sc";
  const archiveInfo: AmlFilesystemArchiveInfo = { filesystemPath: "/" };
  const options: AmlFilesystemsArchiveOptionalParams = { archiveInfo };
  const credential = new DefaultAzureCredential();
  const client = new StorageCacheManagementClient(credential, subscriptionId);
  const result = await client.amlFilesystems.archive(
    resourceGroupName,
    amlFilesystemName,
    options
  );
  console.log(result);
}

async function main() {
  amlFilesystemsArchive();
}

main().catch(console.error);
