/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Update an existing event subscription of a namespace topic.
 *
 * @summary Update an existing event subscription of a namespace topic.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2023-06-01-preview/examples/NamespaceTopicEventSubscriptions_Update.json
 */
async function namespaceTopicEventSubscriptionsUpdate() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] || "8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const resourceGroupName = process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const namespaceName = "exampleNamespaceName1";
  const topicName = "exampleNamespaceTopicName1";
  const eventSubscriptionName = "exampleNamespaceTopicEventSubscriptionName1";
  const eventSubscriptionUpdateParameters = {
    deliveryConfiguration: {
      deliveryMode: "Queue",
      queue: {
        eventTimeToLive: "P1D",
        maxDeliveryCount: 3,
        receiveLockDurationInSeconds: 60,
      },
    },
    eventDeliverySchema: "CloudEventSchemaV1_0",
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.namespaceTopicEventSubscriptions.beginUpdateAndWait(
    resourceGroupName,
    namespaceName,
    topicName,
    eventSubscriptionName,
    eventSubscriptionUpdateParameters
  );
  console.log(result);
}

async function main() {
  namespaceTopicEventSubscriptionsUpdate();
}

main().catch(console.error);
