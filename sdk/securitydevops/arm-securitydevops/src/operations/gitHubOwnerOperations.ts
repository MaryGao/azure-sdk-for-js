/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { GitHubOwnerOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftSecurityDevOps } from "../microsoftSecurityDevOps";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  GitHubOwner,
  GitHubOwnerListNextOptionalParams,
  GitHubOwnerListOptionalParams,
  GitHubOwnerListOperationResponse,
  GitHubOwnerGetOptionalParams,
  GitHubOwnerGetResponse,
  GitHubOwnerCreateOrUpdateOptionalParams,
  GitHubOwnerCreateOrUpdateResponse,
  GitHubOwnerUpdateOptionalParams,
  GitHubOwnerUpdateResponse,
  GitHubOwnerListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing GitHubOwnerOperations operations. */
export class GitHubOwnerOperationsImpl implements GitHubOwnerOperations {
  private readonly client: MicrosoftSecurityDevOps;

  /**
   * Initialize a new instance of the class GitHubOwnerOperations class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftSecurityDevOps) {
    this.client = client;
  }

  /**
   * Returns a list of monitored GitHub owners.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    gitHubConnectorName: string,
    options?: GitHubOwnerListOptionalParams
  ): PagedAsyncIterableIterator<GitHubOwner> {
    const iter = this.listPagingAll(
      resourceGroupName,
      gitHubConnectorName,
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
        return this.listPagingPage(
          resourceGroupName,
          gitHubConnectorName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    gitHubConnectorName: string,
    options?: GitHubOwnerListOptionalParams
  ): AsyncIterableIterator<GitHubOwner[]> {
    let result = await this._list(
      resourceGroupName,
      gitHubConnectorName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        gitHubConnectorName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    gitHubConnectorName: string,
    options?: GitHubOwnerListOptionalParams
  ): AsyncIterableIterator<GitHubOwner> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      gitHubConnectorName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns a list of monitored GitHub owners.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    gitHubConnectorName: string,
    options?: GitHubOwnerListOptionalParams
  ): Promise<GitHubOwnerListOperationResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, gitHubConnectorName, options },
      listOperationSpec
    );
  }

  /**
   * Returns a monitored GitHub repository.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param gitHubOwnerName Name of the GitHub Owner.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    gitHubConnectorName: string,
    gitHubOwnerName: string,
    options?: GitHubOwnerGetOptionalParams
  ): Promise<GitHubOwnerGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, gitHubConnectorName, gitHubOwnerName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update a monitored GitHub owner.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param gitHubOwnerName Name of the GitHub Owner.
   * @param gitHubOwner Github owner.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    gitHubConnectorName: string,
    gitHubOwnerName: string,
    gitHubOwner: GitHubOwner,
    options?: GitHubOwnerCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GitHubOwnerCreateOrUpdateResponse>,
      GitHubOwnerCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<GitHubOwnerCreateOrUpdateResponse> => {
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
        gitHubConnectorName,
        gitHubOwnerName,
        gitHubOwner,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a monitored GitHub owner.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param gitHubOwnerName Name of the GitHub Owner.
   * @param gitHubOwner Github owner.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    gitHubConnectorName: string,
    gitHubOwnerName: string,
    gitHubOwner: GitHubOwner,
    options?: GitHubOwnerCreateOrUpdateOptionalParams
  ): Promise<GitHubOwnerCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      gitHubConnectorName,
      gitHubOwnerName,
      gitHubOwner,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Patch a monitored GitHub repository.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param gitHubOwnerName Name of the GitHub Owner.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    gitHubConnectorName: string,
    gitHubOwnerName: string,
    options?: GitHubOwnerUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GitHubOwnerUpdateResponse>,
      GitHubOwnerUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<GitHubOwnerUpdateResponse> => {
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
      { resourceGroupName, gitHubConnectorName, gitHubOwnerName, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Patch a monitored GitHub repository.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param gitHubOwnerName Name of the GitHub Owner.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    gitHubConnectorName: string,
    gitHubOwnerName: string,
    options?: GitHubOwnerUpdateOptionalParams
  ): Promise<GitHubOwnerUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      gitHubConnectorName,
      gitHubOwnerName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    gitHubConnectorName: string,
    nextLink: string,
    options?: GitHubOwnerListNextOptionalParams
  ): Promise<GitHubOwnerListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, gitHubConnectorName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityDevOps/gitHubConnectors/{gitHubConnectorName}/owners",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GitHubOwnerListResponse
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
    Parameters.gitHubConnectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityDevOps/gitHubConnectors/{gitHubConnectorName}/owners/{gitHubOwnerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GitHubOwner
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
    Parameters.gitHubConnectorName,
    Parameters.gitHubOwnerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityDevOps/gitHubConnectors/{gitHubConnectorName}/owners/{gitHubOwnerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GitHubOwner
    },
    201: {
      bodyMapper: Mappers.GitHubOwner
    },
    202: {
      bodyMapper: Mappers.GitHubOwner
    },
    204: {
      bodyMapper: Mappers.GitHubOwner
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.gitHubOwner,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.gitHubConnectorName,
    Parameters.gitHubOwnerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityDevOps/gitHubConnectors/{gitHubConnectorName}/owners/{gitHubOwnerName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.GitHubOwner
    },
    201: {
      bodyMapper: Mappers.GitHubOwner
    },
    202: {
      bodyMapper: Mappers.GitHubOwner
    },
    204: {
      bodyMapper: Mappers.GitHubOwner
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.gitHubOwner1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.gitHubConnectorName,
    Parameters.gitHubOwnerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GitHubOwnerListResponse
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
    Parameters.nextLink,
    Parameters.gitHubConnectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
