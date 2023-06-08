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
  ClusterMetricsConfigurationPatchParameters,
  MetricsConfigurationsUpdateOptionalParams,
  NetworkCloud
} from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Patch properties of metrics configuration for the provided cluster, or update the tags associated with it. Properties and tag updates can be done independently.
 *
 * @summary Patch properties of metrics configuration for the provided cluster, or update the tags associated with it. Properties and tag updates can be done independently.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2022-12-12-preview/examples/ClusterMetricsConfigurations_Patch.json
 */
async function patchMetricsConfigurationOfCluster() {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const clusterName = "clusterName";
  const metricsConfigurationName = "default";
  const metricsConfigurationUpdateParameters: ClusterMetricsConfigurationPatchParameters = {
    collectionInterval: 15,
    enabledMetrics: ["metric1", "metric2"],
    tags: { key1: "myvalue1", key2: "myvalue2" }
  };
  const options: MetricsConfigurationsUpdateOptionalParams = {
    metricsConfigurationUpdateParameters
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.metricsConfigurations.beginUpdateAndWait(
    resourceGroupName,
    clusterName,
    metricsConfigurationName,
    options
  );
  console.log(result);
}

async function main() {
  patchMetricsConfigurationOfCluster();
}

main().catch(console.error);
