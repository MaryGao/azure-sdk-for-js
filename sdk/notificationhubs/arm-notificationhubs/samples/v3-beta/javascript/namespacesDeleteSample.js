/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NotificationHubsManagementClient } = require("@azure/arm-notificationhubs");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Deletes an existing namespace. This operation also removes all associated notificationHubs under the namespace.
 *
 * @summary Deletes an existing namespace. This operation also removes all associated notificationHubs under the namespace.
 * x-ms-original-file: specification/notificationhubs/resource-manager/Microsoft.NotificationHubs/preview/2023-10-01-preview/examples/Namespaces/Delete.json
 */
async function namespacesDelete() {
  const subscriptionId =
    process.env["NOTIFICATIONHUBS_SUBSCRIPTION_ID"] || "29cfa613-cbbc-4512-b1d6-1b3a92c7fa40";
  const resourceGroupName = process.env["NOTIFICATIONHUBS_RESOURCE_GROUP"] || "5ktrial";
  const namespaceName = "nh-sdk-ns";
  const credential = new DefaultAzureCredential();
  const client = new NotificationHubsManagementClient(credential, subscriptionId);
  const result = await client.namespaces.delete(resourceGroupName, namespaceName);
  console.log(result);
}

async function main() {
  namespacesDelete();
}

main().catch(console.error);
