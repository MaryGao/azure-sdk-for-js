/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets all the WAF policies in a subscription.
 *
 * @summary Gets all the WAF policies in a subscription.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/WafListAllPolicies.json
 */
async function listsAllWafPoliciesInASubscription() {
  const subscriptionId = "subid";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.webApplicationFirewallPolicies.listAll()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listsAllWafPoliciesInASubscription().catch(console.error);
