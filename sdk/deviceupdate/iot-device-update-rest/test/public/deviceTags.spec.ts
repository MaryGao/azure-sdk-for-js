// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { DeviceUpdateRestClient } from "../../src";
import { Context } from "mocha";
import { assert } from "chai";
import { Recorder } from "@azure-tools/test-recorder";
import { createRecordedClient, startRecorder } from "./utils/recordedClient";

describe("device tags test", () => {
  let recorder: Recorder;
  let client: DeviceUpdateRestClient;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await startRecorder(recorder);
    client = createRecordedClient(recorder);
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("list device tags", async function () {
    const response = await client
      .path("/deviceUpdate/{instanceId}/updates/providers/{provider}/names", "sdkinstance", "foo")
      .get();
    assert.equal(response.status, "404");
    if (response.status !== "404") {
      assert.fail(
        `GET "/deviceUpdate/sdkInstance/updates/providers/foo/names" was expected to return 404 instead of ${response.status}`
      );

  });
}).timeout(600000);
