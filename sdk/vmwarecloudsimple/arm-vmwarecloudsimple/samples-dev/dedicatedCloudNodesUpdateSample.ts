/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PatchPayload, VMwareCloudSimple } from "@azure/arm-vmwarecloudsimple";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Patches dedicated node properties
 *
 * @summary Patches dedicated node properties
 * x-ms-original-file: specification/vmwarecloudsimple/resource-manager/Microsoft.VMwareCloudSimple/stable/2019-04-01/examples/PatchDedicatedCloudNode.json
 */
async function patchDedicatedCloudNode() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const dedicatedCloudNodeName = "myNode";
  const dedicatedCloudNodeRequest: PatchPayload = {
    tags: { myTag: "tagValue" }
  };
  const credential = new DefaultAzureCredential();
  const client = new VMwareCloudSimple(credential, subscriptionId);
  const result = await client.dedicatedCloudNodes.update(
    resourceGroupName,
    dedicatedCloudNodeName,
    dedicatedCloudNodeRequest
  );
  console.log(result);
}

patchDedicatedCloudNode().catch(console.error);
