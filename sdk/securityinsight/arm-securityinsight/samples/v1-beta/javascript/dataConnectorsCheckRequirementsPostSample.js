/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityInsights } = require("@azure/arm-securityinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get requirements state for a data connector type.
 *
 * @summary Get requirements state for a data connector type.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/CheckRequirementsAzureActiveDirectoryNoAuthorization.json
 */
async function checkRequirementsForAadNoAuthorization() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorsCheckRequirements = {
    kind: "AzureActiveDirectory",
    tenantId: "2070ecc9-b4d5-4ae4-adaa-936fa1954fa8",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectorsCheckRequirementsOperations.post(
    resourceGroupName,
    workspaceName,
    dataConnectorsCheckRequirements
  );
  console.log(result);
}

checkRequirementsForAadNoAuthorization().catch(console.error);

/**
 * This sample demonstrates how to Get requirements state for a data connector type.
 *
 * @summary Get requirements state for a data connector type.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/CheckRequirementsAzureActiveDirectoryNoLicense.json
 */
async function checkRequirementsForAadNoLicense() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorsCheckRequirements = {
    kind: "AzureActiveDirectory",
    tenantId: "2070ecc9-b4d5-4ae4-adaa-936fa1954fa8",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectorsCheckRequirementsOperations.post(
    resourceGroupName,
    workspaceName,
    dataConnectorsCheckRequirements
  );
  console.log(result);
}

checkRequirementsForAadNoLicense().catch(console.error);

/**
 * This sample demonstrates how to Get requirements state for a data connector type.
 *
 * @summary Get requirements state for a data connector type.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/CheckRequirementsAzureActiveDirectory.json
 */
async function checkRequirementsForAad() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorsCheckRequirements = {
    kind: "AzureActiveDirectory",
    tenantId: "2070ecc9-b4d5-4ae4-adaa-936fa1954fa8",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectorsCheckRequirementsOperations.post(
    resourceGroupName,
    workspaceName,
    dataConnectorsCheckRequirements
  );
  console.log(result);
}

checkRequirementsForAad().catch(console.error);

/**
 * This sample demonstrates how to Get requirements state for a data connector type.
 *
 * @summary Get requirements state for a data connector type.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/CheckRequirementsAzureSecurityCenter.json
 */
async function checkRequirementsForAsc() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorsCheckRequirements = {
    kind: "AzureSecurityCenter",
    subscriptionId: "c0688291-89d7-4bed-87a2-a7b1bff43f4c",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectorsCheckRequirementsOperations.post(
    resourceGroupName,
    workspaceName,
    dataConnectorsCheckRequirements
  );
  console.log(result);
}

checkRequirementsForAsc().catch(console.error);

/**
 * This sample demonstrates how to Get requirements state for a data connector type.
 *
 * @summary Get requirements state for a data connector type.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/CheckRequirementsDynamics365.json
 */
async function checkRequirementsForDynamics365() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorsCheckRequirements = {
    kind: "Dynamics365",
    tenantId: "2070ecc9-b4d5-4ae4-adaa-936fa1954fa8",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectorsCheckRequirementsOperations.post(
    resourceGroupName,
    workspaceName,
    dataConnectorsCheckRequirements
  );
  console.log(result);
}

checkRequirementsForDynamics365().catch(console.error);

/**
 * This sample demonstrates how to Get requirements state for a data connector type.
 *
 * @summary Get requirements state for a data connector type.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/CheckRequirementsIoT.json
 */
async function checkRequirementsForIoT() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorsCheckRequirements = {
    kind: "IOT",
    subscriptionId: "c0688291-89d7-4bed-87a2-a7b1bff43f4c",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectorsCheckRequirementsOperations.post(
    resourceGroupName,
    workspaceName,
    dataConnectorsCheckRequirements
  );
  console.log(result);
}

checkRequirementsForIoT().catch(console.error);

/**
 * This sample demonstrates how to Get requirements state for a data connector type.
 *
 * @summary Get requirements state for a data connector type.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/CheckRequirementsMicrosoftCloudAppSecurity.json
 */
async function checkRequirementsForMcas() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorsCheckRequirements = {
    kind: "MicrosoftCloudAppSecurity",
    tenantId: "2070ecc9-b4d5-4ae4-adaa-936fa1954fa8",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectorsCheckRequirementsOperations.post(
    resourceGroupName,
    workspaceName,
    dataConnectorsCheckRequirements
  );
  console.log(result);
}

checkRequirementsForMcas().catch(console.error);

/**
 * This sample demonstrates how to Get requirements state for a data connector type.
 *
 * @summary Get requirements state for a data connector type.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/CheckRequirementsMdatp.json
 */
async function checkRequirementsForMdatp() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorsCheckRequirements = {
    kind: "MicrosoftCloudAppSecurity",
    tenantId: "2070ecc9-b4d5-4ae4-adaa-936fa1954fa8",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectorsCheckRequirementsOperations.post(
    resourceGroupName,
    workspaceName,
    dataConnectorsCheckRequirements
  );
  console.log(result);
}

checkRequirementsForMdatp().catch(console.error);

/**
 * This sample demonstrates how to Get requirements state for a data connector type.
 *
 * @summary Get requirements state for a data connector type.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/CheckRequirementsMicrosoftThreatIntelligence.json
 */
async function checkRequirementsForMicrosoftThreatIntelligence() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorsCheckRequirements = {
    kind: "MicrosoftThreatIntelligence",
    tenantId: "2070ecc9-b4d5-4ae4-adaa-936fa1954fa8",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectorsCheckRequirementsOperations.post(
    resourceGroupName,
    workspaceName,
    dataConnectorsCheckRequirements
  );
  console.log(result);
}

checkRequirementsForMicrosoftThreatIntelligence().catch(console.error);

/**
 * This sample demonstrates how to Get requirements state for a data connector type.
 *
 * @summary Get requirements state for a data connector type.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/CheckRequirementsMicrosoftThreatProtection.json
 */
async function checkRequirementsForMicrosoftThreatProtection() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorsCheckRequirements = {
    kind: "MicrosoftThreatProtection",
    tenantId: "2070ecc9-b4d5-4ae4-adaa-936fa1954fa8",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectorsCheckRequirementsOperations.post(
    resourceGroupName,
    workspaceName,
    dataConnectorsCheckRequirements
  );
  console.log(result);
}

checkRequirementsForMicrosoftThreatProtection().catch(console.error);

/**
 * This sample demonstrates how to Get requirements state for a data connector type.
 *
 * @summary Get requirements state for a data connector type.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/CheckRequirementsOffice365Project.json
 */
async function checkRequirementsForOffice365Project() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorsCheckRequirements = {
    kind: "Office365Project",
    tenantId: "2070ecc9-b4d5-4ae4-adaa-936fa1954fa8",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectorsCheckRequirementsOperations.post(
    resourceGroupName,
    workspaceName,
    dataConnectorsCheckRequirements
  );
  console.log(result);
}

checkRequirementsForOffice365Project().catch(console.error);

/**
 * This sample demonstrates how to Get requirements state for a data connector type.
 *
 * @summary Get requirements state for a data connector type.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/CheckRequirementsOfficeATP.json
 */
async function checkRequirementsForOfficeAtp() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorsCheckRequirements = {
    kind: "OfficeATP",
    tenantId: "2070ecc9-b4d5-4ae4-adaa-936fa1954fa8",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectorsCheckRequirementsOperations.post(
    resourceGroupName,
    workspaceName,
    dataConnectorsCheckRequirements
  );
  console.log(result);
}

checkRequirementsForOfficeAtp().catch(console.error);

/**
 * This sample demonstrates how to Get requirements state for a data connector type.
 *
 * @summary Get requirements state for a data connector type.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/CheckRequirementsOfficeIRM.json
 */
async function checkRequirementsForOfficeIrm() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorsCheckRequirements = {
    kind: "OfficeIRM",
    tenantId: "2070ecc9-b4d5-4ae4-adaa-936fa1954fa8",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectorsCheckRequirementsOperations.post(
    resourceGroupName,
    workspaceName,
    dataConnectorsCheckRequirements
  );
  console.log(result);
}

checkRequirementsForOfficeIrm().catch(console.error);

/**
 * This sample demonstrates how to Get requirements state for a data connector type.
 *
 * @summary Get requirements state for a data connector type.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/CheckRequirementsOfficePowerBI.json
 */
async function checkRequirementsForOfficePowerBi() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorsCheckRequirements = {
    kind: "OfficePowerBI",
    tenantId: "2070ecc9-b4d5-4ae4-adaa-936fa1954fa8",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectorsCheckRequirementsOperations.post(
    resourceGroupName,
    workspaceName,
    dataConnectorsCheckRequirements
  );
  console.log(result);
}

checkRequirementsForOfficePowerBi().catch(console.error);

/**
 * This sample demonstrates how to Get requirements state for a data connector type.
 *
 * @summary Get requirements state for a data connector type.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/CheckRequirementsThreatIntelligenceTaxii.json
 */
async function checkRequirementsForTiTaxii() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorsCheckRequirements = {
    kind: "ThreatIntelligenceTaxii",
    tenantId: "2070ecc9-b4d5-4ae4-adaa-936fa1954fa8",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectorsCheckRequirementsOperations.post(
    resourceGroupName,
    workspaceName,
    dataConnectorsCheckRequirements
  );
  console.log(result);
}

checkRequirementsForTiTaxii().catch(console.error);

/**
 * This sample demonstrates how to Get requirements state for a data connector type.
 *
 * @summary Get requirements state for a data connector type.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-07-01-preview/examples/dataConnectors/CheckRequirementsThreatIntelligence.json
 */
async function checkRequirementsForTi() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorsCheckRequirements = {
    kind: "ThreatIntelligence",
    tenantId: "2070ecc9-b4d5-4ae4-adaa-936fa1954fa8",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectorsCheckRequirementsOperations.post(
    resourceGroupName,
    workspaceName,
    dataConnectorsCheckRequirements
  );
  console.log(result);
}

checkRequirementsForTi().catch(console.error);
