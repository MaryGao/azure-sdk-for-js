/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AppPlatformManagementClient } from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Delete the certificate resource.
 *
 * @summary Delete the certificate resource.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/stable/2023-12-01/examples/Certificates_Delete.json
 */
async function certificatesDelete() {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "myservice";
  const certificateName = "mycertificate";
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.certificates.beginDeleteAndWait(
    resourceGroupName,
    serviceName,
    certificateName
  );
  console.log(result);
}

async function main() {
  certificatesDelete();
}

main().catch(console.error);
