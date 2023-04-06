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
  ImportImageParameters,
  ContainerRegistryManagementClient
} from "@azure/arm-containerregistry";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Copies an image to this container registry from the specified container registry.
 *
 * @summary Copies an image to this container registry from the specified container registry.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/stable/2022-12-01/examples/ImportImageByManifestDigest.json
 */
async function importImageByManifestDigest() {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const parameters: ImportImageParameters = {
    mode: "Force",
    source: {
      resourceId:
        "/subscriptions/10000000-0000-0000-0000-000000000000/resourceGroups/sourceResourceGroup/providers/Microsoft.ContainerRegistry/registries/sourceRegistry",
      sourceImage:
        "sourceRepository@sha256:0000000000000000000000000000000000000000000000000000000000000000"
    },
    targetTags: ["targetRepository:targetTag"],
    untaggedTargetRepositories: ["targetRepository1"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.registries.beginImportImageAndWait(
    resourceGroupName,
    registryName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Copies an image to this container registry from the specified container registry.
 *
 * @summary Copies an image to this container registry from the specified container registry.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/stable/2022-12-01/examples/ImportImageByTag.json
 */
async function importImageByTag() {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const parameters: ImportImageParameters = {
    mode: "Force",
    source: {
      resourceId:
        "/subscriptions/10000000-0000-0000-0000-000000000000/resourceGroups/sourceResourceGroup/providers/Microsoft.ContainerRegistry/registries/sourceRegistry",
      sourceImage: "sourceRepository:sourceTag"
    },
    targetTags: ["targetRepository:targetTag"],
    untaggedTargetRepositories: ["targetRepository1"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.registries.beginImportImageAndWait(
    resourceGroupName,
    registryName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Copies an image to this container registry from the specified container registry.
 *
 * @summary Copies an image to this container registry from the specified container registry.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/stable/2022-12-01/examples/ImportImageFromPublicRegistry.json
 */
async function importImageFromPublicRegistry() {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const parameters: ImportImageParameters = {
    mode: "Force",
    source: {
      registryUri: "registry.hub.docker.com",
      sourceImage: "library/hello-world"
    },
    targetTags: ["targetRepository:targetTag"],
    untaggedTargetRepositories: ["targetRepository1"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.registries.beginImportImageAndWait(
    resourceGroupName,
    registryName,
    parameters
  );
  console.log(result);
}

async function main() {
  importImageByManifestDigest();
  importImageByTag();
  importImageFromPublicRegistry();
}

main().catch(console.error);
