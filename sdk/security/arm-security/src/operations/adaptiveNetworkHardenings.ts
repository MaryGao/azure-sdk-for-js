/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AdaptiveNetworkHardenings } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  AdaptiveNetworkHardening,
  AdaptiveNetworkHardeningsListByExtendedResourceNextOptionalParams,
  AdaptiveNetworkHardeningsListByExtendedResourceOptionalParams,
  AdaptiveNetworkHardeningsListByExtendedResourceResponse,
  AdaptiveNetworkHardeningsGetOptionalParams,
  AdaptiveNetworkHardeningsGetResponse,
  AdaptiveNetworkHardeningEnforceRequest,
  AdaptiveNetworkHardeningsEnforceOptionalParams,
  AdaptiveNetworkHardeningsListByExtendedResourceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AdaptiveNetworkHardenings operations. */
export class AdaptiveNetworkHardeningsImpl
  implements AdaptiveNetworkHardenings {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class AdaptiveNetworkHardenings class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Gets a list of Adaptive Network Hardenings resources in scope of an extended resource.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param resourceNamespace The Namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param options The options parameters.
   */
  public listByExtendedResource(
    resourceGroupName: string,
    resourceNamespace: string,
    resourceType: string,
    resourceName: string,
    options?: AdaptiveNetworkHardeningsListByExtendedResourceOptionalParams
  ): PagedAsyncIterableIterator<AdaptiveNetworkHardening> {
    const iter = this.listByExtendedResourcePagingAll(
      resourceGroupName,
      resourceNamespace,
      resourceType,
      resourceName,
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
        return this.listByExtendedResourcePagingPage(
          resourceGroupName,
          resourceNamespace,
          resourceType,
          resourceName,
          options,
          settings
        );
      }
    };
  }

  private async *listByExtendedResourcePagingPage(
    resourceGroupName: string,
    resourceNamespace: string,
    resourceType: string,
    resourceName: string,
    options?: AdaptiveNetworkHardeningsListByExtendedResourceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AdaptiveNetworkHardening[]> {
    let result: AdaptiveNetworkHardeningsListByExtendedResourceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByExtendedResource(
        resourceGroupName,
        resourceNamespace,
        resourceType,
        resourceName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByExtendedResourceNext(
        resourceGroupName,
        resourceNamespace,
        resourceType,
        resourceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByExtendedResourcePagingAll(
    resourceGroupName: string,
    resourceNamespace: string,
    resourceType: string,
    resourceName: string,
    options?: AdaptiveNetworkHardeningsListByExtendedResourceOptionalParams
  ): AsyncIterableIterator<AdaptiveNetworkHardening> {
    for await (const page of this.listByExtendedResourcePagingPage(
      resourceGroupName,
      resourceNamespace,
      resourceType,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of Adaptive Network Hardenings resources in scope of an extended resource.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param resourceNamespace The Namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param options The options parameters.
   */
  private _listByExtendedResource(
    resourceGroupName: string,
    resourceNamespace: string,
    resourceType: string,
    resourceName: string,
    options?: AdaptiveNetworkHardeningsListByExtendedResourceOptionalParams
  ): Promise<AdaptiveNetworkHardeningsListByExtendedResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceNamespace,
        resourceType,
        resourceName,
        options
      },
      listByExtendedResourceOperationSpec
    );
  }

  /**
   * Gets a single Adaptive Network Hardening resource
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param resourceNamespace The Namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param adaptiveNetworkHardeningResourceName The name of the Adaptive Network Hardening resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceNamespace: string,
    resourceType: string,
    resourceName: string,
    adaptiveNetworkHardeningResourceName: string,
    options?: AdaptiveNetworkHardeningsGetOptionalParams
  ): Promise<AdaptiveNetworkHardeningsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceNamespace,
        resourceType,
        resourceName,
        adaptiveNetworkHardeningResourceName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Enforces the given rules on the NSG(s) listed in the request
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param resourceNamespace The Namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param adaptiveNetworkHardeningResourceName The name of the Adaptive Network Hardening resource.
   * @param body
   * @param options The options parameters.
   */
  async beginEnforce(
    resourceGroupName: string,
    resourceNamespace: string,
    resourceType: string,
    resourceName: string,
    adaptiveNetworkHardeningResourceName: string,
    body: AdaptiveNetworkHardeningEnforceRequest,
    options?: AdaptiveNetworkHardeningsEnforceOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        resourceNamespace,
        resourceType,
        resourceName,
        adaptiveNetworkHardeningResourceName,
        body,
        options
      },
      spec: enforceOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Enforces the given rules on the NSG(s) listed in the request
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param resourceNamespace The Namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param adaptiveNetworkHardeningResourceName The name of the Adaptive Network Hardening resource.
   * @param body
   * @param options The options parameters.
   */
  async beginEnforceAndWait(
    resourceGroupName: string,
    resourceNamespace: string,
    resourceType: string,
    resourceName: string,
    adaptiveNetworkHardeningResourceName: string,
    body: AdaptiveNetworkHardeningEnforceRequest,
    options?: AdaptiveNetworkHardeningsEnforceOptionalParams
  ): Promise<void> {
    const poller = await this.beginEnforce(
      resourceGroupName,
      resourceNamespace,
      resourceType,
      resourceName,
      adaptiveNetworkHardeningResourceName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByExtendedResourceNext
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param resourceNamespace The Namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param nextLink The nextLink from the previous successful call to the ListByExtendedResource method.
   * @param options The options parameters.
   */
  private _listByExtendedResourceNext(
    resourceGroupName: string,
    resourceNamespace: string,
    resourceType: string,
    resourceName: string,
    nextLink: string,
    options?: AdaptiveNetworkHardeningsListByExtendedResourceNextOptionalParams
  ): Promise<AdaptiveNetworkHardeningsListByExtendedResourceNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceNamespace,
        resourceType,
        resourceName,
        nextLink,
        options
      },
      listByExtendedResourceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByExtendedResourceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.Security/adaptiveNetworkHardenings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AdaptiveNetworkHardeningsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion10],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceNamespace,
    Parameters.resourceType,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.Security/adaptiveNetworkHardenings/{adaptiveNetworkHardeningResourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AdaptiveNetworkHardening
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion10],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceNamespace,
    Parameters.resourceType,
    Parameters.resourceName,
    Parameters.adaptiveNetworkHardeningResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const enforceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.Security/adaptiveNetworkHardenings/{adaptiveNetworkHardeningResourceName}/{adaptiveNetworkHardeningEnforceAction}",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.apiVersion10],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceNamespace,
    Parameters.resourceType,
    Parameters.resourceName,
    Parameters.adaptiveNetworkHardeningResourceName,
    Parameters.adaptiveNetworkHardeningEnforceAction
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByExtendedResourceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AdaptiveNetworkHardeningsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.resourceNamespace,
    Parameters.resourceType,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
