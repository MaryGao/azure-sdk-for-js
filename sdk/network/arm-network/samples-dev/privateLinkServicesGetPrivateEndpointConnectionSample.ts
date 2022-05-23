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
 * This sample demonstrates how to Get the specific private end point connection by specific private link service in the resource group.
 *
 * @summary Get the specific private end point connection by specific private link service in the resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/examples/PrivateLinkServiceGetPrivateEndpointConnection.json
 */
async function getPrivateEndPointConnection() {
  const subscriptionId = "subId";
  const resourceGroupName = "rg1";
  const serviceName = "testPls";
  const peConnectionName = "testPlePeConnection";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.privateLinkServices.getPrivateEndpointConnection(
    resourceGroupName,
    serviceName,
    peConnectionName
  );
  console.log(result);
}

getPrivateEndPointConnection().catch(console.error);
