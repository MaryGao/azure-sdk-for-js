/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  ManagersImpl,
  AvailableProviderOperationsOperationsImpl,
  AccessControlRecordsImpl,
  AlertsImpl,
  BackupsImpl,
  DevicesImpl,
  BackupScheduleGroupsImpl,
  ChapSettingsOperationsImpl,
  IscsiDisksImpl,
  FileServersImpl,
  FileSharesImpl,
  IscsiServersImpl,
  JobsImpl,
  StorageAccountCredentialsImpl,
  StorageDomainsImpl
} from "./operations";
import {
  Managers,
  AvailableProviderOperationsOperations,
  AccessControlRecords,
  Alerts,
  Backups,
  Devices,
  BackupScheduleGroups,
  ChapSettingsOperations,
  IscsiDisks,
  FileServers,
  FileShares,
  IscsiServers,
  Jobs,
  StorageAccountCredentials,
  StorageDomains
} from "./operationsInterfaces";
import { StorSimpleManagementClientOptionalParams } from "./models";

export class StorSimpleManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the StorSimpleManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The subscription id
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: StorSimpleManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: StorSimpleManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-storsimple1200series/2.0.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      const bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
      if (!bearerTokenAuthenticationPolicyFound) {
        this.pipeline.removePolicy({
          name: coreRestPipeline.bearerTokenAuthenticationPolicyName
        });
        this.pipeline.addPolicy(
          coreRestPipeline.bearerTokenAuthenticationPolicy({
            scopes: `${optionsWithDefaults.baseUri}/.default`,
            challengeCallbacks: {
              authorizeRequestOnChallenge:
                coreClient.authorizeRequestOnClaimChallenge
            }
          })
        );
      }
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2016-10-01";
    this.managers = new ManagersImpl(this);
    this.availableProviderOperationsOperations = new AvailableProviderOperationsOperationsImpl(
      this
    );
    this.accessControlRecords = new AccessControlRecordsImpl(this);
    this.alerts = new AlertsImpl(this);
    this.backups = new BackupsImpl(this);
    this.devices = new DevicesImpl(this);
    this.backupScheduleGroups = new BackupScheduleGroupsImpl(this);
    this.chapSettingsOperations = new ChapSettingsOperationsImpl(this);
    this.iscsiDisks = new IscsiDisksImpl(this);
    this.fileServers = new FileServersImpl(this);
    this.fileShares = new FileSharesImpl(this);
    this.iscsiServers = new IscsiServersImpl(this);
    this.jobs = new JobsImpl(this);
    this.storageAccountCredentials = new StorageAccountCredentialsImpl(this);
    this.storageDomains = new StorageDomainsImpl(this);
  }

  managers: Managers;
  availableProviderOperationsOperations: AvailableProviderOperationsOperations;
  accessControlRecords: AccessControlRecords;
  alerts: Alerts;
  backups: Backups;
  devices: Devices;
  backupScheduleGroups: BackupScheduleGroups;
  chapSettingsOperations: ChapSettingsOperations;
  iscsiDisks: IscsiDisks;
  fileServers: FileServers;
  fileShares: FileShares;
  iscsiServers: IscsiServers;
  jobs: Jobs;
  storageAccountCredentials: StorageAccountCredentials;
  storageDomains: StorageDomains;
}
