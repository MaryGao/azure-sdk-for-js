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
  DataContainer,
  AzureMachineLearningWorkspaces
} from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create or update container.
 *
 * @summary Create or update container.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2022-05-01/examples/DataContainer/createOrUpdate.json
 */
async function createOrUpdateDataContainer() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "testrg123";
  const workspaceName = "workspace123";
  const name = "datacontainer123";
  const body: DataContainer = {
    properties: {
      description: "string",
      dataType: "UriFile",
      properties: { properties1: "value1", properties2: "value2" },
      tags: { tag1: "value1", tag2: "value2" }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningWorkspaces(credential, subscriptionId);
  const result = await client.dataContainers.createOrUpdate(
    resourceGroupName,
    workspaceName,
    name,
    body
  );
  console.log(result);
}

createOrUpdateDataContainer().catch(console.error);
