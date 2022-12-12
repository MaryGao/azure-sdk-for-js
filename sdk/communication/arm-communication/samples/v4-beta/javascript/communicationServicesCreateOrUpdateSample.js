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
 * This sample demonstrates how to Create a new CommunicationService or update an existing CommunicationService.
 *
 * @summary Create a new CommunicationService or update an existing CommunicationService.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/preview/2022-07-01-preview/examples/communicationServices/createOrUpdate.json
 */
async function createOrUpdateResource() {
  const subscriptionId = process.env["COMMUNICATION_SUBSCRIPTION_ID"] || process.env["SUBSCRIPTION_ID"] || "12345";
  const resourceGroupName = "MyResourceGroup";
  const communicationServiceName = "MyCommunicationResource";
  const parameters = {
    dataLocation: "United States",
    location: "Global",
  };
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(credential, subscriptionId);
  const result = await client.communicationServices.beginCreateOrUpdateAndWait(
    resourceGroupName,
    communicationServiceName,
    parameters
  );
  console.log(result);
}

createOrUpdateResource().catch(console.error);
