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
 * This sample demonstrates how to Retrieve counts for Dsc Nodes.
 *
 * @summary Retrieve counts for Dsc Nodes.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/preview/2020-01-13-preview/examples/listPagedDscNodeConfigurationCounts.json
 */
async function getNodeConfigurationCounts() {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "myAutomationAccount33";
  const countType = "nodeconfiguration";
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.nodeCountInformation.get(
    resourceGroupName,
    automationAccountName,
    countType
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Retrieve counts for Dsc Nodes.
 *
 * @summary Retrieve counts for Dsc Nodes.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/preview/2020-01-13-preview/examples/listPagedDscNodeStatusCounts.json
 */
async function getNodeStatusCounts() {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "myAutomationAccount33";
  const countType = "status";
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.nodeCountInformation.get(
    resourceGroupName,
    automationAccountName,
    countType
  );
  console.log(result);
}

async function main() {
  getNodeConfigurationCounts();
  getNodeStatusCounts();
}

main().catch(console.error);
