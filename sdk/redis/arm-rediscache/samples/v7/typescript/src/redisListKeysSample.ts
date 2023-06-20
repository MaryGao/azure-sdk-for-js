/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { RedisManagementClient } from "@azure/arm-rediscache";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Retrieve a Redis cache's access keys. This operation requires write permission to the cache resource.
 *
 * @summary Retrieve a Redis cache's access keys. This operation requires write permission to the cache resource.
 * x-ms-original-file: specification/redis/resource-manager/Microsoft.Cache/stable/2023-04-01/examples/RedisCacheListKeys.json
 */
async function redisCacheListKeys() {
  const subscriptionId = process.env["REDIS_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["REDIS_RESOURCE_GROUP"] || "rg1";
  const name = "cache1";
  const credential = new DefaultAzureCredential();
  const client = new RedisManagementClient(credential, subscriptionId);
  const result = await client.redis.listKeys(resourceGroupName, name);
  console.log(result);
}

async function main() {
  redisCacheListKeys();
}

main().catch(console.error);
