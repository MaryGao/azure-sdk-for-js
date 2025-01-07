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
  BillingAccountsListOptionalParams,
  BillingManagementClient,
} from "@azure/arm-billing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists the billing accounts that a user has access to.
 *
 * @summary Lists the billing accounts that a user has access to.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/billingAccountForLegacyAccountDetails.json
 */
async function billingAccountForLegacyAccountDetails() {
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.billingAccounts.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the billing accounts that a user has access to.
 *
 * @summary Lists the billing accounts that a user has access to.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/billingAccountsList.json
 */
async function billingAccountsList() {
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.billingAccounts.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the billing accounts that a user has access to.
 *
 * @summary Lists the billing accounts that a user has access to.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/billingAccountsListWithExpandForPONumber.json
 */
async function billingAccountsListWithExpandForPoNumber() {
  const expand = "soldTo,enrollmentDetails/poNumber";
  const options: BillingAccountsListOptionalParams = { expand };
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.billingAccounts.list(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  billingAccountForLegacyAccountDetails();
  billingAccountsList();
  billingAccountsListWithExpandForPoNumber();
}

main().catch(console.error);
