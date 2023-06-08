/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AlertsSuppressionRule, SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update existing rule or create new rule if it doesn't exist
 *
 * @summary Update existing rule or create new rule if it doesn't exist
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2019-01-01-preview/examples/AlertsSuppressionRules/PutAlertsSuppressionRule_example.json
 */
async function updateOrCreateSuppressionRuleForSubscription() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] ||
    "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const alertsSuppressionRuleName = "dismissIpAnomalyAlerts";
  const alertsSuppressionRule: AlertsSuppressionRule = {
    alertType: "IpAnomaly",
    comment: "Test VM",
    expirationDateUtc: new Date("2019-12-01T19:50:47.083633Z"),
    reason: "FalsePositive",
    state: "Enabled",
    suppressionAlertsScope: {
      allOf: [
        { field: "entities.ip.address" },
        { field: "entities.process.commandline" }
      ]
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.alertsSuppressionRules.update(
    alertsSuppressionRuleName,
    alertsSuppressionRule
  );
  console.log(result);
}

async function main() {
  updateOrCreateSuppressionRuleForSubscription();
}

main().catch(console.error);
