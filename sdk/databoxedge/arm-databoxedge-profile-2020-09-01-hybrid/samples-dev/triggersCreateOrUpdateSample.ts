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
  FileEventTrigger,
  DataBoxEdgeManagementClient
} from "@azure/arm-databoxedge-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a trigger.
 *
 * @summary Creates or updates a trigger.
 * x-ms-original-file: specification/databoxedge/resource-manager/Microsoft.DataBoxEdge/stable/2019-08-01/examples/TriggerPut.json
 */
async function triggerPut() {
  const subscriptionId =
    process.env["DATABOXEDGE_SUBSCRIPTION_ID"] ||
    "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const deviceName = "testedgedevice";
  const name = "trigger1";
  const resourceGroupName =
    process.env["DATABOXEDGE_RESOURCE_GROUP"] || "GroupForEdgeAutomation";
  const trigger: FileEventTrigger = {
    customContextTag: "CustomContextTags-1235346475",
    kind: "FileEvent",
    sinkInfo: {
      roleId:
        "/subscriptions/4385cf00-2d3a-425a-832f-f4285b1c9dce/resourceGroups/GroupForEdgeAutomation/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/testedgedevice/roles/role1"
    },
    sourceInfo: {
      shareId:
        "/subscriptions/4385cf00-2d3a-425a-832f-f4285b1c9dce/resourceGroups/GroupForEdgeAutomation/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/testedgedevice/shares/share1"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new DataBoxEdgeManagementClient(credential, subscriptionId);
  const result = await client.triggers.beginCreateOrUpdateAndWait(
    deviceName,
    name,
    resourceGroupName,
    trigger
  );
  console.log(result);
}

async function main() {
  triggerPut();
}

main().catch(console.error);
