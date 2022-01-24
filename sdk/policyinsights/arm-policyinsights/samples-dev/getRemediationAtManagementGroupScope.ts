/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Gets an existing remediation at management group scope.
 *
 * @summary Gets an existing remediation at management group scope.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2021-10-01/examples/Remediations_GetManagementGroupScope.json
 */
import { PolicyInsightsClient } from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";

async function getRemediationAtManagementGroupScope() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const managementGroupId = "financeMg";
  const remediationName = "storageRemediation";
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const result = await client.remediations.getAtManagementGroup(
    managementGroupId,
    remediationName
  );
  console.log(result);
}

getRemediationAtManagementGroupScope().catch(console.error);
