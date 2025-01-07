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
  BillingRoleAssignmentProperties,
  BillingManagementClient,
} from "@azure/arm-billing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Adds a role assignment on an invoice section. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @summary Adds a role assignment on an invoice section. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/billingRoleAssignmentCreateByInvoiceSection.json
 */
async function billingRoleAssignmentCreateByInvoiceSection() {
  const billingAccountName =
    "00000000-0000-0000-0000-000000000000:00000000-0000-0000-0000-000000000000_2018-09-30";
  const billingProfileName = "BKM6-54VH-BG7-PGB";
  const invoiceSectionName = "xxxx-xxxx-xxx-xxx";
  const parameters: BillingRoleAssignmentProperties = {
    principalId: "00000000-0000-0000-0000-000000000000",
    principalTenantId: "076915e7-de10-4323-bb34-a58c904068bb",
    roleDefinitionId:
      "/providers/Microsoft.Billing/billingAccounts/00000000-0000-0000-0000-000000000000:00000000-0000-0000-0000-000000000000_2018-09-30/billingProfiles/BKM6-54VH-BG7-PGB/invoiceSections/xxxx-xxxx-xxx-xxx/billingRoleDefinitions/10000000-aaaa-bbbb-cccc-100000000000",
    userEmailAddress: "john@contoso.com",
  };
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const result =
    await client.billingRoleAssignments.beginCreateByInvoiceSectionAndWait(
      billingAccountName,
      billingProfileName,
      invoiceSectionName,
      parameters,
    );
  console.log(result);
}

async function main() {
  billingRoleAssignmentCreateByInvoiceSection();
}

main().catch(console.error);
