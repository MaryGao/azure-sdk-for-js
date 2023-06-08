/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkCloud } = require("@azure/arm-networkcloud");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create a new storage appliance or update the properties of the existing one.
All customer initiated requests will be rejected as the life cycle of this resource is managed by the system.
 *
 * @summary Create a new storage appliance or update the properties of the existing one.
All customer initiated requests will be rejected as the life cycle of this resource is managed by the system.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2022-12-12-preview/examples/StorageAppliances_Create.json
 */
async function createOrUpdateStorageAppliance() {
  const subscriptionId = process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName = process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const storageApplianceName = "storageApplianceName";
  const storageApplianceParameters = {
    administratorCredentials: { password: "{password}", username: "adminUser" },
    extendedLocation: {
      name: "/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName",
      type: "CustomLocation",
    },
    location: "location",
    rackId:
      "/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/racks/rackName",
    rackSlot: 1,
    serialNumber: "BM1219XXX",
    storageApplianceSkuId: "684E-3B16-399E",
    tags: { key1: "myvalue1", key2: "myvalue2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.storageAppliances.beginCreateOrUpdateAndWait(
    resourceGroupName,
    storageApplianceName,
    storageApplianceParameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateStorageAppliance();
}

main().catch(console.error);
