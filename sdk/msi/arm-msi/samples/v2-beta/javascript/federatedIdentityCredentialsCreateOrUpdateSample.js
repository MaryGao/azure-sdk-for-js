/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ManagedServiceIdentityClient } = require("@azure/arm-msi");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create or update a federated identity credential under the specified user assigned identity.
 *
 * @summary Create or update a federated identity credential under the specified user assigned identity.
 * x-ms-original-file: specification/msi/resource-manager/Microsoft.ManagedIdentity/preview/2022-01-31-preview/examples/FederatedIdentityCredentialCreate.json
 */
async function federatedIdentityCredentialCreate() {
  const subscriptionId = process.env["MSI_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["MSI_RESOURCE_GROUP"] || "rgName";
  const resourceName = "resourceName";
  const federatedIdentityCredentialResourceName = "ficResourceName";
  const parameters = {
    audiences: ["api://AzureADTokenExchange"],
    issuer: "https://oidc.prod-aks.azure.com/IssuerGUID",
    subject: "system:serviceaccount:ns:svcaccount",
  };
  const credential = new DefaultAzureCredential();
  const client = new ManagedServiceIdentityClient(credential, subscriptionId);
  const result = await client.federatedIdentityCredentials.createOrUpdate(
    resourceGroupName,
    resourceName,
    federatedIdentityCredentialResourceName,
    parameters
  );
  console.log(result);
}

async function main() {
  federatedIdentityCredentialCreate();
}

main().catch(console.error);
