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
  SqlContainerCreateUpdateParameters,
  CosmosDBManagementClient
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB SQL container
 *
 * @summary Create or update an Azure Cosmos DB SQL container
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2023-03-01-preview/examples/CosmosDBSqlContainerCreateUpdate.json
 */
async function cosmosDbSqlContainerCreateUpdate() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const createUpdateSqlContainerParameters: SqlContainerCreateUpdateParameters = {
    location: "West US",
    options: {},
    resource: {
      clientEncryptionPolicy: {
        includedPaths: [
          {
            path: "/path",
            clientEncryptionKeyId: "keyId",
            encryptionAlgorithm: "AEAD_AES_256_CBC_HMAC_SHA256",
            encryptionType: "Deterministic"
          }
        ],
        policyFormatVersion: 2
      },
      conflictResolutionPolicy: {
        conflictResolutionPath: "/path",
        mode: "LastWriterWins"
      },
      defaultTtl: 100,
      id: "containerName",
      indexingPolicy: {
        automatic: true,
        excludedPaths: [],
        includedPaths: [
          {
            path: "/*",
            indexes: [
              { dataType: "String", kind: "Range", precision: -1 },
              { dataType: "Number", kind: "Range", precision: -1 }
            ]
          }
        ],
        indexingMode: "consistent"
      },
      partitionKey: { kind: "Hash", paths: ["/AccountNumber"] },
      uniqueKeyPolicy: { uniqueKeys: [{ paths: ["/testPath"] }] }
    },
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginCreateUpdateSqlContainerAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    containerName,
    createUpdateSqlContainerParameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB SQL container
 *
 * @summary Create or update an Azure Cosmos DB SQL container
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2023-03-01-preview/examples/CosmosDBSqlContainerRestore.json
 */
async function cosmosDbSqlContainerRestore() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const createUpdateSqlContainerParameters: SqlContainerCreateUpdateParameters = {
    location: "West US",
    options: {},
    resource: {
      createMode: "Restore",
      id: "containerName",
      restoreParameters: {
        restoreSource:
          "/subscriptions/subid/providers/Microsoft.DocumentDB/locations/WestUS/restorableDatabaseAccounts/restorableDatabaseAccountId",
        restoreTimestampInUtc: new Date("2022-07-20T18:28:00Z")
      }
    },
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginCreateUpdateSqlContainerAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    containerName,
    createUpdateSqlContainerParameters
  );
  console.log(result);
}

async function main() {
  cosmosDbSqlContainerCreateUpdate();
  cosmosDbSqlContainerRestore();
}

main().catch(console.error);
