/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes the specified network security rule.
 *
 * @summary Deletes the specified network security rule.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/examples/NetworkSecurityGroupRuleDelete.json
 */
async function deleteNetworkSecurityRuleFromNetworkSecurityGroup() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const networkSecurityGroupName = "testnsg";
  const securityRuleName = "rule1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.securityRules.beginDeleteAndWait(
    resourceGroupName,
    networkSecurityGroupName,
    securityRuleName
  );
  console.log(result);
}

deleteNetworkSecurityRuleFromNetworkSecurityGroup().catch(console.error);
