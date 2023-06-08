/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ContentKeyPolicy, AzureMediaServices } from "@azure/arm-mediaservices";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates an existing Content Key Policy in the Media Services account
 *
 * @summary Updates an existing Content Key Policy in the Media Services account
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Metadata/stable/2022-08-01/examples/content-key-policies-update.json
 */
async function updateAContentKeyPolicy() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["MEDIASERVICES_RESOURCE_GROUP"] || "contoso";
  const accountName = "contosomedia";
  const contentKeyPolicyName = "PolicyWithClearKeyOptionAndTokenRestriction";
  const parameters: ContentKeyPolicy = {
    description: "Updated Policy",
    options: [
      {
        name: "ClearKeyOption",
        configuration: {
          odataType: "#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration"
        },
        restriction: {
          odataType: "#Microsoft.Media.ContentKeyPolicyOpenRestriction"
        }
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.contentKeyPolicies.update(
    resourceGroupName,
    accountName,
    contentKeyPolicyName,
    parameters
  );
  console.log(result);
}

async function main() {
  updateAContentKeyPolicy();
}

main().catch(console.error);
