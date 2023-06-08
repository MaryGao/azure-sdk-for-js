/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MobileNetworkManagementClient } = require("@azure/arm-mobilenetwork");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Updates slice tags.
 *
 * @summary Updates slice tags.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/stable/2022-11-01/examples/SliceUpdateTags.json
 */
async function updateNetworkSliceTags() {
  const subscriptionId = process.env["MOBILENETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["MOBILENETWORK_RESOURCE_GROUP"] || "rg1";
  const mobileNetworkName = "testMobileNetwork";
  const sliceName = "testSlice";
  const parameters = { tags: { tag1: "value1", tag2: "value2" } };
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.slices.updateTags(
    resourceGroupName,
    mobileNetworkName,
    sliceName,
    parameters
  );
  console.log(result);
}

async function main() {
  updateNetworkSliceTags();
}

main().catch(console.error);
