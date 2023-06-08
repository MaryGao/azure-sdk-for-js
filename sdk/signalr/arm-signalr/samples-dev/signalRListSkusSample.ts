/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SignalRManagementClient } from "@azure/arm-signalr";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List all available skus of the resource.
 *
 * @summary List all available skus of the resource.
 * x-ms-original-file: specification/signalr/resource-manager/Microsoft.SignalRService/stable/2023-02-01/examples/SignalR_ListSkus.json
 */
async function signalRListSkus() {
  const subscriptionId =
    process.env["SIGNALR_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["SIGNALR_RESOURCE_GROUP"] || "myResourceGroup";
  const resourceName = "mySignalRService";
  const credential = new DefaultAzureCredential();
  const client = new SignalRManagementClient(credential, subscriptionId);
  const result = await client.signalR.listSkus(resourceGroupName, resourceName);
  console.log(result);
}

async function main() {
  signalRListSkus();
}

main().catch(console.error);
