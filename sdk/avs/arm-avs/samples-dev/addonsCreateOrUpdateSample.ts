/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Addon, AzureVMwareSolutionAPI } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a Addon
 *
 * @summary Create a Addon
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2023-09-01/examples/Addons_CreateOrUpdate_ArcReg.json
 */
async function addonsCreateOrUpdateArcReg() {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["AVS_RESOURCE_GROUP"] || "group1";
  const privateCloudName = "cloud1";
  const addonName = "arc";
  const addon: Addon = {
    properties: {
      addonType: "Arc",
      vCenter:
        "subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg_test/providers/Microsoft.ConnectedVMwarevSphere/VCenters/test-vcenter",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.addons.beginCreateOrUpdateAndWait(
    resourceGroupName,
    privateCloudName,
    addonName,
    addon,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create a Addon
 *
 * @summary Create a Addon
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2023-09-01/examples/Addons_CreateOrUpdate_HCX.json
 */
async function addonsCreateOrUpdateHcx() {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["AVS_RESOURCE_GROUP"] || "group1";
  const privateCloudName = "cloud1";
  const addonName = "hcx";
  const addon: Addon = {
    properties: {
      addonType: "HCX",
      offer: "VMware MaaS Cloud Provider (Enterprise)",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.addons.beginCreateOrUpdateAndWait(
    resourceGroupName,
    privateCloudName,
    addonName,
    addon,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create a Addon
 *
 * @summary Create a Addon
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2023-09-01/examples/Addons_CreateOrUpdate_SRM.json
 */
async function addonsCreateOrUpdateSrm() {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["AVS_RESOURCE_GROUP"] || "group1";
  const privateCloudName = "cloud1";
  const addonName = "srm";
  const addon: Addon = {
    properties: {
      addonType: "SRM",
      licenseKey: "41915178-A8FF-4A4D-B683-6D735AF5E3F5",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.addons.beginCreateOrUpdateAndWait(
    resourceGroupName,
    privateCloudName,
    addonName,
    addon,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create a Addon
 *
 * @summary Create a Addon
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2023-09-01/examples/Addons_CreateOrUpdate_VR.json
 */
async function addonsCreateOrUpdateVr() {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["AVS_RESOURCE_GROUP"] || "group1";
  const privateCloudName = "cloud1";
  const addonName = "vr";
  const addon: Addon = { properties: { addonType: "VR", vrsCount: 1 } };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.addons.beginCreateOrUpdateAndWait(
    resourceGroupName,
    privateCloudName,
    addonName,
    addon,
  );
  console.log(result);
}

async function main() {
  addonsCreateOrUpdateArcReg();
  addonsCreateOrUpdateHcx();
  addonsCreateOrUpdateSrm();
  addonsCreateOrUpdateVr();
}

main().catch(console.error);
