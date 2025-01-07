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
 * This sample demonstrates how to Suspend the test job.
 *
 * @summary Suspend the test job.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/stable/2018-06-30/examples/suspendTestJob.json
 */
async function suspendTestJob() {
  const subscriptionId =
    process.env["AUTOMATION_SUBSCRIPTION_ID"] ||
    "51766542-3ed7-4a72-a187-0c8ab644ddab";
  const resourceGroupName =
    process.env["AUTOMATION_RESOURCE_GROUP"] || "mygroup";
  const automationAccountName = "ContoseAutomationAccount";
  const runbookName = "Get-AzureVMTutorial";
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.testJobOperations.suspend(
    resourceGroupName,
    automationAccountName,
    runbookName
  );
  console.log(result);
}

async function main() {
  suspendTestJob();
}

main().catch(console.error);
