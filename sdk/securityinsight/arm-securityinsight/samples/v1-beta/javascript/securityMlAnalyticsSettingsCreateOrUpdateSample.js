/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityInsights } = require("@azure/arm-securityinsight");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates the Security ML Analytics Settings.
 *
 * @summary Creates or updates the Security ML Analytics Settings.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/securityMLAnalyticsSettings/CreateAnomalySecurityMLAnalyticsSetting.json
 */
async function createsOrUpdatesAAnomalySecurityMlAnalyticsSettings() {
  const subscriptionId =
    process.env["SECURITYINSIGHT_SUBSCRIPTION_ID"] || "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = process.env["SECURITYINSIGHT_RESOURCE_GROUP"] || "myRg";
  const workspaceName = "myWorkspace";
  const settingsResourceName = "f209187f-1d17-4431-94af-c141bf5f23db";
  const securityMLAnalyticsSetting = {
    description:
      "When account logs from a source region that has rarely been logged in from during the last 14 days, an anomaly is triggered.",
    anomalySettingsVersion: 0,
    anomalyVersion: "1.0.5",
    customizableObservations: {
      multiSelectObservations: null,
      prioritizeExcludeObservations: null,
      singleSelectObservations: [
        {
          name: "Device vendor",
          description: "Select device vendor of network connection logs from CommonSecurityLog",
          rerun: "RerunAlways",
          sequenceNumber: 1,
          supportedValues: ["Palo Alto Networks", "Fortinet", "Check Point"],
          supportedValuesKql: null,
          value: ["Palo Alto Networks"],
          valuesKql: null,
        },
      ],
      singleValueObservations: null,
      thresholdObservations: [
        {
          name: "Daily data transfer threshold in MB",
          description:
            "Suppress anomalies when daily data transfered (in MB) per hour is less than the chosen value",
          maximum: "100",
          minimum: "1",
          rerun: "RerunAlways",
          sequenceNumber: 1,
          value: "25",
        },
        {
          name: "Number of standard deviations",
          description:
            "Triggers anomalies when number of standard deviations is greater than the chosen value",
          maximum: "10",
          minimum: "2",
          rerun: "RerunAlways",
          sequenceNumber: 2,
          value: "3",
        },
      ],
    },
    displayName: "Login from unusual region",
    enabled: true,
    etag: '"260090e2-0000-0d00-0000-5d6fb8670000"',
    frequency: "PT1H",
    isDefaultSettings: true,
    kind: "Anomaly",
    requiredDataConnectors: [{ connectorId: "AWS", dataTypes: ["AWSCloudTrail"] }],
    settingsDefinitionId: "f209187f-1d17-4431-94af-c141bf5f23db",
    settingsStatus: "Production",
    tactics: ["Exfiltration", "CommandAndControl"],
    techniques: ["T1037", "T1021"],
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.securityMLAnalyticsSettings.createOrUpdate(
    resourceGroupName,
    workspaceName,
    settingsResourceName,
    securityMLAnalyticsSetting
  );
  console.log(result);
}

async function main() {
  createsOrUpdatesAAnomalySecurityMlAnalyticsSettings();
}

main().catch(console.error);
