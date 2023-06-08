/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AuthorizationManagementClient } = require("@azure/arm-authorization");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets role assignment schedule instances of a role assignment schedule.
 *
 * @summary Gets role assignment schedule instances of a role assignment schedule.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/stable/2020-10-01/examples/GetRoleAssignmentScheduleInstancesByScope.json
 */
async function getRoleAssignmentScheduleInstancesByScope() {
  const subscriptionId =
    process.env["AUTHORIZATION_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const scope =
    "providers/Microsoft.Subscription/subscriptions/dfa2a084-766f-4003-8ae1-c4aeb893a99f";
  const filter = "assignedTo('a3bb8764-cb92-4276-9d2a-ca1e895e55ea')";
  const options = {
    filter,
  };
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.roleAssignmentScheduleInstances.listForScope(scope, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getRoleAssignmentScheduleInstancesByScope();
}

main().catch(console.error);
