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
  CommunicationServiceResourceUpdate,
  CommunicationServiceManagementClient
} from "@azure/arm-communication";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Operation to update an existing CommunicationService.
 *
 * @summary Operation to update an existing CommunicationService.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/preview/2022-07-01-preview/examples/communicationServices/update.json
 */
async function main() {
  const subscriptionId = process.env["COMMUNICATION_SUBSCRIPTION_ID"] || "12345";
  const resourceGroupName = "MyResourceGroup";
  const communicationServiceName = "MyCommunicationResource";
  const parameters: CommunicationServiceResourceUpdate = {
    tags: { newTag: "newVal" }
  };
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.communicationServices.beginUpdateAndWait(
    resourceGroupName,
    communicationServiceName,
    parameters
  );
  console.log(result);
}

main().catch(console.error);
