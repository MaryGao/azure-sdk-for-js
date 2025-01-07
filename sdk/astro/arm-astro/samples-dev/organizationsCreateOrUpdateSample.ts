/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { OrganizationResource, AstroManagementClient } from "@azure/arm-astro";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a OrganizationResource
 *
 * @summary Create a OrganizationResource
 * x-ms-original-file: specification/liftrastronomer/resource-manager/Astronomer.Astro/stable/2023-08-01/examples/Organizations_CreateOrUpdate_MaximumSet_Gen.json
 */
async function organizationsCreateOrUpdateGeneratedByMaximumSetRule() {
  const subscriptionId =
    process.env["ASTRO_SUBSCRIPTION_ID"] ||
    "43454B17-172A-40FE-80FA-549EA23D12B3";
  const resourceGroupName =
    process.env["ASTRO_RESOURCE_GROUP"] || "rgastronomer";
  const organizationName = "U.1-:7";
  const resource: OrganizationResource = {
    identity: { type: "None", userAssignedIdentities: {} },
    location: "mhqthlsatwvqkl",
    properties: {
      marketplace: {
        offerDetails: {
          offerId: "krzkefmpxztqyusidzgpchfaswuyce",
          planId: "kndxzygsanuiqzwbfbbvoipv",
          planName: "pwqjwlq",
          publisherId: "gfsqxygpnerxmvols",
          termId: "pwds",
          termUnit: "xyygyzcazkuelz",
        },
        subscriptionId: "ntthclydlpqmasr",
        subscriptionStatus: "PendingFulfillmentStart",
      },
      partnerOrganizationProperties: {
        organizationId: "lskgzdmziusgrsucv",
        organizationName: "3-",
        singleSignOnProperties: {
          aadDomains: ["kfbleh"],
          enterpriseAppId: "mklfypyujwumgwdzae",
          provisioningState: "Succeeded",
          singleSignOnState: "Initial",
          singleSignOnUrl: "ymmtzkyghvinvhgnqlzwrr",
        },
        workspaceId: "vcrupxwpaba",
        workspaceName: "9.:06",
      },
      provisioningState: "Succeeded",
      user: {
        emailAddress: ".K_@e7N-g1.xjqnbPs",
        firstName: "nfh",
        lastName: "lazfbstcccykibvcrxpmglqam",
        phoneNumber: "inxkscllh",
        upn: "xtutvycpxjrtoftx",
      },
    },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new AstroManagementClient(credential, subscriptionId);
  const result = await client.organizations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    organizationName,
    resource,
  );
  console.log(result);
}

async function main() {
  organizationsCreateOrUpdateGeneratedByMaximumSetRule();
}

main().catch(console.error);
