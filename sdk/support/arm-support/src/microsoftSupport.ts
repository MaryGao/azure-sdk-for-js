/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest,
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  OperationsImpl,
  ServicesImpl,
  ServiceClassificationsNoSubscriptionImpl,
  ServiceClassificationsImpl,
  ProblemClassificationsNoSubscriptionImpl,
  ProblemClassificationsImpl,
  SupportTicketsImpl,
  SupportTicketsNoSubscriptionImpl,
  CommunicationsImpl,
  CommunicationsNoSubscriptionImpl,
  ChatTranscriptsImpl,
  ChatTranscriptsNoSubscriptionImpl,
  FileWorkspacesImpl,
  FileWorkspacesNoSubscriptionImpl,
  FilesImpl,
  FilesNoSubscriptionImpl,
  LookUpResourceIdImpl,
} from "./operations";
import {
  Operations,
  Services,
  ServiceClassificationsNoSubscription,
  ServiceClassifications,
  ProblemClassificationsNoSubscription,
  ProblemClassifications,
  SupportTickets,
  SupportTicketsNoSubscription,
  Communications,
  CommunicationsNoSubscription,
  ChatTranscripts,
  ChatTranscriptsNoSubscription,
  FileWorkspaces,
  FileWorkspacesNoSubscription,
  Files,
  FilesNoSubscription,
  LookUpResourceId,
} from "./operationsInterfaces";
import { MicrosoftSupportOptionalParams } from "./models";

export class MicrosoftSupport extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId?: string;

  /**
   * Initializes a new instance of the MicrosoftSupport class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription. The value must be an UUID.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: MicrosoftSupportOptionalParams,
  );
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: MicrosoftSupportOptionalParams,
  );
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionIdOrOptions?: MicrosoftSupportOptionalParams | string,
    options?: MicrosoftSupportOptionalParams,
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }

    let subscriptionId: string | undefined;

    if (typeof subscriptionIdOrOptions === "string") {
      subscriptionId = subscriptionIdOrOptions;
    } else if (typeof subscriptionIdOrOptions === "object") {
      options = subscriptionIdOrOptions;
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: MicrosoftSupportOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials,
    };

    const packageDetails = `azsdk-js-arm-support/2.2.0-beta.2`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix,
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com",
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] =
        options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName,
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName,
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge,
          },
        }),
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2023-06-01-preview";
    this.operations = new OperationsImpl(this);
    this.services = new ServicesImpl(this);
    this.serviceClassificationsNoSubscription =
      new ServiceClassificationsNoSubscriptionImpl(this);
    this.serviceClassifications = new ServiceClassificationsImpl(this);
    this.problemClassificationsNoSubscription =
      new ProblemClassificationsNoSubscriptionImpl(this);
    this.problemClassifications = new ProblemClassificationsImpl(this);
    this.supportTickets = new SupportTicketsImpl(this);
    this.supportTicketsNoSubscription = new SupportTicketsNoSubscriptionImpl(
      this,
    );
    this.communications = new CommunicationsImpl(this);
    this.communicationsNoSubscription = new CommunicationsNoSubscriptionImpl(
      this,
    );
    this.chatTranscripts = new ChatTranscriptsImpl(this);
    this.chatTranscriptsNoSubscription = new ChatTranscriptsNoSubscriptionImpl(
      this,
    );
    this.fileWorkspaces = new FileWorkspacesImpl(this);
    this.fileWorkspacesNoSubscription = new FileWorkspacesNoSubscriptionImpl(
      this,
    );
    this.files = new FilesImpl(this);
    this.filesNoSubscription = new FilesNoSubscriptionImpl(this);
    this.lookUpResourceId = new LookUpResourceIdImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest,
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      },
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  operations: Operations;
  services: Services;
  serviceClassificationsNoSubscription: ServiceClassificationsNoSubscription;
  serviceClassifications: ServiceClassifications;
  problemClassificationsNoSubscription: ProblemClassificationsNoSubscription;
  problemClassifications: ProblemClassifications;
  supportTickets: SupportTickets;
  supportTicketsNoSubscription: SupportTicketsNoSubscription;
  communications: Communications;
  communicationsNoSubscription: CommunicationsNoSubscription;
  chatTranscripts: ChatTranscripts;
  chatTranscriptsNoSubscription: ChatTranscriptsNoSubscription;
  fileWorkspaces: FileWorkspaces;
  fileWorkspacesNoSubscription: FileWorkspacesNoSubscription;
  files: Files;
  filesNoSubscription: FilesNoSubscription;
  lookUpResourceId: LookUpResourceId;
}
