/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityInsights } from "@azure/arm-securityinsight";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets an entity.
 *
 * @summary Gets an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/entities/GetCloudApplicationEntityById.json
 */
async function getACloudApplicationEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "e1d3d618-e11f-478b-98e3-bb381539a8e1";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.get(
    resourceGroupName,
    workspaceName,
    entityId
  );
  console.log(result);
}

getACloudApplicationEntity().catch(console.error);

/**
 * This sample demonstrates how to Gets an entity.
 *
 * @summary Gets an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/entities/GetDnsEntityById.json
 */
async function getADnsEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "f4e74920-f2c0-4412-a45f-66d94fdf01f8";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.get(
    resourceGroupName,
    workspaceName,
    entityId
  );
  console.log(result);
}

getADnsEntity().catch(console.error);

/**
 * This sample demonstrates how to Gets an entity.
 *
 * @summary Gets an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/entities/GetFileEntityById.json
 */
async function getAFileEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "af378b21-b4aa-4fe7-bc70-13f8621a322f";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.get(
    resourceGroupName,
    workspaceName,
    entityId
  );
  console.log(result);
}

getAFileEntity().catch(console.error);

/**
 * This sample demonstrates how to Gets an entity.
 *
 * @summary Gets an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/entities/GetFileHashEntityById.json
 */
async function getAFileHashEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "ea359fa6-c1e5-f878-e105-6344f3e399a1";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.get(
    resourceGroupName,
    workspaceName,
    entityId
  );
  console.log(result);
}

getAFileHashEntity().catch(console.error);

/**
 * This sample demonstrates how to Gets an entity.
 *
 * @summary Gets an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/entities/GetHostEntityById.json
 */
async function getAHostEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "e1d3d618-e11f-478b-98e3-bb381539a8e1";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.get(
    resourceGroupName,
    workspaceName,
    entityId
  );
  console.log(result);
}

getAHostEntity().catch(console.error);

/**
 * This sample demonstrates how to Gets an entity.
 *
 * @summary Gets an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/entities/GetMailClusterEntityById.json
 */
async function getAMailClusterEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "e1d3d618-e11f-478b-98e3-bb381539a8e1";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.get(
    resourceGroupName,
    workspaceName,
    entityId
  );
  console.log(result);
}

getAMailClusterEntity().catch(console.error);

/**
 * This sample demonstrates how to Gets an entity.
 *
 * @summary Gets an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/entities/GetMailMessageEntityById.json
 */
async function getAMailMessageEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "e1d3d618-e11f-478b-98e3-bb381539a8e1";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.get(
    resourceGroupName,
    workspaceName,
    entityId
  );
  console.log(result);
}

getAMailMessageEntity().catch(console.error);

/**
 * This sample demonstrates how to Gets an entity.
 *
 * @summary Gets an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/entities/GetMailboxEntityById.json
 */
async function getAMailboxEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "e1d3d618-e11f-478b-98e3-bb381539a8e1";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.get(
    resourceGroupName,
    workspaceName,
    entityId
  );
  console.log(result);
}

getAMailboxEntity().catch(console.error);

/**
 * This sample demonstrates how to Gets an entity.
 *
 * @summary Gets an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/entities/GetMalwareEntityById.json
 */
async function getAMalwareEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "af378b21-b4aa-4fe7-bc70-13f8621a322f";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.get(
    resourceGroupName,
    workspaceName,
    entityId
  );
  console.log(result);
}

getAMalwareEntity().catch(console.error);

/**
 * This sample demonstrates how to Gets an entity.
 *
 * @summary Gets an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/entities/GetProcessEntityById.json
 */
async function getAProcessEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "7264685c-038c-42c6-948c-38e14ef1fb98";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.get(
    resourceGroupName,
    workspaceName,
    entityId
  );
  console.log(result);
}

getAProcessEntity().catch(console.error);

