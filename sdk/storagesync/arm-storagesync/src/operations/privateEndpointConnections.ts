/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PrivateEndpointConnections } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftStorageSync } from "../microsoftStorageSync";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  PrivateEndpointConnection,
  PrivateEndpointConnectionsListByStorageSyncServiceOptionalParams,
  PrivateEndpointConnectionsGetOptionalParams,
  PrivateEndpointConnectionsGetResponse,
  PrivateEndpointConnectionsCreateOptionalParams,
  PrivateEndpointConnectionsCreateResponse,
  PrivateEndpointConnectionsDeleteOptionalParams,
  PrivateEndpointConnectionsListByStorageSyncServiceResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateEndpointConnections operations. */
export class PrivateEndpointConnectionsImpl
  implements PrivateEndpointConnections {
  private readonly client: MicrosoftStorageSync;

  /**
   * Initialize a new instance of the class PrivateEndpointConnections class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftStorageSync) {
    this.client = client;
  }

  /**
   * Get a PrivateEndpointConnection List.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param options The options parameters.
   */
  public listByStorageSyncService(
    resourceGroupName: string,
    storageSyncServiceName: string,
    options?: PrivateEndpointConnectionsListByStorageSyncServiceOptionalParams
  ): PagedAsyncIterableIterator<PrivateEndpointConnection> {
    const iter = this.listByStorageSyncServicePagingAll(
      resourceGroupName,
      storageSyncServiceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByStorageSyncServicePagingPage(
          resourceGroupName,
          storageSyncServiceName,
          options
        );
      }
    };
  }

  private async *listByStorageSyncServicePagingPage(
    resourceGroupName: string,
    storageSyncServiceName: string,
    options?: PrivateEndpointConnectionsListByStorageSyncServiceOptionalParams
  ): AsyncIterableIterator<PrivateEndpointConnection[]> {
    let result = await this._listByStorageSyncService(
      resourceGroupName,
      storageSyncServiceName,
      options
    );
    yield result.value || [];
  }

  private async *listByStorageSyncServicePagingAll(
    resourceGroupName: string,
    storageSyncServiceName: string,
    options?: PrivateEndpointConnectionsListByStorageSyncServiceOptionalParams
  ): AsyncIterableIterator<PrivateEndpointConnection> {
    for await (const page of this.listByStorageSyncServicePagingPage(
      resourceGroupName,
      storageSyncServiceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the specified private endpoint connection associated with the storage sync service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName The name of the storage sync service name within the specified
   *                               resource group.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Azure resource
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    storageSyncServiceName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsGetOptionalParams
  ): Promise<PrivateEndpointConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        storageSyncServiceName,
        privateEndpointConnectionName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Update the state of specified private endpoint connection associated with the storage sync service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName The name of the storage sync service name within the specified
   *                               resource group.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Azure resource
   * @param properties The private endpoint connection properties.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    storageSyncServiceName: string,
    privateEndpointConnectionName: string,
    properties: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PrivateEndpointConnectionsCreateResponse>,
      PrivateEndpointConnectionsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PrivateEndpointConnectionsCreateResponse> => {
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
      {
        resourceGroupName,
        storageSyncServiceName,
        privateEndpointConnectionName,
        properties,
        options
      },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update the state of specified private endpoint connection associated with the storage sync service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName The name of the storage sync service name within the specified
   *                               resource group.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Azure resource
   * @param properties The private endpoint connection properties.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    storageSyncServiceName: string,
    privateEndpointConnectionName: string,
    properties: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsCreateOptionalParams
  ): Promise<PrivateEndpointConnectionsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      storageSyncServiceName,
      privateEndpointConnectionName,
      properties,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the specified private endpoint connection associated with the storage sync service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName The name of the storage sync service name within the specified
   *                               resource group.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Azure resource
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    storageSyncServiceName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams
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
      {
        resourceGroupName,
        storageSyncServiceName,
        privateEndpointConnectionName,
        options
      },
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
   * Deletes the specified private endpoint connection associated with the storage sync service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName The name of the storage sync service name within the specified
   *                               resource group.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Azure resource
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    storageSyncServiceName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      storageSyncServiceName,
      privateEndpointConnectionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get a PrivateEndpointConnection List.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param options The options parameters.
   */
  private _listByStorageSyncService(
    resourceGroupName: string,
    storageSyncServiceName: string,
    options?: PrivateEndpointConnectionsListByStorageSyncServiceOptionalParams
  ): Promise<PrivateEndpointConnectionsListByStorageSyncServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, storageSyncServiceName, options },
      listByStorageSyncServiceOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    201: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    202: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    204: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  requestBody: Parameters.properties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByStorageSyncServiceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/privateEndpointConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionListResult,
      headersMapper:
        Mappers.PrivateEndpointConnectionsListByStorageSyncServiceHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
