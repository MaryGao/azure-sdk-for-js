/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ServiceMap } = require("@azure/arm-servicemap");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Returns a collection of machine groups this machine belongs to during the specified time interval.
 *
 * @summary Returns a collection of machine groups this machine belongs to during the specified time interval.
 * x-ms-original-file: specification/service-map/resource-manager/Microsoft.OperationalInsights/preview/2015-11-01-preview/examples/Machines/MachineGroups/SMMachinesListMachineGroupMembershipGet.json
 */
async function smMachinesListMachineGroupMembershipGet() {
  const subscriptionId =
    process.env["SERVICE-MAP_SUBSCRIPTION_ID"] || "63BE4E24-FDF0-4E9C-9342-6A5D5A359722";
  const resourceGroupName = process.env["SERVICE-MAP_RESOURCE_GROUP"] || "rg-sm";
  const workspaceName = "D6F79F14-E563-469B-84B5-9286D2803B2F";
  const machineName = "m-A4AB1C69-03E9-42D2-B822-B42555569FB4";
  const startTime = new Date("2018-01-08T19:17:49.333139Z");
  const endTime = new Date("2018-01-08T19:19:49.333139Z");
  const options = {
    startTime,
    endTime,
  };
  const credential = new DefaultAzureCredential();
  const client = new ServiceMap(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.machines.listMachineGroupMembership(
    resourceGroupName,
    workspaceName,
    machineName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  smMachinesListMachineGroupMembershipGet();
}

main().catch(console.error);
