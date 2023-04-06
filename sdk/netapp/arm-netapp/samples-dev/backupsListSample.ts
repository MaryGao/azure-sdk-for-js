/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetAppManagementClient } from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List all backups for a volume
 *
 * @summary List all backups for a volume
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2022-09-01/examples/Backups_List.json
 */
async function backupsList() {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] ||
    "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const poolName = "pool1";
  const volumeName = "volume1";
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.backups.list(
    resourceGroupName,
    accountName,
    poolName,
    volumeName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  backupsList();
}

main().catch(console.error);
