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
  ComponentPurgeBody,
  ApplicationInsightsManagementClient
} from "@azure/arm-appinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Purges data in an Application Insights component by a set of user-defined filters.

In order to manage system resources, purge requests are throttled at 50 requests per hour. You should batch the execution of purge requests by sending a single command whose predicate includes all user identities that require purging. Use the in operator to specify multiple identities. You should run the query prior to using for a purge request to verify that the results are expected.
 *
 * @summary Purges data in an Application Insights component by a set of user-defined filters.

In order to manage system resources, purge requests are throttled at 50 requests per hour. You should batch the execution of purge requests by sending a single command whose predicate includes all user identities that require purging. Use the in operator to specify multiple identities. You should run the query prior to using for a purge request to verify that the results are expected.
 * x-ms-original-file: specification/applicationinsights/resource-manager/Microsoft.Insights/stable/2020-02-02/examples/ComponentsPurge.json
 */
async function componentPurge() {
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const resourceGroupName = "OIAutoRest5123";
  const resourceName = "aztest5048";
  const body: ComponentPurgeBody = {
    filters: [
      { column: "TimeGenerated", operator: ">", value: "2017-09-01T00:00:00" }
    ],
    table: "Heartbeat"
  };
  const credential = new DefaultAzureCredential();
  const client = new ApplicationInsightsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.components.purge(
    resourceGroupName,
    resourceName,
    body
  );
  console.log(result);
}

componentPurge().catch(console.error);
