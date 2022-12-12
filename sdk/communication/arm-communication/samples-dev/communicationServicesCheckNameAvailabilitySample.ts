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
  NameAvailabilityParameters,
  CommunicationServiceManagementClient
} from "@azure/arm-communication";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Checks that the CommunicationService name is valid and is not already in use.
 *
 * @summary Checks that the CommunicationService name is valid and is not already in use.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/preview/2022-07-01-preview/examples/communicationServices/checkNameAvailabilityAvailable.json
 */
async function main() {
  const subscriptionId = process.env["COMMUNICATION_SUBSCRIPTION_ID"] || process.env["SUBSCRIPTION_ID"] || "12345";
  const nameAvailabilityParameters: NameAvailabilityParameters = {
    name: "MyCommunicationService",
    type: "Microsoft.Communication/CommunicationServices"
  };
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.communicationServices.checkNameAvailability(
    nameAvailabilityParameters
  );
  console.log(result);
}

main().catch(console.error);

// /**
//  * This sample demonstrates how to Checks that the CommunicationService name is valid and is not already in use.
//  *
//  * @summary Checks that the CommunicationService name is valid and is not already in use.
//  * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/preview/2022-07-01-preview/examples/communicationServices/checkNameAvailabilityUnavailable.json
//  */
// async function main() {
//   const subscriptionId = process.env["COMMUNICATION_SUBSCRIPTION_ID"] || "12345";
//   const nameAvailabilityParameters: NameAvailabilityParameters = {
//     name: "MyCommunicationService",
//     type: "Microsoft.Communication/CommunicationServices"
//   };
//   const credential = new DefaultAzureCredential();
//   const client = new CommunicationServiceManagementClient(
//     credential,
//     subscriptionId
//   );
//   const result = await client.communicationServices.checkNameAvailability(
//     nameAvailabilityParameters
//   );
//   console.log(result);
// }

// main().catch(console.error);
