/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AutomanageClient } from "@azure/arm-automanage";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get list of configuration profile assignments
 *
 * @summary Get list of configuration profile assignments
 * x-ms-original-file: specification/automanage/resource-manager/Microsoft.Automanage/stable/2022-05-04/examples/listConfigurationProfileAssignmentsByClusterName.json
 */
async function listConfigurationProfileAssignmentsByResourceGroupAndCluster() {
  const subscriptionId =
    process.env["AUTOMANAGE_SUBSCRIPTION_ID"] || "mySubscriptionId";
  const resourceGroupName =
    process.env["AUTOMANAGE_RESOURCE_GROUP"] || "myResourceGroupName";
  const clusterName = "myClusterName";
  const credential = new DefaultAzureCredential();
  const client = new AutomanageClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.configurationProfileAssignments.listByClusterName(
    resourceGroupName,
    clusterName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listConfigurationProfileAssignmentsByResourceGroupAndCluster();
}

main().catch(console.error);
