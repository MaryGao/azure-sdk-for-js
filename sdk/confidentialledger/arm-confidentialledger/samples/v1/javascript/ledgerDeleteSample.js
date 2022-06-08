/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ConfidentialLedgerClient } = require("@azure/arm-confidentialledger");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes an existing Confidential Ledger.
 *
 * @summary Deletes an existing Confidential Ledger.
 * x-ms-original-file: specification/confidentialledger/resource-manager/Microsoft.ConfidentialLedger/stable/2022-05-13/examples/ConfidentialLedger_Delete.json
 */
async function confidentialLedgerDelete() {
  const subscriptionId = "0000000-0000-0000-0000-000000000001";
  const resourceGroupName = "DummyResourceGroupName";
  const ledgerName = "DummyLedgerName";
  const credential = new DefaultAzureCredential();
  const client = new ConfidentialLedgerClient(credential, subscriptionId);
  const result = await client.ledger.beginDeleteAndWait(resourceGroupName, ledgerName);
  console.log(result);
}

confidentialLedgerDelete().catch(console.error);
