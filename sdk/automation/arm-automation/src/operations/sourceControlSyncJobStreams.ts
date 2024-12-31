/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { SourceControlSyncJobStreams } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AutomationClient } from "../automationClient.js";
import {
  SourceControlSyncJobStream,
  SourceControlSyncJobStreamsListBySyncJobNextOptionalParams,
  SourceControlSyncJobStreamsListBySyncJobOptionalParams,
  SourceControlSyncJobStreamsListBySyncJobResponse,
  SourceControlSyncJobStreamsGetOptionalParams,
  SourceControlSyncJobStreamsGetResponse,
  SourceControlSyncJobStreamsListBySyncJobNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing SourceControlSyncJobStreams operations. */
export class SourceControlSyncJobStreamsImpl
  implements SourceControlSyncJobStreams {
  private readonly client: AutomationClient;

  /**
   * Initialize a new instance of the class SourceControlSyncJobStreams class.
   * @param client Reference to the service client
   */
  constructor(client: AutomationClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of sync job streams identified by sync job id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The source control name.
   * @param sourceControlSyncJobId The source control sync job id.
   * @param options The options parameters.
   */
  public listBySyncJob(
    resourceGroupName: string,
    automationAccountName: string,
    sourceControlName: string,
    sourceControlSyncJobId: string,
    options?: SourceControlSyncJobStreamsListBySyncJobOptionalParams
  ): PagedAsyncIterableIterator<SourceControlSyncJobStream> {
    const iter = this.listBySyncJobPagingAll(
      resourceGroupName,
      automationAccountName,
      sourceControlName,
      sourceControlSyncJobId,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listBySyncJobPagingPage(
          resourceGroupName,
          automationAccountName,
          sourceControlName,
          sourceControlSyncJobId,
          options,
          settings
        );
      }
    };
  }

  private async *listBySyncJobPagingPage(
    resourceGroupName: string,
    automationAccountName: string,
    sourceControlName: string,
    sourceControlSyncJobId: string,
    options?: SourceControlSyncJobStreamsListBySyncJobOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<SourceControlSyncJobStream[]> {
    let result: SourceControlSyncJobStreamsListBySyncJobResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySyncJob(
        resourceGroupName,
        automationAccountName,
        sourceControlName,
        sourceControlSyncJobId,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySyncJobNext(
        resourceGroupName,
        automationAccountName,
        sourceControlName,
        sourceControlSyncJobId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySyncJobPagingAll(
    resourceGroupName: string,
    automationAccountName: string,
    sourceControlName: string,
    sourceControlSyncJobId: string,
    options?: SourceControlSyncJobStreamsListBySyncJobOptionalParams
  ): AsyncIterableIterator<SourceControlSyncJobStream> {
    for await (const page of this.listBySyncJobPagingPage(
      resourceGroupName,
      automationAccountName,
      sourceControlName,
      sourceControlSyncJobId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieve a list of sync job streams identified by sync job id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The source control name.
   * @param sourceControlSyncJobId The source control sync job id.
   * @param options The options parameters.
   */
  private _listBySyncJob(
    resourceGroupName: string,
    automationAccountName: string,
    sourceControlName: string,
    sourceControlSyncJobId: string,
    options?: SourceControlSyncJobStreamsListBySyncJobOptionalParams
  ): Promise<SourceControlSyncJobStreamsListBySyncJobResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        sourceControlName,
        sourceControlSyncJobId,
        options
      },
      listBySyncJobOperationSpec
    );
  }

  /**
   * Retrieve a sync job stream identified by stream id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The source control name.
   * @param sourceControlSyncJobId The source control sync job id.
   * @param streamId The id of the sync job stream.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    sourceControlName: string,
    sourceControlSyncJobId: string,
    streamId: string,
    options?: SourceControlSyncJobStreamsGetOptionalParams
  ): Promise<SourceControlSyncJobStreamsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        sourceControlName,
        sourceControlSyncJobId,
        streamId,
        options
      },
      getOperationSpec
    );
  }

  /**
   * ListBySyncJobNext
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The source control name.
   * @param sourceControlSyncJobId The source control sync job id.
   * @param nextLink The nextLink from the previous successful call to the ListBySyncJob method.
   * @param options The options parameters.
   */
  private _listBySyncJobNext(
    resourceGroupName: string,
    automationAccountName: string,
    sourceControlName: string,
    sourceControlSyncJobId: string,
    nextLink: string,
    options?: SourceControlSyncJobStreamsListBySyncJobNextOptionalParams
  ): Promise<SourceControlSyncJobStreamsListBySyncJobNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        sourceControlName,
        sourceControlSyncJobId,
        nextLink,
        options
      },
      listBySyncJobNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySyncJobOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}/sourceControlSyncJobs/{sourceControlSyncJobId}/streams",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SourceControlSyncJobStreamsListBySyncJob
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.sourceControlName,
    Parameters.sourceControlSyncJobId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}/sourceControlSyncJobs/{sourceControlSyncJobId}/streams/{streamId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SourceControlSyncJobStreamById
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.sourceControlName,
    Parameters.sourceControlSyncJobId,
    Parameters.streamId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySyncJobNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SourceControlSyncJobStreamsListBySyncJob
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.nextLink,
    Parameters.sourceControlName,
    Parameters.sourceControlSyncJobId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
