/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { PaloAltoNetworksCloudngfw } = require("@azure/arm-paloaltonetworksngfw");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to List CertificateObjectGlobalRulestackResource resources by Tenant
 *
 * @summary List CertificateObjectGlobalRulestackResource resources by Tenant
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/preview/2022-08-29-preview/examples/CertificateObjectGlobalRulestack_List_MaximumSet_Gen.json
 */
async function certificateObjectGlobalRulestackListMaximumSetGen() {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const globalRulestackName = "praval";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.certificateObjectGlobalRulestack.list(globalRulestackName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to List CertificateObjectGlobalRulestackResource resources by Tenant
 *
 * @summary List CertificateObjectGlobalRulestackResource resources by Tenant
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/preview/2022-08-29-preview/examples/CertificateObjectGlobalRulestack_List_MinimumSet_Gen.json
 */
async function certificateObjectGlobalRulestackListMinimumSetGen() {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const globalRulestackName = "praval";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.certificateObjectGlobalRulestack.list(globalRulestackName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  certificateObjectGlobalRulestackListMaximumSetGen();
  certificateObjectGlobalRulestackListMinimumSetGen();
}

main().catch(console.error);
