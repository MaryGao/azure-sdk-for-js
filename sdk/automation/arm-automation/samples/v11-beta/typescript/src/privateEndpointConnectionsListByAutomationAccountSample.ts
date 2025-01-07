/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AutomationClient } from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to List all private endpoint connections on a Automation account.
 *
 * @summary List all private endpoint connections on a Automation account.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/preview/2020-01-13-preview/examples/PrivateEndpointConnectionListGet.json
 */
async function getsPrivateEndpointConnection() {
  const subscriptionId =
    process.env["AUTOMATION_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg1";
  const automationAccountName = "ddb1";
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.privateEndpointConnections.listByAutomationAccount(
    resourceGroupName,
    automationAccountName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getsPrivateEndpointConnection();
}

main().catch(console.error);
