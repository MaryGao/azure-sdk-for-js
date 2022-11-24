/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Patches a fleet resource.
 *
 * @summary Patches a fleet resource.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-09-02-preview/examples/Fleets_PatchTags.json
 */
async function patchesAFleetResource() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const fleetName = "fleet-1";
  const ifMatch = "dfjkwelr7384";
  const parameters = { tags: { env: "prod", tier: "secure" } };
  const options = { ifMatch, parameters };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.fleets.update(resourceGroupName, fleetName, options);
  console.log(result);
}

patchesAFleetResource().catch(console.error);
