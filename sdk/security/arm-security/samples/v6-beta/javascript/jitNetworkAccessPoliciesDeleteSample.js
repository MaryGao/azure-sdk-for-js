/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityCenter } = require("@azure/arm-security");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Delete a Just-in-Time access control policy.
 *
 * @summary Delete a Just-in-Time access control policy.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2020-01-01/examples/JitNetworkAccessPolicies/DeleteJitNetworkAccessPolicy_example.json
 */
async function deleteAJitNetworkAccessPolicy() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] || "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const resourceGroupName = process.env["SECURITY_RESOURCE_GROUP"] || "myRg1";
  const ascLocation = "westeurope";
  const jitNetworkAccessPolicyName = "default";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.jitNetworkAccessPolicies.delete(
    resourceGroupName,
    ascLocation,
    jitNetworkAccessPolicyName
  );
  console.log(result);
}

async function main() {
  deleteAJitNetworkAccessPolicy();
}

main().catch(console.error);
