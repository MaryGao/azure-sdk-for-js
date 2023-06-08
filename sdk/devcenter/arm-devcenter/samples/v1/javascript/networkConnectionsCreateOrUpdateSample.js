/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { DevCenterClient } = require("@azure/arm-devcenter");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates a Network Connections resource
 *
 * @summary Creates or updates a Network Connections resource
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/stable/2023-04-01/examples/NetworkConnections_Put.json
 */
async function networkConnectionsCreateOrUpdate() {
  const subscriptionId =
    process.env["DEVCENTER_SUBSCRIPTION_ID"] || "0ac520ee-14c0-480f-b6c9-0a90c58ffff";
  const resourceGroupName = process.env["DEVCENTER_RESOURCE_GROUP"] || "rg1";
  const networkConnectionName = "uswest3network";
  const body = {
    domainJoinType: "HybridAzureADJoin",
    domainName: "mydomaincontroller.local",
    domainPassword: "Password value for user",
    domainUsername: "testuser@mydomaincontroller.local",
    location: "centralus",
    networkingResourceGroupName: "NetworkInterfaces",
    subnetId:
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/ExampleRG/providers/Microsoft.Network/virtualNetworks/ExampleVNet/subnets/default",
  };
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const result = await client.networkConnections.beginCreateOrUpdateAndWait(
    resourceGroupName,
    networkConnectionName,
    body
  );
  console.log(result);
}

async function main() {
  networkConnectionsCreateOrUpdate();
}

main().catch(console.error);
