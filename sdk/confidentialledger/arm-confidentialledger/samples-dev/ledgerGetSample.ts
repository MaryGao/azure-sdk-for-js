/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ConfidentialLedgerXXXClient } from "@azure/arm-confidentialledger";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Retrieves the properties of a Confidential Ledger.
 *
 * @summary Retrieves the properties of a Confidential Ledger.
 * x-ms-original-file: specification/confidentialledger/resource-manager/Microsoft.ConfidentialLedger/stable/2022-05-13/examples/ConfidentialLedger_Get.json
 */
async function confidentialLedgerGet() {
  const subscriptionId = "0000000-0000-0000-0000-000000000001";
  const resourceGroupName = "DummyResourceGroupName";
  const ledgerName = "DummyLedgerName";
  const credential = new DefaultAzureCredential();
  const client = new ConfidentialLedgerXXXClient(credential, subscriptionId);
  const result = await client.ledger.get(resourceGroupName, ledgerName);
  console.log(result);
}

confidentialLedgerGet().catch(console.error);
