/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Links } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CustomerInsightsManagementClient } from "../customerInsightsManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  LinkResourceFormat,
  LinksListByHubNextOptionalParams,
  LinksListByHubOptionalParams,
  LinksListByHubResponse,
  LinksCreateOrUpdateOptionalParams,
  LinksCreateOrUpdateResponse,
  LinksGetOptionalParams,
  LinksGetResponse,
  LinksDeleteOptionalParams,
  LinksListByHubNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Links operations. */
export class LinksImpl implements Links {
  private readonly client: CustomerInsightsManagementClient;

  /**
   * Initialize a new instance of the class Links class.
   * @param client Reference to the service client
   */
  constructor(client: CustomerInsightsManagementClient) {
    this.client = client;
  }

  /**
   * Gets all the links in the specified hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param options The options parameters.
   */
  public listByHub(
    resourceGroupName: string,
    hubName: string,
    options?: LinksListByHubOptionalParams
  ): PagedAsyncIterableIterator<LinkResourceFormat> {
    const iter = this.listByHubPagingAll(resourceGroupName, hubName, options);
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
        return this.listByHubPagingPage(
          resourceGroupName,
          hubName,
          options,
          settings
        );
      }
    };
  }

  private async *listByHubPagingPage(
    resourceGroupName: string,
    hubName: string,
    options?: LinksListByHubOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<LinkResourceFormat[]> {
    let result: LinksListByHubResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByHub(resourceGroupName, hubName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByHubNext(
        resourceGroupName,
        hubName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByHubPagingAll(
    resourceGroupName: string,
    hubName: string,
    options?: LinksListByHubOptionalParams
  ): AsyncIterableIterator<LinkResourceFormat> {
    for await (const page of this.listByHubPagingPage(
      resourceGroupName,
      hubName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates a link or updates an existing link in the hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param linkName The name of the link.
   * @param parameters Parameters supplied to the CreateOrUpdate Link operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    hubName: string,
    linkName: string,
    parameters: LinkResourceFormat,
    options?: LinksCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LinksCreateOrUpdateResponse>,
      LinksCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LinksCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, hubName, linkName, parameters, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a link or updates an existing link in the hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param linkName The name of the link.
   * @param parameters Parameters supplied to the CreateOrUpdate Link operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    hubName: string,
    linkName: string,
    parameters: LinkResourceFormat,
    options?: LinksCreateOrUpdateOptionalParams
  ): Promise<LinksCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      hubName,
      linkName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a link in the hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param linkName The name of the link.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hubName: string,
    linkName: string,
    options?: LinksGetOptionalParams
  ): Promise<LinksGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hubName, linkName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes a link in the hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param linkName The name of the link.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    hubName: string,
    linkName: string,
    options?: LinksDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hubName, linkName, options },
      deleteOperationSpec
    );
  }

  /**
   * Gets all the links in the specified hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param options The options parameters.
   */
  private _listByHub(
    resourceGroupName: string,
    hubName: string,
    options?: LinksListByHubOptionalParams
  ): Promise<LinksListByHubResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hubName, options },
      listByHubOperationSpec
    );
  }

  /**
   * ListByHubNext
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param nextLink The nextLink from the previous successful call to the ListByHub method.
   * @param options The options parameters.
   */
  private _listByHubNext(
    resourceGroupName: string,
    hubName: string,
    nextLink: string,
    options?: LinksListByHubNextOptionalParams
  ): Promise<LinksListByHubNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hubName, nextLink, options },
      listByHubNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/links/{linkName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LinkResourceFormat
    },
    201: {
      bodyMapper: Mappers.LinkResourceFormat
    },
    202: {
      bodyMapper: Mappers.LinkResourceFormat
    },
    204: {
      bodyMapper: Mappers.LinkResourceFormat
    }
  },
  requestBody: Parameters.parameters10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1,
    Parameters.linkName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/links/{linkName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkResourceFormat
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1,
    Parameters.linkName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/links/{linkName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 202: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1,
    Parameters.linkName1
  ],
  serializer
};
const listByHubOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/links",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByHubNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
