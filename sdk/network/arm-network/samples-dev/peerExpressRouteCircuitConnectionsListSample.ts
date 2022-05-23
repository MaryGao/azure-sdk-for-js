/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets all global reach peer connections associated with a private peering in an express route circuit.
 *
 * @summary Gets all global reach peer connections associated with a private peering in an express route circuit.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/examples/PeerExpressRouteCircuitConnectionList.json
 */
async function listPeerExpressRouteCircuitConnection() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const circuitName = "ExpressRouteARMCircuitA";
  const peeringName = "AzurePrivatePeering";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.peerExpressRouteCircuitConnections.list(
    resourceGroupName,
    circuitName,
    peeringName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listPeerExpressRouteCircuitConnection().catch(console.error);
