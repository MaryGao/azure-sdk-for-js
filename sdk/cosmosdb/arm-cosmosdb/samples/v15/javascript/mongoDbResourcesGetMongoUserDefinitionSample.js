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
 * This sample demonstrates how to Retrieves the properties of an existing Azure Cosmos DB Mongo User Definition with the given Id.
 *
 * @summary Retrieves the properties of an existing Azure Cosmos DB Mongo User Definition with the given Id.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2023-04-15/examples/CosmosDBMongoDBUserDefinitionGet.json
 */
async function cosmosDbMongoDbuserDefinitionGet() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "mySubscriptionId";
  const mongoUserDefinitionId = "myMongoUserDefinitionId";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "myResourceGroupName";
  const accountName = "myAccountName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.mongoDBResources.getMongoUserDefinition(
    mongoUserDefinitionId,
    resourceGroupName,
    accountName
  );
  console.log(result);
}

async function main() {
  cosmosDbMongoDbuserDefinitionGet();
}

main().catch(console.error);
