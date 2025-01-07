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
  CheckNameAvailabilityRequest,
  ContainerAppsAPIClient,
} from "@azure/arm-appcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Checks if resource connectedEnvironmentName is available.
 *
 * @summary Checks if resource connectedEnvironmentName is available.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2024-08-02-preview/examples/ConnectedEnvironmentsCertificates_CheckNameAvailability.json
 */
async function certificatesCheckNameAvailability() {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["APPCONTAINERS_RESOURCE_GROUP"] || "examplerg";
  const connectedEnvironmentName = "testcontainerenv";
  const checkNameAvailabilityRequest: CheckNameAvailabilityRequest = {
    name: "testcertificatename",
    type: "Microsoft.App/connectedEnvironments/certificates",
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.connectedEnvironments.checkNameAvailability(
    resourceGroupName,
    connectedEnvironmentName,
    checkNameAvailabilityRequest,
  );
  console.log(result);
}

async function main() {
  certificatesCheckNameAvailability();
}

main().catch(console.error);
