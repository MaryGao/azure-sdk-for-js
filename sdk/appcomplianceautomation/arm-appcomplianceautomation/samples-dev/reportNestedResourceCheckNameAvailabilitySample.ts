/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AppComplianceAutomationToolForMicrosoft365 } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots.
 *
 * @summary Checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots.
 * x-ms-original-file: specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/stable/2024-06-27/examples/Report_NestedResourceCheckNameAvailability_Report_Evidence_Check_Name_Availability.json
 */
async function reportEvidenceCheckNameAvailability() {
  const reportName = "reportABC";
  const credential = new DefaultAzureCredential();
  const client = new AppComplianceAutomationToolForMicrosoft365(credential);
  const result =
    await client.report.nestedResourceCheckNameAvailability(reportName,
      {
        "name": "evidenceABC",
        "type": "Microsoft.AppComplianceAutomation/reports/evidences"
      }
    );
  console.log(result);
}

/**
 * This sample demonstrates how to Checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots.
 *
 * @summary Checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots.
 * x-ms-original-file: specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/stable/2024-06-27/examples/Report_NestedResourceCheckNameAvailability_Report_Snapshot_Check_Name_Availability.json
 */
async function reportSnapshotCheckNameAvailability() {
  const reportName = "reportABC";
  const credential = new DefaultAzureCredential();
  const client = new AppComplianceAutomationToolForMicrosoft365(credential);
  const result =
    await client.report.nestedResourceCheckNameAvailability(reportName,
      {
        "name": "snapshotABC",
        "type": "Microsoft.AppComplianceAutomation/reports/snapshots"
      }
    );
  console.log(result);
}

/**
 * This sample demonstrates how to Checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots.
 *
 * @summary Checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots.
 * x-ms-original-file: specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/stable/2024-06-27/examples/Report_NestedResourceCheckNameAvailability_Report_Webhook_Check_Name_Availability.json
 */
async function reportWebhookCheckNameAvailability() {
  const reportName = "reportABC";
  const credential = new DefaultAzureCredential();
  const client = new AppComplianceAutomationToolForMicrosoft365(credential);
  const result =
    await client.report.nestedResourceCheckNameAvailability(reportName,
      {
        "name": "webhookABC",
        "type": "Microsoft.AppComplianceAutomation/reports/webhooks"
      }
    );
  console.log(result);
}

async function main() {
  reportEvidenceCheckNameAvailability();
  reportSnapshotCheckNameAvailability();
  reportWebhookCheckNameAvailability();
}

main().catch(console.error);
