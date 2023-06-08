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
require("dotenv").config();

/**
 * This sample demonstrates how to Gets a list of compute operations.
 *
 * @summary Gets a list of compute operations.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-03-01/examples/computeRPCommonExamples/Operations_List_MaximumSet_Gen.json
 */
async function operationsListMaximumSetGen() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.operations.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Gets a list of compute operations.
 *
 * @summary Gets a list of compute operations.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-03-01/examples/computeRPCommonExamples/Operations_List_MinimumSet_Gen.json
 */
async function operationsListMinimumSetGen() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.operations.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  operationsListMaximumSetGen();
  operationsListMinimumSetGen();
}

main().catch(console.error);
