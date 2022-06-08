/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { TagsObject, NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates virtual wan p2s vpn gateway tags.
 *
 * @summary Updates virtual wan p2s vpn gateway tags.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/examples/P2SVpnGatewayUpdateTags.json
 */
async function p2SVpnGatewayUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const gatewayName = "p2sVpnGateway1";
  const p2SVpnGatewayParameters: TagsObject = {
    tags: { tag1: "value1", tag2: "value2" }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.p2SVpnGateways.beginUpdateTagsAndWait(
    resourceGroupName,
    gatewayName,
    p2SVpnGatewayParameters
  );
  console.log(result);
}

p2SVpnGatewayUpdate().catch(console.error);
