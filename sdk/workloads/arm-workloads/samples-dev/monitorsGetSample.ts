/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { WorkloadsClient } from "@azure/arm-workloads";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets properties of a SAP monitor for the specified subscription, resource group, and resource name.
 *
 * @summary Gets properties of a SAP monitor for the specified subscription, resource group, and resource name.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/stable/2023-04-01/examples/workloadmonitor/monitors_Get.json
 */
async function getPropertiesOfASapMonitor() {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["WORKLOADS_RESOURCE_GROUP"] || "myResourceGroup";
  const monitorName = "mySapMonitor";
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.monitors.get(resourceGroupName, monitorName);
  console.log(result);
}

async function main() {
  getPropertiesOfASapMonitor();
}

main().catch(console.error);
