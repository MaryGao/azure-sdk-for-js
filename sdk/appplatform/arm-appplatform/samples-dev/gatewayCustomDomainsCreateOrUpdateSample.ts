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
  GatewayCustomDomainResource,
  AppPlatformManagementClient
} from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create or update the Spring Cloud Gateway custom domain.
 *
 * @summary Create or update the Spring Cloud Gateway custom domain.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-09-01-preview/examples/GatewayCustomDomains_CreateOrUpdate.json
 */
async function gatewayCustomDomainsCreateOrUpdate() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const gatewayName = "default";
  const domainName = "myDomainName";
  const gatewayCustomDomainResource: GatewayCustomDomainResource = {
    properties: { thumbprint: "*" }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.gatewayCustomDomains.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    gatewayName,
    domainName,
    gatewayCustomDomainResource
  );
  console.log(result);
}

gatewayCustomDomainsCreateOrUpdate().catch(console.error);
