/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CommunicationServiceManagementClient } = require("@azure/arm-communication");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create a new EmailService or update an existing EmailService.
 *
 * @summary Create a new EmailService or update an existing EmailService.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/preview/2022-07-01-preview/examples/emailServices/createOrUpdate.json
 */
async function main() {
  const subscriptionId = process.env["COMMUNICATION_SUBSCRIPTION_ID"] || process.env["SUBSCRIPTION_ID"] || "12345";
  const resourceGroupName = process.env["COMMUNICATION_RESOURCE_GROUP"] || process.env["RESOURCE_GROUP_NAME"] || process.env["RESOURCE_GROUP"] || "MyResourceGroup";
  const emailServiceName = "MyEmailServiceResource";
  const parameters = {
    dataLocation: "United States",
    location: "Global",
  };
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(credential, subscriptionId);
  const result = await client.emailServices.beginCreateOrUpdateAndWait(
    resourceGroupName,
    emailServiceName,
    parameters
  );
  console.log(result);
}

main().catch(console.error);
