/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a list of managed server DNS aliases for a managed server.
 *
 * @summary Gets a list of managed server DNS aliases for a managed server.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-11-01-preview/examples/ManagedServerDnsAliasList.json
 */
async function listManagedServerDnsAliases() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "Default";
  const managedInstanceName = "dns-mi";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedServerDnsAliases.listByManagedInstance(
    resourceGroupName,
    managedInstanceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listManagedServerDnsAliases();
}

main().catch(console.error);
