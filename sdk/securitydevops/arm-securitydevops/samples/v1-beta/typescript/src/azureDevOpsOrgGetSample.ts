/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MicrosoftSecurityDevOps } from "@azure/arm-securitydevops";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Returns a monitored AzureDevOps Org resource for a given ID.
 *
 * @summary Returns a monitored AzureDevOps Org resource for a given ID.
 * x-ms-original-file: specification/securitydevops/resource-manager/Microsoft.SecurityDevOps/preview/2022-09-01-preview/examples/AzureDevOpsOrgGet.json
 */
async function azureDevOpsOrgGet() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "westusrg";
  const azureDevOpsConnectorName = "testconnector";
  const azureDevOpsOrgName = "myOrg";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSecurityDevOps(credential, subscriptionId);
  const result = await client.azureDevOpsOrgOperations.get(
    resourceGroupName,
    azureDevOpsConnectorName,
    azureDevOpsOrgName
  );
  console.log(result);
}

azureDevOpsOrgGet().catch(console.error);
