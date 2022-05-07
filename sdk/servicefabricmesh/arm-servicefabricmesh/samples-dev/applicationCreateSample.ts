/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ApplicationResourceDescription,
  ServiceFabricMeshManagementClient
} from "@azure/arm-servicefabricmesh";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates an application resource with the specified name, description and properties. If an application resource with the same name exists, then it is updated with the specified description and properties.
 *
 * @summary Creates an application resource with the specified name, description and properties. If an application resource with the same name exists, then it is updated with the specified description and properties.
 * x-ms-original-file: specification/servicefabricmesh/resource-manager/Microsoft.ServiceFabricMesh/preview/2018-09-01-preview/examples/applications/create_update.json
 */
async function createOrUpdateApplication() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "sbz_demo";
  const applicationResourceName = "sampleApplication";
  const applicationResourceDescription: ApplicationResourceDescription = {
    description: "Service Fabric Mesh sample application.",
    location: "EastUS",
    services: [
      {
        name: "helloWorldService",
        description: "SeaBreeze Hello World Service.",
        codePackages: [
          {
            name: "helloWorldCode",
            endpoints: [{ name: "helloWorldListener", port: 80 }],
            image: "seabreeze/sbz-helloworld:1.0-alpine",
            resources: { requests: { cpu: 1, memoryInGB: 1 } }
          }
        ],
        networkRefs: [
          {
            name:
              "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/sbz_demo/providers/Microsoft.ServiceFabricMesh/networks/sampleNetwork",
            endpointRefs: [{ name: "helloWorldListener" }]
          }
        ],
        osType: "Linux",
        replicaCount: 1
      }
    ],
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new ServiceFabricMeshManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.application.create(
    resourceGroupName,
    applicationResourceName,
    applicationResourceDescription
  );
  console.log(result);
}

createOrUpdateApplication().catch(console.error);
