/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { BillingManagementClient } from "@azure/arm-billing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists the invoice sections for which the user has permission to create Azure subscriptions. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @summary Lists the invoice sections for which the user has permission to create Azure subscriptions. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/invoiceSectionsWithCreateSubscriptionPermissionList.json
 */
async function invoiceSectionsWithCreateSubscriptionPermissionList() {
  const billingAccountName =
    "10000000-0000-0000-0000-000000000000:00000000-0000-0000-0000-000000000000_2019-05-31";
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.billingAccounts.listInvoiceSectionsByCreateSubscriptionPermission(
    billingAccountName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  invoiceSectionsWithCreateSubscriptionPermissionList();
}

main().catch(console.error);
