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
  ContainerAppsListCustomHostNameAnalysisOptionalParams,
  ContainerAppsAPIClient
} from "@azure/arm-appcontainers";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Analyzes a custom hostname for a Container App
 *
 * @summary Analyzes a custom hostname for a Container App
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/stable/2022-03-01/examples/ContainerApps_ListCustomHostNameAnalysis.json
 */
async function analyzeCustomHostname() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const containerAppName = "testcontainerApp0";
  const customHostname = "my.name.corp";
  const options: ContainerAppsListCustomHostNameAnalysisOptionalParams = {
    customHostname
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.containerApps.listCustomHostNameAnalysis(
    resourceGroupName,
    containerAppName,
    options
  );
  console.log(result);
}

analyzeCustomHostname().catch(console.error);
