/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetAppManagementClient } from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get the default and current limits for quotas
 *
 * @summary Get the default and current limits for quotas
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2022-01-01/examples/QuotaLimits_List.json
 */
async function quotaLimits() {
  const subscriptionId = "D633CC2E-722B-4AE1-B636-BBD9E4C60ED9";
  const location = "eastus";
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.netAppResourceQuotaLimits.list(location)) {
    resArray.push(item);
  }
  console.log(resArray);
}

quotaLimits().catch(console.error);
