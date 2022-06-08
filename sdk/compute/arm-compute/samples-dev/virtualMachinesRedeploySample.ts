/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Shuts down the virtual machine, moves it to a new node, and powers it back on.
 *
 * @summary Shuts down the virtual machine, moves it to a new node, and powers it back on.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2022-03-01/ComputeRP/examples/virtualMachineExamples/VirtualMachines_Redeploy_MaximumSet_Gen.json
 */
async function virtualMachinesRedeployMaximumSetGen() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "rgcompute";
  const vmName = "a";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachines.beginRedeployAndWait(
    resourceGroupName,
    vmName
  );
  console.log(result);
}

virtualMachinesRedeployMaximumSetGen().catch(console.error);

/**
 * This sample demonstrates how to Shuts down the virtual machine, moves it to a new node, and powers it back on.
 *
 * @summary Shuts down the virtual machine, moves it to a new node, and powers it back on.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2022-03-01/ComputeRP/examples/virtualMachineExamples/VirtualMachines_Redeploy_MinimumSet_Gen.json
 */
async function virtualMachinesRedeployMinimumSetGen() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "rgcompute";
  const vmName = "aaaaaaaaaaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachines.beginRedeployAndWait(
    resourceGroupName,
    vmName
  );
  console.log(result);
}

virtualMachinesRedeployMinimumSetGen().catch(console.error);
