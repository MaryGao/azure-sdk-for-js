/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureMigrateV2 } from "@azure/arm-migrate";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get all assessments created in the project.

Returns a json array of objects of type 'assessment' as specified in Models section.

 *
 * @summary Get all assessments created in the project.

Returns a json array of objects of type 'assessment' as specified in Models section.

 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/Assessments_ListByProject.json
 */
async function assessmentsListByProject() {
  const subscriptionId = "6393a73f-8d55-47ef-b6dd-179b3e0c7910";
  const resourceGroupName = "abgoyal-westEurope";
  const projectName = "abgoyalWEselfhostb72bproject";
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.assessments.listByProject(
    resourceGroupName,
    projectName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

assessmentsListByProject().catch(console.error);
