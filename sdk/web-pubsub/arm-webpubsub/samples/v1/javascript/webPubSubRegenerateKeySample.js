/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { WebPubSubManagementClient } = require("@azure/arm-webpubsub");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Regenerate the access key for the resource. PrimaryKey and SecondaryKey cannot be regenerated at the same time.
 *
 * @summary Regenerate the access key for the resource. PrimaryKey and SecondaryKey cannot be regenerated at the same time.
 * x-ms-original-file: specification/webpubsub/resource-manager/Microsoft.SignalRService/stable/2023-02-01/examples/WebPubSub_RegenerateKey.json
 */
async function webPubSubRegenerateKey() {
  const subscriptionId =
    process.env["WEB-PUBSUB_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["WEB-PUBSUB_RESOURCE_GROUP"] || "myResourceGroup";
  const resourceName = "myWebPubSubService";
  const parameters = { keyType: "Primary" };
  const credential = new DefaultAzureCredential();
  const client = new WebPubSubManagementClient(credential, subscriptionId);
  const result = await client.webPubSub.beginRegenerateKeyAndWait(
    resourceGroupName,
    resourceName,
    parameters
  );
  console.log(result);
}

async function main() {
  webPubSubRegenerateKey();
}

main().catch(console.error);
