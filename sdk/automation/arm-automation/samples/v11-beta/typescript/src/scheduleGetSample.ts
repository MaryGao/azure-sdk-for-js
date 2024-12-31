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
 * This sample demonstrates how to Retrieve the schedule identified by schedule name.
 *
 * @summary Retrieve the schedule identified by schedule name.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/preview/2020-01-13-preview/examples/getSchedule.json
 */
async function getASchedule() {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "myAutomationAccount33";
  const scheduleName = "mySchedule";
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.scheduleOperations.get(
    resourceGroupName,
    automationAccountName,
    scheduleName
  );
  console.log(result);
}

async function main() {
  getASchedule();
}

main().catch(console.error);
