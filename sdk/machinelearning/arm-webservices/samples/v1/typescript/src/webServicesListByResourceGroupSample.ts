/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureMLWebServicesManagementClient } from "@azure/arm-webservices";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the web services in the specified resource group.
 *
 * @summary Gets the web services in the specified resource group.
 * x-ms-original-file: specification/machinelearning/resource-manager/Microsoft.MachineLearning/stable/2017-01-01/examples/getWebServicesByResourceGroup.json
 */
async function getWebServicesByResourceGroup() {
  const subscriptionId = "subscription-id";
  const resourceGroupName = "OneResourceGroupName";
  const credential = new DefaultAzureCredential();
  const client = new AzureMLWebServicesManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.webServices.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getWebServicesByResourceGroup().catch(console.error);
