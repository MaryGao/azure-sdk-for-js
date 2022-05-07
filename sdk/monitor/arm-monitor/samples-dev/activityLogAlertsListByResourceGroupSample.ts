/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get a list of all activity log alerts in a resource group.
 *
 * @summary Get a list of all activity log alerts in a resource group.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2017-04-01/examples/listActivityLogAlerts.json
 */
async function listActivityLogAlerts() {
  const subscriptionId = "187f412d-1758-44d9-b052-169e2564721d";
  const resourceGroupName = "Default-ActivityLogAlerts";
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.activityLogAlerts.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listActivityLogAlerts().catch(console.error);
