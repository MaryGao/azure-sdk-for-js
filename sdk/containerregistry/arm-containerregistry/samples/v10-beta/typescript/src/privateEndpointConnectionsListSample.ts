/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ContainerRegistryManagementClient } from "@azure/arm-containerregistry";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to List all private endpoint connections in a container registry.
 *
 * @summary List all private endpoint connections in a container registry.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2022-02-01-preview/examples/PrivateEndpointConnectionList.json
 */
async function privateEndpointConnectionList() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const registryName = "myRegistry";
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.privateEndpointConnections.list(
    resourceGroupName,
    registryName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

privateEndpointConnectionList().catch(console.error);
