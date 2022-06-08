/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deactivates a revision for a Container App
 *
 * @summary Deactivates a revision for a Container App
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/stable/2022-03-01/examples/Revisions_Deactivate.json
 */
async function deactivateContainerAppRevision() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const containerAppName = "testcontainerApp0";
  const revisionName = "testcontainerApp0-pjxhsye";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.containerAppsRevisions.deactivateRevision(
    resourceGroupName,
    containerAppName,
    revisionName
  );
  console.log(result);
}

deactivateContainerAppRevision().catch(console.error);
