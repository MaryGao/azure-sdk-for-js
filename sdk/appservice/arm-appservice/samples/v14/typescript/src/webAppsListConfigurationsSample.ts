/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { WebSiteManagementClient } from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Description for List the configurations of an app
 *
 * @summary Description for List the configurations of an app
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-09-01/examples/ListWebAppConfigurations.json
 */
async function listWebAppConfigurations() {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["APPSERVICE_RESOURCE_GROUP"] || "testrg123";
  const name = "sitef6141";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.webApps.listConfigurations(
    resourceGroupName,
    name
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listWebAppConfigurations();
}

main().catch(console.error);
