/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ChaosManagementClient } = require("@azure/arm-chaos");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create or update a Target resource that extends a tracked regional resource.
 *
 * @summary Create or update a Target resource that extends a tracked regional resource.
 * x-ms-original-file: specification/chaos/resource-manager/Microsoft.Chaos/preview/2022-10-01-preview/examples/CreateOrUpdateATarget.json
 */
async function createOrUpdateATargetThatExtendsAVirtualMachineResource() {
  const subscriptionId =
    process.env["CHAOS_SUBSCRIPTION_ID"] || "6b052e15-03d3-4f17-b2e1-be7f07588291";
  const resourceGroupName = process.env["CHAOS_RESOURCE_GROUP"] || "exampleRG";
  const parentProviderNamespace = "Microsoft.Compute";
  const parentResourceType = "virtualMachines";
  const parentResourceName = "exampleVM";
  const targetName = "Microsoft-Agent";
  const target = {
    properties: {
      identities: [{ type: "CertificateSubjectIssuer", subject: "CN=example.subject" }],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ChaosManagementClient(credential, subscriptionId);
  const result = await client.targets.createOrUpdate(
    resourceGroupName,
    parentProviderNamespace,
    parentResourceType,
    parentResourceName,
    targetName,
    target
  );
  console.log(result);
}

async function main() {
  createOrUpdateATargetThatExtendsAVirtualMachineResource();
}

main().catch(console.error);
