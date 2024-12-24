/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CognitiveServicesManagementClient } from "@azure/arm-cognitiveservices";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List Location Based ModelCapacities.
 *
 * @summary List Location Based ModelCapacities.
 * x-ms-original-file: specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/stable/2024-10-01/examples/ListLocationBasedModelCapacities.json
 */
async function listLocationBasedModelCapacities() {
  const subscriptionId =
    process.env["COGNITIVESERVICES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const location = "WestUS";
  const modelFormat = "OpenAI";
  const modelName = "ada";
  const modelVersion = "1";
  const credential = new DefaultAzureCredential();
  const client = new CognitiveServicesManagementClient(
    credential,
    subscriptionId,
  );
  const resArray = new Array();
  for await (let item of client.locationBasedModelCapacities.list(
    location,
    modelFormat,
    modelName,
    modelVersion,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listLocationBasedModelCapacities();
}

main().catch(console.error);
