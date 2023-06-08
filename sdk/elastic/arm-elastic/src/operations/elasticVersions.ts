/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ElasticVersions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftElastic } from "../microsoftElastic";
import {
  ElasticVersionListFormat,
  ElasticVersionsListNextOptionalParams,
  ElasticVersionsListOptionalParams,
  ElasticVersionsListOperationResponse,
  ElasticVersionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ElasticVersions operations. */
export class ElasticVersionsImpl implements ElasticVersions {
  private readonly client: MicrosoftElastic;

  /**
   * Initialize a new instance of the class ElasticVersions class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftElastic) {
    this.client = client;
  }

  /**
   * Get a list of available versions for a region.
   * @param region Region where elastic deployment will take place.
   * @param options The options parameters.
   */
  public list(
    region: string,
    options?: ElasticVersionsListOptionalParams
  ): PagedAsyncIterableIterator<ElasticVersionListFormat> {
    const iter = this.listPagingAll(region, options);
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
        return this.listPagingPage(region, options, settings);
      }
    };
  }

  private async *listPagingPage(
    region: string,
    options?: ElasticVersionsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ElasticVersionListFormat[]> {
    let result: ElasticVersionsListOperationResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(region, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    region: string,
    options?: ElasticVersionsListOptionalParams
  ): AsyncIterableIterator<ElasticVersionListFormat> {
    for await (const page of this.listPagingPage(region, options)) {
      yield* page;
    }
  }

  /**
   * Get a list of available versions for a region.
   * @param region Region where elastic deployment will take place.
   * @param options The options parameters.
   */
  private _list(
    region: string,
    options?: ElasticVersionsListOptionalParams
  ): Promise<ElasticVersionsListOperationResponse> {
    return this.client.sendOperationRequest(
      { region, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ElasticVersionsListNextOptionalParams
  ): Promise<ElasticVersionsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Elastic/elasticVersions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ElasticVersionsListResponse
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.region],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ElasticVersionsListResponse
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
