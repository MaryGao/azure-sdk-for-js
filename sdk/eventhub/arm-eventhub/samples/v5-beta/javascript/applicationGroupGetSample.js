/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { EventHubManagementClient } = require("@azure/arm-eventhub");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets an ApplicationGroup for a Namespace.
 *
 * @summary Gets an ApplicationGroup for a Namespace.
 * x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/preview/2022-10-01-preview/examples/ApplicationGroup/ApplicationGroupGet.json
 */
async function applicationGroupGet() {
  const subscriptionId =
    process.env["EVENTHUB_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["EVENTHUB_RESOURCE_GROUP"] || "contosotest";
  const namespaceName = "contoso-ua-test-eh-system-1";
  const applicationGroupName = "appGroup1";
  const credential = new DefaultAzureCredential();
  const client = new EventHubManagementClient(credential, subscriptionId);
  const result = await client.applicationGroupOperations.get(
    resourceGroupName,
    namespaceName,
    applicationGroupName
  );
  console.log(result);
}

async function main() {
  applicationGroupGet();
}

main().catch(console.error);
