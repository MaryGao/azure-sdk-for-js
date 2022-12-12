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
  RegenerateKeyParameters,
  CommunicationServiceManagementClient
} from "@azure/arm-communication";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Regenerate CommunicationService access key. PrimaryKey and SecondaryKey cannot be regenerated at the same time.
 *
 * @summary Regenerate CommunicationService access key. PrimaryKey and SecondaryKey cannot be regenerated at the same time.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/preview/2022-07-01-preview/examples/communicationServices/regenerateKey.json
 */
async function regenerateKey() {
  const subscriptionId = process.env["COMMUNICATION_SUBSCRIPTION_ID"] || process.env["SUBSCRIPTION_ID"] || "12345";
  const resourceGroupName = "MyResourceGroup";
  const communicationServiceName = "MyCommunicationResource";
  const parameters: RegenerateKeyParameters = { keyType: "Primary" };
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.communicationServices.beginRegenerateKeyAndWait(
    resourceGroupName,
    communicationServiceName,
    parameters
  );
  console.log(result);
}

regenerateKey().catch(console.error);
