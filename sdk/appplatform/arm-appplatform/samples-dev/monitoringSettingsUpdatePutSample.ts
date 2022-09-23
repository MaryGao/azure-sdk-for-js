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
  MonitoringSettingResource,
  AppPlatformManagementClient
} from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Update the Monitoring Setting.
 *
 * @summary Update the Monitoring Setting.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-09-01-preview/examples/MonitoringSettings_UpdatePut.json
 */
async function monitoringSettingsUpdatePut() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const monitoringSettingResource: MonitoringSettingResource = {
    properties: {
      appInsightsInstrumentationKey: "00000000-0000-0000-0000-000000000000",
      appInsightsSamplingRate: 10,
      traceEnabled: true
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.monitoringSettings.beginUpdatePutAndWait(
    resourceGroupName,
    serviceName,
    monitoringSettingResource
  );
  console.log(result);
}

monitoringSettingsUpdatePut().catch(console.error);
