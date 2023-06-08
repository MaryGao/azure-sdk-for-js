/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ResourceConnectorManagementClient } from "@azure/arm-resourceconnector";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a list of Appliances in the specified subscription. The operation returns properties of each Appliance
 *
 * @summary Gets a list of Appliances in the specified subscription. The operation returns properties of each Appliance
 * x-ms-original-file: specification/resourceconnector/resource-manager/Microsoft.ResourceConnector/stable/2022-10-27/examples/AppliancesListBySubscription.json
 */
async function listAppliancesBySubscription() {
  const subscriptionId =
    process.env["RESOURCECONNECTOR_SUBSCRIPTION_ID"] ||
    "11111111-2222-3333-4444-555555555555";
  const credential = new DefaultAzureCredential();
  const client = new ResourceConnectorManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.appliances.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listAppliancesBySubscription();
}

main().catch(console.error);
