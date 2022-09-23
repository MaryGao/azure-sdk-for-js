/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.
 *
 * @summary Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/virtualMachineImageExamples/VirtualMachineImages_ListSkus_MaximumSet_Gen.json
 */
async function virtualMachineImagesListSkusMaximumSetGen() {
  const subscriptionId = "{subscription-id}";
  const location = "aaaa";
  const publisherName = "aaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const offer = "aaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineImages.listSkus(location, publisherName, offer);
  console.log(result);
}

virtualMachineImagesListSkusMaximumSetGen().catch(console.error);

/**
 * This sample demonstrates how to Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.
 *
 * @summary Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/virtualMachineImageExamples/VirtualMachineImages_ListSkus_MinimumSet_Gen.json
 */
async function virtualMachineImagesListSkusMinimumSetGen() {
  const subscriptionId = "{subscription-id}";
  const location = "aaaa";
  const publisherName = "aaaaaaaaaaaaa";
  const offer = "aaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineImages.listSkus(location, publisherName, offer);
  console.log(result);
}

virtualMachineImagesListSkusMinimumSetGen().catch(console.error);
