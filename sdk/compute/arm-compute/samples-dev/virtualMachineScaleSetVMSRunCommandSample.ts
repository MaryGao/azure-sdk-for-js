/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { RunCommandInput, ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Run command on a virtual machine in a VM scale set.
 *
 * @summary Run command on a virtual machine in a VM scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-08-01/examples/runCommandExamples/VirtualMachineScaleSetVMRunCommand.json
 */
async function virtualMachineScaleSetVMSRunCommand() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const vmScaleSetName = "myVirtualMachineScaleSet";
  const instanceId = "0";
  const parameters: RunCommandInput = {
    commandId: "RunPowerShellScript",
    script: ["Write-Host Hello World!"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSetVMs.beginRunCommandAndWait(
    resourceGroupName,
    vmScaleSetName,
    instanceId,
    parameters
  );
  console.log(result);
}

virtualMachineScaleSetVMSRunCommand().catch(console.error);
