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
  SoftwareUpdateConfigurationsListOptionalParams,
  AutomationClient
} from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get all software update configurations for the account.
 *
 * @summary Get all software update configurations for the account.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/stable/2019-06-01/examples/softwareUpdateConfiguration/listSoftwareUpdateConfigurations.json
 */
async function listSoftwareUpdateConfigurations() {
  const subscriptionId =
    process.env["AUTOMATION_SUBSCRIPTION_ID"] ||
    "1a7d4044-286c-4acb-969a-96639265bf2e";
  const resourceGroupName =
    process.env["AUTOMATION_RESOURCE_GROUP"] || "mygroup";
  const automationAccountName = "myaccount";
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.softwareUpdateConfigurations.list(
    resourceGroupName,
    automationAccountName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Get all software update configurations for the account.
 *
 * @summary Get all software update configurations for the account.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/stable/2019-06-01/examples/softwareUpdateConfiguration/listSoftwareUpdateConfigurationsByVm.json
 */
async function listSoftwareUpdateConfigurationsTargetingASpecificAzureVirtualMachine() {
  const subscriptionId =
    process.env["AUTOMATION_SUBSCRIPTION_ID"] ||
    "1a7d4044-286c-4acb-969a-96639265bf2e";
  const resourceGroupName =
    process.env["AUTOMATION_RESOURCE_GROUP"] || "mygroup";
  const automationAccountName = "myaccount";
  const filter =
    "properties/updateConfiguration/azureVirtualMachines/any(m: m eq '/subscriptions/1a7d4044-286c-4acb-969a-96639265bf2e/resourceGroups/myresources/providers/Microsoft.Compute/virtualMachines/vm-01')";
  const options: SoftwareUpdateConfigurationsListOptionalParams = { filter };
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.softwareUpdateConfigurations.list(
    resourceGroupName,
    automationAccountName,
    options
  );
  console.log(result);
}

async function main() {
  listSoftwareUpdateConfigurations();
  listSoftwareUpdateConfigurationsTargetingASpecificAzureVirtualMachine();
}

main().catch(console.error);
