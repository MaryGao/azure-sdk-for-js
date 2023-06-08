/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network-profile-2020-09-01-hybrid");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to This operation retrieves a list of routes the virtual network gateway has learned, including routes learned from BGP peers.
 *
 * @summary This operation retrieves a list of routes the virtual network gateway has learned, including routes learned from BGP peers.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2018-11-01/examples/VirtualNetworkGatewayLearnedRoutes.json
 */
async function getVirtualNetworkGatewayLearnedRoutes() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const virtualNetworkGatewayName = "vpngw";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkGateways.beginGetLearnedRoutesAndWait(
    resourceGroupName,
    virtualNetworkGatewayName
  );
  console.log(result);
}

async function main() {
  getVirtualNetworkGatewayLearnedRoutes();
}

main().catch(console.error);
