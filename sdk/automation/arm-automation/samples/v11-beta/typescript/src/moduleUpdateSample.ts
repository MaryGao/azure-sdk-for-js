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
  ModuleUpdateParameters,
  AutomationClient
} from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update the module identified by module name.
 *
 * @summary Update the module identified by module name.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/preview/2020-01-13-preview/examples/updateModule.json
 */
async function updateAModule() {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "MyAutomationAccount";
  const moduleName = "MyModule";
  const parameters: ModuleUpdateParameters = {
    contentLink: {
      contentHash: {
        algorithm: "sha265",
        value:
          "07E108A962B81DD9C9BAA89BB47C0F6EE52B29E83758B07795E408D258B2B87A"
      },
      uri: "https://teststorage.blob.core.windows.net/mycontainer/MyModule.zip",
      version: "1.0.0.0"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.moduleOperations.update(
    resourceGroupName,
    automationAccountName,
    moduleName,
    parameters
  );
  console.log(result);
}

async function main() {
  updateAModule();
}

main().catch(console.error);
