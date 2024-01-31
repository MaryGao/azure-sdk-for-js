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
  BindingResource,
  AppPlatformManagementClient
} from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a new Binding or update an exiting Binding.
 *
 * @summary Create a new Binding or update an exiting Binding.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/stable/2023-12-01/examples/Bindings_CreateOrUpdate.json
 */
async function bindingsCreateOrUpdate() {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "myservice";
  const appName = "myapp";
  const bindingName = "mybinding";
  const bindingResource: BindingResource = {
    properties: {
      bindingParameters: { apiType: "SQL", databaseName: "db1" },
      createdAt: undefined,
      generatedProperties: undefined,
      key: "xxxx",
      resourceId:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.DocumentDB/databaseAccounts/my-cosmosdb-1",
      updatedAt: undefined
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.bindings.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    appName,
    bindingName,
    bindingResource
  );
  console.log(result);
}

async function main() {
  bindingsCreateOrUpdate();
}

main().catch(console.error);
