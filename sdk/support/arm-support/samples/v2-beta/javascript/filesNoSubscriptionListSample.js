/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MicrosoftSupport } = require("@azure/arm-support");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Lists all the Files information under a workspace for an Azure subscription.
 *
 * @summary Lists all the Files information under a workspace for an Azure subscription.
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/preview/2023-06-01-preview/examples/ListFilesUnderFileWorkspace.json
 */
async function listFilesUnderAWorkspace() {
  const fileWorkspaceName = "testworkspace";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential);
  const resArray = new Array();
  for await (let item of client.filesNoSubscription.list(fileWorkspaceName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listFilesUnderAWorkspace();
}

main().catch(console.error);
