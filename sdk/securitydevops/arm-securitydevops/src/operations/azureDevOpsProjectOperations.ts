/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AzureDevOpsProjectOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftSecurityDevOps } from "../microsoftSecurityDevOps";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  AzureDevOpsProject,
  AzureDevOpsProjectListNextOptionalParams,
  AzureDevOpsProjectListOptionalParams,
  AzureDevOpsProjectListOperationResponse,
  AzureDevOpsProjectGetOptionalParams,
  AzureDevOpsProjectGetResponse,
  AzureDevOpsProjectCreateOrUpdateOptionalParams,
  AzureDevOpsProjectCreateOrUpdateResponse,
  AzureDevOpsProjectUpdateOptionalParams,
  AzureDevOpsProjectUpdateResponse,
  AzureDevOpsProjectListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AzureDevOpsProjectOperations operations. */
export class AzureDevOpsProjectOperationsImpl
  implements AzureDevOpsProjectOperations {
  private readonly client: MicrosoftSecurityDevOps;

  /**
   * Initialize a new instance of the class AzureDevOpsProjectOperations class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftSecurityDevOps) {
    this.client = client;
  }

  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsOrgName Name of the AzureDevOps Org.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    options?: AzureDevOpsProjectListOptionalParams
  ): PagedAsyncIterableIterator<AzureDevOpsProject> {
    const iter = this.listPagingAll(
      resourceGroupName,
      azureDevOpsConnectorName,
      azureDevOpsOrgName,
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
          azureDevOpsConnectorName,
          azureDevOpsOrgName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    options?: AzureDevOpsProjectListOptionalParams
  ): AsyncIterableIterator<AzureDevOpsProject[]> {
    let result = await this._list(
      resourceGroupName,
      azureDevOpsConnectorName,
      azureDevOpsOrgName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        azureDevOpsConnectorName,
        azureDevOpsOrgName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    options?: AzureDevOpsProjectListOptionalParams
  ): AsyncIterableIterator<AzureDevOpsProject> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      azureDevOpsConnectorName,
      azureDevOpsOrgName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsOrgName Name of the AzureDevOps Org.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    options?: AzureDevOpsProjectListOptionalParams
  ): Promise<AzureDevOpsProjectListOperationResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        azureDevOpsConnectorName,
        azureDevOpsOrgName,
        options
      },
      listOperationSpec
    );
  }

  /**
   * Returns a monitored AzureDevOps Project resource for a given ID.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsOrgName Name of the AzureDevOps Org.
   * @param azureDevOpsProjectName Name of the AzureDevOps Project.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    azureDevOpsProjectName: string,
    options?: AzureDevOpsProjectGetOptionalParams
  ): Promise<AzureDevOpsProjectGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        azureDevOpsConnectorName,
        azureDevOpsOrgName,
        azureDevOpsProjectName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Creates or updates an Azure DevOps Project.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsOrgName Name of the AzureDevOps Org.
   * @param azureDevOpsProjectName Name of the AzureDevOps Project.
   * @param azureDevOpsProject Azure DevOps Org resource payload.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    azureDevOpsProjectName: string,
    azureDevOpsProject: AzureDevOpsProject,
    options?: AzureDevOpsProjectCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AzureDevOpsProjectCreateOrUpdateResponse>,
      AzureDevOpsProjectCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AzureDevOpsProjectCreateOrUpdateResponse> => {
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
        azureDevOpsConnectorName,
        azureDevOpsOrgName,
        azureDevOpsProjectName,
        azureDevOpsProject,
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
   * Creates or updates an Azure DevOps Project.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsOrgName Name of the AzureDevOps Org.
   * @param azureDevOpsProjectName Name of the AzureDevOps Project.
   * @param azureDevOpsProject Azure DevOps Org resource payload.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    azureDevOpsProjectName: string,
    azureDevOpsProject: AzureDevOpsProject,
    options?: AzureDevOpsProjectCreateOrUpdateOptionalParams
  ): Promise<AzureDevOpsProjectCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      azureDevOpsConnectorName,
      azureDevOpsOrgName,
      azureDevOpsProjectName,
      azureDevOpsProject,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update monitored AzureDevOps Project details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsOrgName Name of the AzureDevOps Org.
   * @param azureDevOpsProjectName Name of the AzureDevOps Project.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    azureDevOpsProjectName: string,
    options?: AzureDevOpsProjectUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AzureDevOpsProjectUpdateResponse>,
      AzureDevOpsProjectUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AzureDevOpsProjectUpdateResponse> => {
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
        azureDevOpsConnectorName,
        azureDevOpsOrgName,
        azureDevOpsProjectName,
        options
      },
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
   * Update monitored AzureDevOps Project details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsOrgName Name of the AzureDevOps Org.
   * @param azureDevOpsProjectName Name of the AzureDevOps Project.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    azureDevOpsProjectName: string,
    options?: AzureDevOpsProjectUpdateOptionalParams
  ): Promise<AzureDevOpsProjectUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      azureDevOpsConnectorName,
      azureDevOpsOrgName,
      azureDevOpsProjectName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureDevOpsConnectorName Name of the AzureDevOps Connector.
   * @param azureDevOpsOrgName Name of the AzureDevOps Org.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    azureDevOpsConnectorName: string,
    azureDevOpsOrgName: string,
    nextLink: string,
    options?: AzureDevOpsProjectListNextOptionalParams
  ): Promise<AzureDevOpsProjectListNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        azureDevOpsConnectorName,
        azureDevOpsOrgName,
        nextLink,
        options
      },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityDevOps/azureDevOpsConnectors/{azureDevOpsConnectorName}/orgs/{azureDevOpsOrgName}/projects",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureDevOpsProjectListResponse
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
    Parameters.azureDevOpsConnectorName,
    Parameters.azureDevOpsOrgName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityDevOps/azureDevOpsConnectors/{azureDevOpsConnectorName}/orgs/{azureDevOpsOrgName}/projects/{azureDevOpsProjectName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureDevOpsProject
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
    Parameters.azureDevOpsConnectorName,
    Parameters.azureDevOpsOrgName,
    Parameters.azureDevOpsProjectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityDevOps/azureDevOpsConnectors/{azureDevOpsConnectorName}/orgs/{azureDevOpsOrgName}/projects/{azureDevOpsProjectName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AzureDevOpsProject
    },
    201: {
      bodyMapper: Mappers.AzureDevOpsProject
    },
    202: {
      bodyMapper: Mappers.AzureDevOpsProject
    },
    204: {
      bodyMapper: Mappers.AzureDevOpsProject
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.azureDevOpsProject,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.azureDevOpsConnectorName,
    Parameters.azureDevOpsOrgName,
    Parameters.azureDevOpsProjectName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityDevOps/azureDevOpsConnectors/{azureDevOpsConnectorName}/orgs/{azureDevOpsOrgName}/projects/{azureDevOpsProjectName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AzureDevOpsProject
    },
    201: {
      bodyMapper: Mappers.AzureDevOpsProject
    },
    202: {
      bodyMapper: Mappers.AzureDevOpsProject
    },
    204: {
      bodyMapper: Mappers.AzureDevOpsProject
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.azureDevOpsProject1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.azureDevOpsConnectorName,
    Parameters.azureDevOpsOrgName,
    Parameters.azureDevOpsProjectName
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
      bodyMapper: Mappers.AzureDevOpsProjectListResponse
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
    Parameters.azureDevOpsConnectorName,
    Parameters.nextLink,
    Parameters.azureDevOpsOrgName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
