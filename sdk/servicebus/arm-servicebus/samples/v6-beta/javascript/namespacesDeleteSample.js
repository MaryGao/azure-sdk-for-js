/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ServiceBusManagementClient } = require("@azure/arm-servicebus");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Deletes an existing namespace. This operation also removes all associated resources under the namespace.
 *
 * @summary Deletes an existing namespace. This operation also removes all associated resources under the namespace.
 * x-ms-original-file: specification/servicebus/resource-manager/Microsoft.ServiceBus/preview/2022-10-01-preview/examples/NameSpaces/SBNameSpaceDelete.json
 */
async function nameSpaceDelete() {
  const subscriptionId =
    process.env["SERVICEBUS_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["SERVICEBUS_RESOURCE_GROUP"] || "ArunMonocle";
  const namespaceName = "sdk-Namespace-3285";
  const credential = new DefaultAzureCredential();
  const client = new ServiceBusManagementClient(credential, subscriptionId);
  const result = await client.namespaces.beginDeleteAndWait(resourceGroupName, namespaceName);
  console.log(result);
}

async function main() {
  nameSpaceDelete();
}

main().catch(console.error);
