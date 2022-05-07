/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { StreamAnalyticsManagementClient } from "@azure/arm-streamanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists all of the outputs under the specified streaming job.
 *
 * @summary Lists all of the outputs under the specified streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/stable/2020-03-01/examples/Output_ListByStreamingJob.json
 */
async function listAllOutputsInAStreamingJob() {
  const subscriptionId = "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = "sjrg2157";
  const jobName = "sj6458";
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.outputs.listByStreamingJob(
    resourceGroupName,
    jobName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAllOutputsInAStreamingJob().catch(console.error);
