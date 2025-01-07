/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ResourceChanges } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureChangeAnalysisManagementClient } from "../azureChangeAnalysisManagementClient.js";
import {
  Change,
  ResourceChangesListNextOptionalParams,
  ResourceChangesListOptionalParams,
  ResourceChangesListResponse,
  ResourceChangesListNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ResourceChanges operations. */
export class ResourceChangesImpl implements ResourceChanges {
  private readonly client: AzureChangeAnalysisManagementClient;

  /**
   * Initialize a new instance of the class ResourceChanges class.
   * @param client Reference to the service client
   */
  constructor(client: AzureChangeAnalysisManagementClient) {
    this.client = client;
  }

  /**
   * List the changes of a resource within the specified time range. Customer data will be masked if the
   * user doesn't have access.
   * @param resourceId The identifier of the resource.
   * @param startTime Specifies the start time of the changes request.
   * @param endTime Specifies the end time of the changes request.
   * @param options The options parameters.
   */
  public list(
    resourceId: string,
    startTime: Date,
    endTime: Date,
    options?: ResourceChangesListOptionalParams
  ): PagedAsyncIterableIterator<Change> {
    const iter = this.listPagingAll(resourceId, startTime, endTime, options);
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
        return this.listPagingPage(
          resourceId,
          startTime,
          endTime,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceId: string,
    startTime: Date,
    endTime: Date,
    options?: ResourceChangesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Change[]> {
    let result: ResourceChangesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceId, startTime, endTime, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceId,
        startTime,
        endTime,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceId: string,
    startTime: Date,
    endTime: Date,
    options?: ResourceChangesListOptionalParams
  ): AsyncIterableIterator<Change> {
    for await (const page of this.listPagingPage(
      resourceId,
      startTime,
      endTime,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List the changes of a resource within the specified time range. Customer data will be masked if the
   * user doesn't have access.
   * @param resourceId The identifier of the resource.
   * @param startTime Specifies the start time of the changes request.
   * @param endTime Specifies the end time of the changes request.
   * @param options The options parameters.
   */
  private _list(
    resourceId: string,
    startTime: Date,
    endTime: Date,
    options?: ResourceChangesListOptionalParams
  ): Promise<ResourceChangesListResponse> {
    return this.client.sendOperationRequest(
      { resourceId, startTime, endTime, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceId The identifier of the resource.
   * @param startTime Specifies the start time of the changes request.
   * @param endTime Specifies the end time of the changes request.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceId: string,
    startTime: Date,
    endTime: Date,
    nextLink: string,
    options?: ResourceChangesListNextOptionalParams
  ): Promise<ResourceChangesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceId, startTime, endTime, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceId}/providers/Microsoft.ChangeAnalysis/resourceChanges",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ChangeList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skipToken,
    Parameters.startTime,
    Parameters.endTime
  ],
  urlParameters: [Parameters.$host, Parameters.resourceId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChangeList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skipToken,
    Parameters.startTime,
    Parameters.endTime
  ],
  urlParameters: [Parameters.$host, Parameters.nextLink, Parameters.resourceId],
  headerParameters: [Parameters.accept],
  serializer
};
