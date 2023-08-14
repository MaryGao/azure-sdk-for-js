/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ResourceIdList,
  MetricsBatchOptionalParams,
  MetricsBatchResponse
} from "../models";

/** Interface representing a Metrics. */
export interface Metrics {
  /**
   * Lists the metric values for multiple resources.
   * @param baseUrl The regional endpoint to use, for example https://eastus.metrics.monitor.azure.com.
   *                The region should match the region of the requested resources. For global resources, the region
   *                should be 'global'.
   * @param subscriptionId The subscription identifier for the resources in this batch.
   * @param metricnamespace Metric namespace that contains the requested metric names.
   * @param metricnames The names of the metrics (comma separated) to retrieve.
   * @param resourceIds The comma separated list of resource IDs to query metrics for.
   * @param options The options parameters.
   */
  batch(
    baseUrl: string,
    subscriptionId: string,
    metricnamespace: string,
    metricnames: string[],
    resourceIds: ResourceIdList,
    options?: MetricsBatchOptionalParams
  ): Promise<MetricsBatchResponse>;
}
