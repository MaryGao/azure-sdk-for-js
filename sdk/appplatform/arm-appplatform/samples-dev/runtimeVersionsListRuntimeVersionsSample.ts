/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AppPlatformManagementClient } from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists all of the available runtime versions supported by Microsoft.AppPlatform provider.
 *
 * @summary Lists all of the available runtime versions supported by Microsoft.AppPlatform provider.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/stable/2023-12-01/examples/RuntimeVersions_ListRuntimeVersions.json
 */
async function runtimeVersionsListRuntimeVersions() {
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential);
  const result = await client.runtimeVersions.listRuntimeVersions();
  console.log(result);
}

async function main() {
  runtimeVersionsListRuntimeVersions();
}

main().catch(console.error);
