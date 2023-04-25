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
  GlobalRulestackListAppIdsOptionalParams,
  PaloAltoNetworksCloudngfw
} from "@azure/arm-paloaltonetworksngfw";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List of AppIds for GlobalRulestack ApiVersion
 *
 * @summary List of AppIds for GlobalRulestack ApiVersion
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/preview/2022-08-29-preview/examples/GlobalRulestack_listAppIds_MaximumSet_Gen.json
 */
async function globalRulestackListAppIdsMaximumSetGen() {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const globalRulestackName = "praval";
  const appIdVersion = "8543";
  const appPrefix = "pref";
  const skip = "a6a321";
  const top = 20;
  const options: GlobalRulestackListAppIdsOptionalParams = {
    appIdVersion,
    appPrefix,
    skip,
    top
  };
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const result = await client.globalRulestack.listAppIds(
    globalRulestackName,
    options
  );
  console.log(result);
}

/**
 * This sample demonstrates how to List of AppIds for GlobalRulestack ApiVersion
 *
 * @summary List of AppIds for GlobalRulestack ApiVersion
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/preview/2022-08-29-preview/examples/GlobalRulestack_listAppIds_MinimumSet_Gen.json
 */
async function globalRulestackListAppIdsMinimumSetGen() {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const globalRulestackName = "praval";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const result = await client.globalRulestack.listAppIds(globalRulestackName);
  console.log(result);
}

async function main() {
  globalRulestackListAppIdsMaximumSetGen();
  globalRulestackListAppIdsMinimumSetGen();
}

main().catch(console.error);
