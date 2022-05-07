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
  ManagerExtendedInfo,
  StorSimpleManagementClient
} from "@azure/arm-storsimple1200series";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates the extended info of the manager.
 *
 * @summary Updates the extended info of the manager.
 * x-ms-original-file: specification/storSimple1200Series/resource-manager/Microsoft.StorSimple/stable/2016-10-01/examples/ManagersUpdateExtendedInfo.json
 */
async function managersUpdateExtendedInfo() {
  const subscriptionId = "9eb689cd-7243-43b4-b6f6-5c65cb296641";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "hManagerForSDKTest";
  const ifMatch = "6531d5d7-3ced-4f78-83b6-804368f2ca0c";
  const managerExtendedInfo: ManagerExtendedInfo = {
    name: "vaultExtendedInfo",
    type: "Microsoft.StorSimple/Managers/extendedInformation",
    algorithm: "SHA256",
    etag: "6531d5d7-3ced-4f78-83b6-804368f2ca0c",
    id:
      "/subscriptions/9eb689cd-7243-43b4-b6f6-5c65cb296641/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.StorSimple/Managers/hManagerForSDKTestextendedInformation/vaultExtendedInfo",
    integrityKey: "e6501980-7efe-4602-bb0e-3cb9a08a6003"
  };
  const credential = new DefaultAzureCredential();
  const client = new StorSimpleManagementClient(credential, subscriptionId);
  const result = await client.managers.updateExtendedInfo(
    resourceGroupName,
    managerName,
    ifMatch,
    managerExtendedInfo
  );
  console.log(result);
}

managersUpdateExtendedInfo().catch(console.error);
