/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ContainerAppsAPIClient } from "@azure/arm-appcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get a AuthConfig of a Container App.
 *
 * @summary Get a AuthConfig of a Container App.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2024-08-02-preview/examples/AuthConfigs_Get.json
 */
async function getContainerAppAuthConfig() {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] ||
    "651f8027-33e8-4ec4-97b4-f6e9f3dc8744";
  const resourceGroupName =
    process.env["APPCONTAINERS_RESOURCE_GROUP"] || "workerapps-rg-xj";
  const containerAppName = "testcanadacentral";
  const authConfigName = "current";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.containerAppsAuthConfigs.get(
    resourceGroupName,
    containerAppName,
    authConfigName,
  );
  console.log(result);
}

async function main() {
  getContainerAppAuthConfig();
}

main().catch(console.error);
