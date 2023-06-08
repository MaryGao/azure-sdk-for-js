/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { CustomizedAccelerators } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppPlatformManagementClient } from "../appPlatformManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  CustomizedAcceleratorResource,
  CustomizedAcceleratorsListNextOptionalParams,
  CustomizedAcceleratorsListOptionalParams,
  CustomizedAcceleratorsListResponse,
  CustomizedAcceleratorsGetOptionalParams,
  CustomizedAcceleratorsGetResponse,
  CustomizedAcceleratorsCreateOrUpdateOptionalParams,
  CustomizedAcceleratorsCreateOrUpdateResponse,
  CustomizedAcceleratorsDeleteOptionalParams,
  CustomizedAcceleratorProperties,
  CustomizedAcceleratorsValidateOptionalParams,
  CustomizedAcceleratorsValidateResponse,
  CustomizedAcceleratorsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing CustomizedAccelerators operations. */
export class CustomizedAcceleratorsImpl implements CustomizedAccelerators {
  private readonly client: AppPlatformManagementClient;

  /**
   * Initialize a new instance of the class CustomizedAccelerators class.
   * @param client Reference to the service client
   */
  constructor(client: AppPlatformManagementClient) {
    this.client = client;
  }

  /**
   * Handle requests to list all customized accelerators.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    options?: CustomizedAcceleratorsListOptionalParams
  ): PagedAsyncIterableIterator<CustomizedAcceleratorResource> {
    const iter = this.listPagingAll(
      resourceGroupName,
      serviceName,
      applicationAcceleratorName,
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
        return this.listPagingPage(
          resourceGroupName,
          serviceName,
          applicationAcceleratorName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    options?: CustomizedAcceleratorsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<CustomizedAcceleratorResource[]> {
    let result: CustomizedAcceleratorsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        serviceName,
        applicationAcceleratorName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        serviceName,
        applicationAcceleratorName,
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
    serviceName: string,
    applicationAcceleratorName: string,
    options?: CustomizedAcceleratorsListOptionalParams
  ): AsyncIterableIterator<CustomizedAcceleratorResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      serviceName,
      applicationAcceleratorName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Handle requests to list all customized accelerators.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    options?: CustomizedAcceleratorsListOptionalParams
  ): Promise<CustomizedAcceleratorsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, applicationAcceleratorName, options },
      listOperationSpec
    );
  }

  /**
   * Get the customized accelerator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param customizedAcceleratorName The name of the customized accelerator.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    customizedAcceleratorName: string,
    options?: CustomizedAcceleratorsGetOptionalParams
  ): Promise<CustomizedAcceleratorsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        applicationAcceleratorName,
        customizedAcceleratorName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Create or update the customized accelerator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param customizedAcceleratorName The name of the customized accelerator.
   * @param customizedAcceleratorResource The customized accelerator for the create or update operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    customizedAcceleratorName: string,
    customizedAcceleratorResource: CustomizedAcceleratorResource,
    options?: CustomizedAcceleratorsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<CustomizedAcceleratorsCreateOrUpdateResponse>,
      CustomizedAcceleratorsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CustomizedAcceleratorsCreateOrUpdateResponse> => {
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
        serviceName,
        applicationAcceleratorName,
        customizedAcceleratorName,
        customizedAcceleratorResource,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      CustomizedAcceleratorsCreateOrUpdateResponse,
      OperationState<CustomizedAcceleratorsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update the customized accelerator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param customizedAcceleratorName The name of the customized accelerator.
   * @param customizedAcceleratorResource The customized accelerator for the create or update operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    customizedAcceleratorName: string,
    customizedAcceleratorResource: CustomizedAcceleratorResource,
    options?: CustomizedAcceleratorsCreateOrUpdateOptionalParams
  ): Promise<CustomizedAcceleratorsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serviceName,
      applicationAcceleratorName,
      customizedAcceleratorName,
      customizedAcceleratorResource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete the customized accelerator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param customizedAcceleratorName The name of the customized accelerator.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    customizedAcceleratorName: string,
    options?: CustomizedAcceleratorsDeleteOptionalParams
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
        serviceName,
        applicationAcceleratorName,
        customizedAcceleratorName,
        options
      },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete the customized accelerator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param customizedAcceleratorName The name of the customized accelerator.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    customizedAcceleratorName: string,
    options?: CustomizedAcceleratorsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      serviceName,
      applicationAcceleratorName,
      customizedAcceleratorName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Check the customized accelerator are valid.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param customizedAcceleratorName The name of the customized accelerator.
   * @param properties Customized accelerator properties to be validated
   * @param options The options parameters.
   */
  validate(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    customizedAcceleratorName: string,
    properties: CustomizedAcceleratorProperties,
    options?: CustomizedAcceleratorsValidateOptionalParams
  ): Promise<CustomizedAcceleratorsValidateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        applicationAcceleratorName,
        customizedAcceleratorName,
        properties,
        options
      },
      validateOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    nextLink: string,
    options?: CustomizedAcceleratorsListNextOptionalParams
  ): Promise<CustomizedAcceleratorsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        applicationAcceleratorName,
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/customizedAccelerators",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CustomizedAcceleratorResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.applicationAcceleratorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/customizedAccelerators/{customizedAcceleratorName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CustomizedAcceleratorResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.applicationAcceleratorName,
    Parameters.customizedAcceleratorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/customizedAccelerators/{customizedAcceleratorName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CustomizedAcceleratorResource
    },
    201: {
      bodyMapper: Mappers.CustomizedAcceleratorResource
    },
    202: {
      bodyMapper: Mappers.CustomizedAcceleratorResource
    },
    204: {
      bodyMapper: Mappers.CustomizedAcceleratorResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.customizedAcceleratorResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.applicationAcceleratorName,
    Parameters.customizedAcceleratorName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/customizedAccelerators/{customizedAcceleratorName}",
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
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.applicationAcceleratorName,
    Parameters.customizedAcceleratorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const validateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/customizedAccelerators/{customizedAcceleratorName}/validate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CustomizedAcceleratorValidateResult
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.properties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.applicationAcceleratorName,
    Parameters.customizedAcceleratorName
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
      bodyMapper: Mappers.CustomizedAcceleratorResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.nextLink,
    Parameters.applicationAcceleratorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
