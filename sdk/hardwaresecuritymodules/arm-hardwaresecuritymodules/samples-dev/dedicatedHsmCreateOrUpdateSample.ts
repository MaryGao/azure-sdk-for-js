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
  DedicatedHsm,
  AzureHSMResourceProvider
} from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or Update a dedicated HSM in the specified subscription.
 *
 * @summary Create or Update a dedicated HSM in the specified subscription.
 * x-ms-original-file: specification/hardwaresecuritymodules/resource-manager/Microsoft.HardwareSecurityModules/stable/2021-11-30/examples/DedicatedHsm_CreateOrUpdate.json
 */
async function createANewOrUpdateAnExistingDedicatedHsm() {
  const subscriptionId =
    process.env["HARDWARESECURITYMODULES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["HARDWARESECURITYMODULES_RESOURCE_GROUP"] || "hsm-group";
  const name = "hsm1";
  const parameters: DedicatedHsm = {
    location: "westus",
    networkProfile: {
      networkInterfaces: [{ privateIpAddress: "1.0.0.1" }],
      subnet: {
        id:
          "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/hsm-group/providers/Microsoft.Network/virtualNetworks/stamp01/subnets/stamp01"
      }
    },
    sku: { name: "SafeNet Luna Network HSM A790" },
    stampId: "stamp01",
    tags: { dept: "hsm", environment: "dogfood" }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureHSMResourceProvider(credential, subscriptionId);
  const result = await client.dedicatedHsmOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    name,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or Update a dedicated HSM in the specified subscription.
 *
 * @summary Create or Update a dedicated HSM in the specified subscription.
 * x-ms-original-file: specification/hardwaresecuritymodules/resource-manager/Microsoft.HardwareSecurityModules/stable/2021-11-30/examples/PaymentHsm_CreateOrUpdate.json
 */
async function createANewOrUpdateAnExistingPaymentHsm() {
  const subscriptionId =
    process.env["HARDWARESECURITYMODULES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["HARDWARESECURITYMODULES_RESOURCE_GROUP"] || "hsm-group";
  const name = "hsm1";
  const parameters: DedicatedHsm = {
    location: "westus",
    networkProfile: {
      networkInterfaces: [{ privateIpAddress: "1.0.0.1" }],
      subnet: {
        id:
          "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/hsm-group/providers/Microsoft.Network/virtualNetworks/stamp01/subnets/stamp01"
      }
    },
    sku: { name: "payShield10K_LMK1_CPS60" },
    stampId: "stamp01",
    tags: { dept: "hsm", environment: "dogfood" }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureHSMResourceProvider(credential, subscriptionId);
  const result = await client.dedicatedHsmOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    name,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or Update a dedicated HSM in the specified subscription.
 *
 * @summary Create or Update a dedicated HSM in the specified subscription.
 * x-ms-original-file: specification/hardwaresecuritymodules/resource-manager/Microsoft.HardwareSecurityModules/stable/2021-11-30/examples/PaymentHsm_CreateOrUpdate_WithManagementProfile.json
 */
async function createANewOrUpdateAnExistingPaymentHsmWithManagementProfile() {
  const subscriptionId =
    process.env["HARDWARESECURITYMODULES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["HARDWARESECURITYMODULES_RESOURCE_GROUP"] || "hsm-group";
  const name = "hsm1";
  const parameters: DedicatedHsm = {
    location: "westus",
    managementNetworkProfile: {
      networkInterfaces: [{ privateIpAddress: "1.0.0.2" }],
      subnet: {
        id:
          "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/hsm-group/providers/Microsoft.Network/virtualNetworks/stamp01/subnets/stamp01"
      }
    },
    networkProfile: {
      networkInterfaces: [{ privateIpAddress: "1.0.0.1" }],
      subnet: {
        id:
          "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/hsm-group/providers/Microsoft.Network/virtualNetworks/stamp01/subnets/stamp01"
      }
    },
    sku: { name: "payShield10K_LMK1_CPS60" },
    stampId: "stamp01",
    tags: { dept: "hsm", environment: "dogfood" }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureHSMResourceProvider(credential, subscriptionId);
  const result = await client.dedicatedHsmOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    name,
    parameters
  );
  console.log(result);
}

async function main() {
  createANewOrUpdateAnExistingDedicatedHsm();
  createANewOrUpdateAnExistingPaymentHsm();
  createANewOrUpdateAnExistingPaymentHsmWithManagementProfile();
}

main().catch(console.error);