/**
 * This sample demonstrates how to Gets an entity.
 *
 * @summary Gets an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/entities/GetRegistryKeyEntityById.json
 */
async function getARegistryKeyEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "e1d3d618-e11f-478b-98e3-bb381539a8e1";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.get(
    resourceGroupName,
    workspaceName,
    entityId
  );
  console.log(result);
}

getARegistryKeyEntity().catch(console.error);

/**
 * This sample demonstrates how to Gets an entity.
 *
 * @summary Gets an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/entities/GetRegistryValueEntityById.json
 */
async function getARegistryValueEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "dc44bd11-b348-4d76-ad29-37bf7aa41356";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.get(
    resourceGroupName,
    workspaceName,
    entityId
  );
  console.log(result);
}

getARegistryValueEntity().catch(console.error);

/**
 * This sample demonstrates how to Gets an entity.
 *
 * @summary Gets an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/entities/GetSecurityAlertEntityById.json
 */
async function getASecurityAlertEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "4aa486e0-6f85-41af-99ea-7acdce7be6c8";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.get(
    resourceGroupName,
    workspaceName,
    entityId
  );
  console.log(result);
}

getASecurityAlertEntity().catch(console.error);

/**
 * This sample demonstrates how to Gets an entity.
 *
 * @summary Gets an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/entities/GetSecurityGroupEntityById.json
 */
async function getASecurityGroupEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "e1d3d618-e11f-478b-98e3-bb381539a8e1";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.get(
    resourceGroupName,
    workspaceName,
    entityId
  );
  console.log(result);
}

getASecurityGroupEntity().catch(console.error);

/**
 * This sample demonstrates how to Gets an entity.
 *
 * @summary Gets an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/entities/GetSubmissionMailEntityById.json
 */
async function getASubmissionMailEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "e1d3d618-e11f-478b-98e3-bb381539a8e1";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.get(
    resourceGroupName,
    workspaceName,
    entityId
  );
  console.log(result);
}

getASubmissionMailEntity().catch(console.error);

/**
 * This sample demonstrates how to Gets an entity.
 *
 * @summary Gets an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/entities/GetUrlEntityById.json
 */
async function getAUrlEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "e1d3d618-e11f-478b-98e3-bb381539a8e1";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.get(
    resourceGroupName,
    workspaceName,
    entityId
  );
  console.log(result);
}

getAUrlEntity().catch(console.error);

/**
 * This sample demonstrates how to Gets an entity.
 *
 * @summary Gets an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/entities/GetIoTDeviceEntityById.json
 */
async function getAnIoTDeviceEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "e1d3d618-e11f-478b-98e3-bb381539a8e1";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.get(
    resourceGroupName,
    workspaceName,
    entityId
  );
  console.log(result);
}

getAnIoTDeviceEntity().catch(console.error);

/**
 * This sample demonstrates how to Gets an entity.
 *
 * @summary Gets an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/entities/GetAccountEntityById.json
 */
async function getAnAccountEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "e1d3d618-e11f-478b-98e3-bb381539a8e1";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.get(
    resourceGroupName,
    workspaceName,
    entityId
  );
  console.log(result);
}

getAnAccountEntity().catch(console.error);

/**
 * This sample demonstrates how to Gets an entity.
 *
 * @summary Gets an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/entities/GetAzureResourceEntityById.json
 */
async function getAnAzureResourceEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "e1d3d618-e11f-478b-98e3-bb381539a8e1";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.get(
    resourceGroupName,
    workspaceName,
    entityId
  );
  console.log(result);
}

getAnAzureResourceEntity().catch(console.error);

/**
 * This sample demonstrates how to Gets an entity.
 *
 * @summary Gets an entity.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/entities/GetIpEntityById.json
 */
async function getAnIPEntity() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "e1d3d618-e11f-478b-98e3-bb381539a8e1";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entities.get(
    resourceGroupName,
    workspaceName,
    entityId
  );
  console.log(result);
}

getAnIPEntity().catch(console.error);
