/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DynatraceObservability } from "@azure/arm-dynatrace";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get a MonitorResource
 *
 * @summary Get a MonitorResource
 * x-ms-original-file: specification/dynatrace/resource-manager/Dynatrace.Observability/preview/2021-09-01-preview/examples/Monitors_Get_MaximumSet_Gen.json
 */
async function monitorsGetMaximumSetGen() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const monitorName = "myMonitor";
  const credential = new DefaultAzureCredential();
  const client = new DynatraceObservability(credential, subscriptionId);
  const result = await client.monitors.get(resourceGroupName, monitorName);
  console.log(result);
}

monitorsGetMaximumSetGen().catch(console.error);

/**
 * This sample demonstrates how to Get a MonitorResource
 *
 * @summary Get a MonitorResource
 * x-ms-original-file: specification/dynatrace/resource-manager/Dynatrace.Observability/preview/2021-09-01-preview/examples/Monitors_Get_MinimumSet_Gen.json
 */
async function monitorsGetMinimumSetGen() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const monitorName = "myMonitor";
  const credential = new DefaultAzureCredential();
  const client = new DynatraceObservability(credential, subscriptionId);
  const result = await client.monitors.get(resourceGroupName, monitorName);
  console.log(result);
}

monitorsGetMinimumSetGen().catch(console.error);
