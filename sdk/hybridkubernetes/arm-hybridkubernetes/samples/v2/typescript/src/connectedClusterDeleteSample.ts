/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ConnectedKubernetesClient } from "@azure/arm-hybridkubernetes";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Delete a connected cluster, removing the tracked resource in Azure Resource Manager (ARM).
 *
 * @summary Delete a connected cluster, removing the tracked resource in Azure Resource Manager (ARM).
 * x-ms-original-file: specification/hybridkubernetes/resource-manager/Microsoft.Kubernetes/stable/2021-10-01/examples/DeleteClusterExample.json
 */
async function deleteClusterExample() {
  const subscriptionId = "1bfbb5d0-917e-4346-9026-1d3b344417f5";
  const resourceGroupName = "k8sc-rg";
  const clusterName = "testCluster";
  const credential = new DefaultAzureCredential();
  const client = new ConnectedKubernetesClient(credential, subscriptionId);
  const result = await client.connectedClusterOperations.beginDeleteAndWait(
    resourceGroupName,
    clusterName
  );
  console.log(result);
}

deleteClusterExample().catch(console.error);
