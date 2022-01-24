/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Creates a volume resource with the specified name, description and properties. If a volume resource with the same name exists, then it is updated with the specified description and properties.
 *
 * @summary Creates a volume resource with the specified name, description and properties. If a volume resource with the same name exists, then it is updated with the specified description and properties.
 * x-ms-original-file: specification/servicefabricmesh/resource-manager/Microsoft.ServiceFabricMesh/preview/2018-09-01-preview/examples/volumes/create_update.json
 */
import {
  VolumeResourceDescription,
  ServiceFabricMeshManagementClient
} from "@azure/arm-servicefabricmesh";
import { DefaultAzureCredential } from "@azure/identity";

async function createOrUpdateVolume() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "sbz_demo";
  const volumeResourceName = "sampleVolume";
  const volumeResourceDescription: VolumeResourceDescription = {
    description: "Service Fabric Mesh sample volume.",
    azureFileParameters: {
      accountKey: "provide-account-key-here",
      accountName: "sbzdemoaccount",
      shareName: "sharel"
    },
    location: "EastUS",
    provider: "SFAzureFile",
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new ServiceFabricMeshManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.volume.create(
    resourceGroupName,
    volumeResourceName,
    volumeResourceDescription
  );
  console.log(result);
}

createOrUpdateVolume().catch(console.error);
