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
  BuilderResource,
  AppPlatformManagementClient
} from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update a KPack builder.
 *
 * @summary Create or update a KPack builder.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/stable/2023-12-01/examples/BuildServiceBuilder_CreateOrUpdate.json
 */
async function buildServiceBuilderCreateOrUpdate() {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "myservice";
  const buildServiceName = "default";
  const builderName = "mybuilder";
  const builderResource: BuilderResource = {
    properties: {
      buildpackGroups: [
        { name: "mix", buildpacks: [{ id: "tanzu-buildpacks/java-azure" }] }
      ],
      stack: { id: "io.buildpacks.stacks.bionic", version: "base" }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.buildServiceBuilder.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    buildServiceName,
    builderName,
    builderResource
  );
  console.log(result);
}

async function main() {
  buildServiceBuilderCreateOrUpdate();
}

main().catch(console.error);
