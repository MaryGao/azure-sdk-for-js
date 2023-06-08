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
 * This sample demonstrates how to Create a new baseboard management controller key set or update the existing one for the provided cluster.
 *
 * @summary Create a new baseboard management controller key set or update the existing one for the provided cluster.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2022-12-12-preview/examples/BmcKeySets_Create.json
 */
async function createOrUpdateBaseboardManagementControllerKeySetOfCluster() {
  const subscriptionId = process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName = process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const clusterName = "clusterName";
  const bmcKeySetName = "bmcKeySetName";
  const bmcKeySetParameters = {
    azureGroupId: "f110271b-XXXX-4163-9b99-214d91660f0e",
    expiration: new Date("2022-12-31T23:59:59.008Z"),
    extendedLocation: {
      name: "/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName",
      type: "CustomLocation",
    },
    location: "location",
    privilegeLevel: "Administrator",
    tags: { key1: "myvalue1", key2: "myvalue2" },
    userList: [
      {
        description: "Needs access for troubleshooting as a part of the support team",
        azureUserName: "userABC",
        sshPublicKey: {
          keyData:
            "ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm",
        },
      },
      {
        description: "Needs access for troubleshooting as a part of the support team",
        azureUserName: "userXYZ",
        sshPublicKey: {
          keyData:
            "ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm",
        },
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.bmcKeySets.beginCreateOrUpdateAndWait(
    resourceGroupName,
    clusterName,
    bmcKeySetName,
    bmcKeySetParameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateBaseboardManagementControllerKeySetOfCluster();
}

main().catch(console.error);
