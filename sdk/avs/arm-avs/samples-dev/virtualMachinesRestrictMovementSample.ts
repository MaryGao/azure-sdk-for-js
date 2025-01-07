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
  VirtualMachineRestrictMovement,
  AzureVMwareSolutionAPI,
} from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Enable or disable DRS-driven VM movement restriction
 *
 * @summary Enable or disable DRS-driven VM movement restriction
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2023-09-01/examples/VirtualMachines_RestrictMovement.json
 */
async function virtualMachinesRestrictMovement() {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["AVS_RESOURCE_GROUP"] || "group1";
  const privateCloudName = "cloud1";
  const clusterName = "cluster1";
  const virtualMachineId = "vm-209";
  const restrictMovement: VirtualMachineRestrictMovement = {
    restrictMovement: "Enabled",
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.virtualMachines.beginRestrictMovementAndWait(
    resourceGroupName,
    privateCloudName,
    clusterName,
    virtualMachineId,
    restrictMovement,
  );
  console.log(result);
}

async function main() {
  virtualMachinesRestrictMovement();
}

main().catch(console.error);
