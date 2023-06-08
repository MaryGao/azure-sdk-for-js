/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get a specified connection created by this management group.
 *
 * @summary Get a specified connection created by this management group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-11-01/examples/NetworkManagerConnectionManagementGroupGet.json
 */
async function getManagementGroupNetworkManagerConnection() {
  const subscriptionId =
    process.env["NETWORK_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const managementGroupId = "managementGroupA";
  const networkManagerConnectionName = "TestNMConnection";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.managementGroupNetworkManagerConnections.get(
    managementGroupId,
    networkManagerConnectionName
  );
  console.log(result);
}

async function main() {
  getManagementGroupNetworkManagerConnection();
}

main().catch(console.error);
