/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Application, HDInsightManagementClient } from "@azure/arm-hdinsight";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates applications for the HDInsight cluster.
 *
 * @summary Creates applications for the HDInsight cluster.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/stable/2021-06-01/examples/CreateApplication.json
 */
async function createApplication() {
  const subscriptionId = process.env["HDINSIGHT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["HDINSIGHT_RESOURCE_GROUP"] || "rg1";
  const clusterName = "cluster1";
  const applicationName = "hue";
  const parameters: Application = {
    properties: {
      applicationType: "CustomApplication",
      computeProfile: {
        roles: [
          {
            name: "edgenode",
            hardwareProfile: { vmSize: "Standard_D12_v2" },
            targetInstanceCount: 1
          }
        ]
      },
      errors: [],
      httpsEndpoints: [
        {
          accessModes: ["WebPage"],
          destinationPort: 20000,
          subDomainSuffix: "dss"
        }
      ],
      installScriptActions: [
        {
          name: "app-install-app1",
          parameters: "-version latest -port 20000",
          roles: ["edgenode"],
          uri: "https://.../install.sh"
        }
      ],
      uninstallScriptActions: []
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result = await client.applications.beginCreateAndWait(
    resourceGroupName,
    clusterName,
    applicationName,
    parameters
  );
  console.log(result);
}

async function main() {
  createApplication();
}

main().catch(console.error);
