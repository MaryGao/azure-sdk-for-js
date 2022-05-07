/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ServerKeys } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PostgreSQLManagementClient } from "../postgreSQLManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ServerKey,
  ServerKeysListNextOptionalParams,
  ServerKeysListOptionalParams,
  ServerKeysListResponse,
  ServerKeysGetOptionalParams,
  ServerKeysGetResponse,
  ServerKeysCreateOrUpdateOptionalParams,
  ServerKeysCreateOrUpdateResponse,
  ServerKeysDeleteOptionalParams,
  ServerKeysListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ServerKeys operations. */
export class ServerKeysImpl implements ServerKeys {
  private readonly client: PostgreSQLManagementClient;

  /**
   * Initialize a new instance of the class ServerKeys class.
   * @param client Reference to the service client
   */
  constructor(client: PostgreSQLManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of  Server keys.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    serverName: string,
    options?: ServerKeysListOptionalParams
  ): PagedAsyncIterableIterator<ServerKey> {
    const iter = this.listPagingAll(resourceGroupName, serverName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, serverName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    serverName: string,
    options?: ServerKeysListOptionalParams
  ): AsyncIterableIterator<ServerKey[]> {
    let result = await this._list(resourceGroupName, serverName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        serverName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    serverName: string,
    options?: ServerKeysListOptionalParams
  ): AsyncIterableIterator<ServerKey> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      serverName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of  Server keys.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    serverName: string,
    options?: ServerKeysListOptionalParams
  ): Promise<ServerKeysListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options },
      listOperationSpec
    );
  }

  /**
   * Gets a PostgreSQL Server key.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param keyName The name of the PostgreSQL Server key to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    keyName: string,
    options?: ServerKeysGetOptionalParams
  ): Promise<ServerKeysGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, keyName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a PostgreSQL Server key.
   * @param serverName The name of the server.
   * @param keyName The name of the PostgreSQL Server key to be operated on (updated or created).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters The requested PostgreSQL Server key resource state.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    serverName: string,
    keyName: string,
    resourceGroupName: string,
    parameters: ServerKey,
    options?: ServerKeysCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ServerKeysCreateOrUpdateResponse>,
      ServerKeysCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ServerKeysCreateOrUpdateResponse> => {
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
      { serverName, keyName, resourceGroupName, parameters, options },
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
   * Creates or updates a PostgreSQL Server key.
   * @param serverName The name of the server.
   * @param keyName The name of the PostgreSQL Server key to be operated on (updated or created).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters The requested PostgreSQL Server key resource state.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    serverName: string,
    keyName: string,
    resourceGroupName: string,
    parameters: ServerKey,
    options?: ServerKeysCreateOrUpdateOptionalParams
  ): Promise<ServerKeysCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      serverName,
      keyName,
      resourceGroupName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the PostgreSQL Server key with the given name.
   * @param serverName The name of the server.
   * @param keyName The name of the PostgreSQL Server key to be deleted.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  async beginDelete(
    serverName: string,
    keyName: string,
    resourceGroupName: string,
    options?: ServerKeysDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      { serverName, keyName, resourceGroupName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the PostgreSQL Server key with the given name.
   * @param serverName The name of the server.
   * @param keyName The name of the PostgreSQL Server key to be deleted.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    serverName: string,
    keyName: string,
    resourceGroupName: string,
    options?: ServerKeysDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      serverName,
      keyName,
      resourceGroupName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    serverName: string,
    nextLink: string,
    options?: ServerKeysListNextOptionalParams
  ): Promise<ServerKeysListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/keys",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerKeyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/keys/{keyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerKey
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.keyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/keys/{keyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServerKey
    },
    201: {
      bodyMapper: Mappers.ServerKey
    },
    202: {
      bodyMapper: Mappers.ServerKey
    },
    204: {
      bodyMapper: Mappers.ServerKey
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters9,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.keyName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/keys/{keyName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.keyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerKeyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
