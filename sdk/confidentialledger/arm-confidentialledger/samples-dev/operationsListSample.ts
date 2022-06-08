/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ConfidentialLedgerClient } from "@azure/arm-confidentialledger";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Retrieves a list of available API operations
 *
 * @summary Retrieves a list of available API operations
 * x-ms-original-file: specification/confidentialledger/resource-manager/Microsoft.ConfidentialLedger/stable/2022-05-13/examples/Operations_Get.json
 */
async function operationsGet() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new ConfidentialLedgerClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.operations.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

operationsGet().catch(console.error);
