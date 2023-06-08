/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { RecoveryServicesBackupClient } = require("@azure/arm-recoveryservicesbackup");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets the operation status for a private endpoint connection.
 *
 * @summary Gets the operation status for a private endpoint connection.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2023-02-01/examples/PrivateEndpointConnection/GetPrivateEndpointConnectionOperationStatus.json
 */
async function getOperationStatus() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] || "04cf684a-d41f-4550-9f70-7708a3a2283b";
  const vaultName = "gaallavaultbvtd2msi";
  const resourceGroupName = process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "gaallaRG";
  const privateEndpointConnectionName = "gaallatestpe2.5704c932-249a-490b-a142-1396838cd3b";
  const operationId = "0f48183b-0a44-4dca-aec1-bba5daab888a";
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.privateEndpointOperations.getOperationStatus(
    vaultName,
    resourceGroupName,
    privateEndpointConnectionName,
    operationId
  );
  console.log(result);
}

async function main() {
  getOperationStatus();
}

main().catch(console.error);
