/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Lists a workflow run expression trace.
 *
 * @summary Lists a workflow run expression trace.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-09-01/examples/WorkflowRunActionRepetitions_ListExpressionTraces.json
 */
async function listExpressionTracesForARepetition() {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "testResourceGroup";
  const name = "test-name";
  const workflowName = "testFlow";
  const runName = "08586776228332053161046300351";
  const actionName = "testAction";
  const repetitionName = "000001";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.workflowRunActionRepetitions.listExpressionTraces(
    resourceGroupName,
    name,
    workflowName,
    runName,
    actionName,
    repetitionName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listExpressionTracesForARepetition();
}

main().catch(console.error);
