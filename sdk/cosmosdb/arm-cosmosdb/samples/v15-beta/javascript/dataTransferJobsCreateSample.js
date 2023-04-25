/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates a Data Transfer Job.
 *
 * @summary Creates a Data Transfer Job.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2023-03-01-preview/examples/data-transfer-service/CosmosDBDataTransferJobCreate.json
 */
async function cosmosDbDataTransferJobCreate() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const jobName = "j1";
  const jobCreateParameters = {
    properties: {
      destination: {
        component: "AzureBlobStorage",
        containerName: "blob_container",
        endpointUrl: "https://blob.windows.net",
      },
      source: {
        component: "CosmosDBCassandra",
        keyspaceName: "keyspace",
        tableName: "table",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.dataTransferJobs.create(
    resourceGroupName,
    accountName,
    jobName,
    jobCreateParameters
  );
  console.log(result);
}

async function main() {
  cosmosDbDataTransferJobCreate();
}

main().catch(console.error);
