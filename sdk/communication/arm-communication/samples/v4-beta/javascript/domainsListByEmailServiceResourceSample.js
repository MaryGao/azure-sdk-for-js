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
 * This sample demonstrates how to Handles requests to list all Domains resources under the parent EmailServices resource.
 *
 * @summary Handles requests to list all Domains resources under the parent EmailServices resource.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/preview/2022-07-01-preview/examples/domains/listByEmailService.json
 */
async function main() {
  const subscriptionId = process.env["COMMUNICATION_SUBSCRIPTION_ID"] || process.env["SUBSCRIPTION_ID"] || "12345";
  const resourceGroupName = process.env["COMMUNICATION_RESOURCE_GROUP"] || process.env["RESOURCE_GROUP_NAME"] || process.env["RESOURCE_GROUP"] || "MyResourceGroup";
  const emailServiceName = "MyEmailServiceResource";
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.domains.listByEmailServiceResource(
    resourceGroupName,
    emailServiceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

main().catch(console.error);
