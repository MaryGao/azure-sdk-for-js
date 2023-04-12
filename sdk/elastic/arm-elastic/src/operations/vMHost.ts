/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { VMHost } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftElastic } from "../microsoftElastic";
import {
  VMResources,
  VMHostListNextOptionalParams,
  VMHostListOptionalParams,
  VMHostListOperationResponse,
  VMHostListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing VMHost operations. */
export class VMHostImpl implements VMHost {
  private readonly client: MicrosoftElastic;

  /**
   * Initialize a new instance of the class VMHost class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftElastic) {
    this.client = client;
  }

  /**
   * List the vm resources currently being monitored by the Elastic monitor resource.
   * @param resourceGroupName The name of the resource group to which the Elastic resource belongs.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    monitorName: string,
    options?: VMHostListOptionalParams
  ): PagedAsyncIterableIterator<VMResources> {
    const iter = this.listPagingAll(resourceGroupName, monitorName, options);
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
          resourceGroupName,
          monitorName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    monitorName: string,
    options?: VMHostListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<VMResources[]> {
    let result: VMHostListOperationResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, monitorName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        monitorName,
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
    resourceGroupName: string,
    monitorName: string,
    options?: VMHostListOptionalParams
  ): AsyncIterableIterator<VMResources> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      monitorName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List the vm resources currently being monitored by the Elastic monitor resource.
   * @param resourceGroupName The name of the resource group to which the Elastic resource belongs.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    monitorName: string,
    options?: VMHostListOptionalParams
  ): Promise<VMHostListOperationResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, monitorName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group to which the Elastic resource belongs.
   * @param monitorName Monitor resource name
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    monitorName: string,
    nextLink: string,
    options?: VMHostListNextOptionalParams
  ): Promise<VMHostListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, monitorName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/listVMHost",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.VMHostListResponse
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.monitorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VMHostListResponse
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.monitorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
