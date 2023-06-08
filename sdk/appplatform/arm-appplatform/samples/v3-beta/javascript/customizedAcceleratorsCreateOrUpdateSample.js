/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AppPlatformManagementClient } = require("@azure/arm-appplatform");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create or update the customized accelerator.
 *
 * @summary Create or update the customized accelerator.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2023-03-01-preview/examples/CustomizedAccelerators_CreateOrUpdate.json
 */
async function customizedAcceleratorsCreateOrUpdate() {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "myservice";
  const applicationAcceleratorName = "default";
  const customizedAcceleratorName = "acc-name";
  const customizedAcceleratorResource = {
    properties: {
      description: "acc-desc",
      acceleratorTags: ["tag-a", "tag-b"],
      displayName: "acc-name",
      gitRepository: {
        authSetting: {
          authType: "SSH",
          hostKey: "git-auth-hostkey",
          hostKeyAlgorithm: "git-auth-algorithm",
          privateKey: "git-auth-privatekey",
        },
        branch: "git-branch",
        commit: "12345",
        gitTag: "git-tag",
        intervalInSeconds: 70,
        url: "git-url",
      },
      iconUrl: "acc-icon",
    },
    sku: { name: "E0", capacity: 2, tier: "Enterprise" },
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.customizedAccelerators.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    applicationAcceleratorName,
    customizedAcceleratorName,
    customizedAcceleratorResource
  );
  console.log(result);
}

async function main() {
  customizedAcceleratorsCreateOrUpdate();
}

main().catch(console.error);
