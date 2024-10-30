// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { testPollerProperties } from "./recorderUtils.js";
import { SecretClient, SecretProperties } from "../../../src/index.js";
import { PollOperationState, PollerLike } from "@azure/core-lro";

export default class TestClient {
  public readonly client: SecretClient;
  constructor(client: SecretClient) {
    this.client = client;
  }
  public formatName(name: string): string {
    return name.replace(/[^0-9a-zA-Z-]/g, "");
  }
  public async purgeSecret(secretName: string): Promise<void> {
    await this.client.purgeDeletedSecret(secretName);
  }
  public async flushSecret(secretName: string): Promise<void> {
    const that = this;
    const deletePoller = await that.client.beginDeleteSecret(secretName, testPollerProperties);
    await deletePoller.pollUntilDone();
    await this.purgeSecret(secretName);
  }
  public async beginRestoreSecretBackup(
    _backup: Uint8Array,
    _options = {},
  ): Promise<PollerLike<PollOperationState<SecretProperties>, SecretProperties>> {
    throw new Error("not implemented");

    // const poller = new RestoreSecretBackupPoller({
    //   backup,
    //   client: this.client,
    //   intervalInMs: options.intervalInMs,
    //   resumeFrom: options.resumeFrom,
    //   operationOptions: options,
    // });

    // // This will initialize the poller's operation (the recovery of the backup).
    // await poller.poll();

    // return poller;
  }
}
