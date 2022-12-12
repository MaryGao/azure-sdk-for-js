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
  UpdateDomainRequestParameters,
  CommunicationServiceManagementClient
} from "@azure/arm-communication";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Operation to update an existing Domains resource.
 *
 * @summary Operation to update an existing Domains resource.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/preview/2022-07-01-preview/examples/domains/update.json
 */
async function updateDomainsResource() {
  const subscriptionId = process.env["COMMUNICATION_SUBSCRIPTION_ID"] || process.env["SUBSCRIPTION_ID"] || "12345";
  const resourceGroupName = "MyResourceGroup";
  const emailServiceName = "MyEmailServiceResource";
  const domainName = "mydomain.com";
  const parameters: UpdateDomainRequestParameters = {
    userEngagementTracking: "Enabled",
    validSenderUsernames: { info: "MyDomain Info", alerts: "MyDomain Alerts" }
  };
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.domains.beginUpdateAndWait(
    resourceGroupName,
    emailServiceName,
    domainName,
    parameters
  );
  console.log(result);
}

updateDomainsResource().catch(console.error);
