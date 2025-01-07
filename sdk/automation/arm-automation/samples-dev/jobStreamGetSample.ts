/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AutomationClient } from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Retrieve the job stream identified by job stream id.
 *
 * @summary Retrieve the job stream identified by job stream id.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/stable/2019-06-01/examples/job/getJobStream.json
 */
async function getJobStream() {
  const subscriptionId =
    process.env["AUTOMATION_SUBSCRIPTION_ID"] ||
    "51766542-3ed7-4a72-a187-0c8ab644ddab";
  const resourceGroupName =
    process.env["AUTOMATION_RESOURCE_GROUP"] || "mygroup";
  const automationAccountName = "ContoseAutomationAccount";
  const jobName = "foo";
  const jobStreamId =
    "851b2101-686f-40e2-8a4b-5b8df08afbd1_00636535684910693884_00000000000000000001";
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.jobStreamOperations.get(
    resourceGroupName,
    automationAccountName,
    jobName,
    jobStreamId
  );
  console.log(result);
}

async function main() {
  getJobStream();
}

main().catch(console.error);
