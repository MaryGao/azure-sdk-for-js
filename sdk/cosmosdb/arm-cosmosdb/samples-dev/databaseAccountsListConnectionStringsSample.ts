/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists the connection strings for the specified Azure Cosmos DB database account.
 *
 * @summary Lists the connection strings for the specified Azure Cosmos DB database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2023-11-15/examples/CosmosDBDatabaseAccountListConnectionStrings.json
 */
async function cosmosDbDatabaseAccountListConnectionStrings() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.databaseAccounts.listConnectionStrings(
    resourceGroupName,
    accountName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Lists the connection strings for the specified Azure Cosmos DB database account.
 *
 * @summary Lists the connection strings for the specified Azure Cosmos DB database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2023-11-15/examples/CosmosDBDatabaseAccountListConnectionStringsMongo.json
 */
async function cosmosDbDatabaseAccountListConnectionStringsMongo() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "mongo-ddb1";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.databaseAccounts.listConnectionStrings(
    resourceGroupName,
    accountName
  );
  console.log(result);
}

async function main() {
  cosmosDbDatabaseAccountListConnectionStrings();
  cosmosDbDatabaseAccountListConnectionStringsMongo();
}

main().catch(console.error);
