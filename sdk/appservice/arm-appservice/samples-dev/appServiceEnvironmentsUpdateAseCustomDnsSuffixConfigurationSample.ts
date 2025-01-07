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
  CustomDnsSuffixConfiguration,
  WebSiteManagementClient,
} from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update Custom Dns Suffix configuration of an App Service Environment
 *
 * @summary Update Custom Dns Suffix configuration of an App Service Environment
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2023-12-01/examples/UpdateAseCustomDnsSuffixConfiguration.json
 */
async function updateAseCustomDnsSuffixConfiguration() {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["APPSERVICE_RESOURCE_GROUP"] || "test-rg";
  const name = "test-ase";
  const customDnsSuffixConfiguration: CustomDnsSuffixConfiguration = {
    certificateUrl: "https://test-kv.vault.azure.net/secrets/contosocert",
    dnsSuffix: "contoso.com",
    keyVaultReferenceIdentity:
      "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourcegroups/test-rg/providers/microsoft.managedidentity/userassignedidentities/test-user-mi",
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result =
    await client.appServiceEnvironments.updateAseCustomDnsSuffixConfiguration(
      resourceGroupName,
      name,
      customDnsSuffixConfiguration,
    );
  console.log(result);
}

async function main() {
  updateAseCustomDnsSuffixConfiguration();
}

main().catch(console.error);
