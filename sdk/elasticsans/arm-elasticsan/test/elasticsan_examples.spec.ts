/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { ElasticSanManagement } from "../src/elasticSanManagement";
import { ElasticSan } from "../src/models";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("elasticSan test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: ElasticSanManagement;
  let location: string;
  let resourceGroup: string;
  let elasticSanName: string;
  let parameters: ElasticSan
  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new ElasticSanManagement(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus2";
    resourceGroup = "myjstest";
    elasticSanName = "testelasticsan";
    parameters = {
      location,
      properties: {
        baseSizeTiB: 15,
        extendedCapacitySizeTiB: 27,
        sku: { name: "Premium_LRS" }
      }
    }
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("elasticSan create test", async function () {
    const res = await client.elasticSans.beginCreateAndWait(
      resourceGroup,
      elasticSanName,
      parameters
    );
    assert.equal(res.name, elasticSanName);
  });

  it("elasticSan list test", async function () {
    const resArray = new Array();
    for await (let item of client.elasticSans.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("elasticSan delete test", async function () {
    const resArray = new Array();
    const result = await client.elasticSans.beginDeleteAndWait(
      resourceGroup,
      elasticSanName
    );
    for await (let item of client.elasticSans.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
})
