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
 * This sample demonstrates how to Details of a specific setting
 *
 * @summary Details of a specific setting
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2017-08-01-preview/examples/AutoProvisioningSettings/GetAutoProvisioningSettingSubscription_example.json
 */
async function getAnAutoProvisioningSettingForSubscription() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] || "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const settingName = "default";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.autoProvisioningSettings.get(settingName);
  console.log(result);
}

async function main() {
  getAnAutoProvisioningSettingForSubscription();
}

main().catch(console.error);
