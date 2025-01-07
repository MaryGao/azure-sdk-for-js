/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Webhook } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AppComplianceAutomationToolForMicrosoft365 } from "../appComplianceAutomationToolForMicrosoft365.js";
import {
  WebhookResource,
  WebhookListNextOptionalParams,
  WebhookListOptionalParams,
  WebhookListResponse,
  WebhookGetOptionalParams,
  WebhookGetResponse,
  WebhookCreateOrUpdateOptionalParams,
  WebhookCreateOrUpdateResponse,
  WebhookResourcePatch,
  WebhookUpdateOptionalParams,
  WebhookUpdateResponse,
  WebhookDeleteOptionalParams,
  WebhookListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Webhook operations. */
export class WebhookImpl implements Webhook {
  private readonly client: AppComplianceAutomationToolForMicrosoft365;

  /**
   * Initialize a new instance of the class Webhook class.
   * @param client Reference to the service client
   */
  constructor(client: AppComplianceAutomationToolForMicrosoft365) {
    this.client = client;
  }

  /**
   * Get the AppComplianceAutomation webhook list.
   * @param reportName Report Name.
   * @param options The options parameters.
   */
  public list(
    reportName: string,
    options?: WebhookListOptionalParams,
  ): PagedAsyncIterableIterator<WebhookResource> {
    const iter = this.listPagingAll(reportName, options);
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
        return this.listPagingPage(reportName, options, settings);
      },
    };
  }

  private async *listPagingPage(
    reportName: string,
    options?: WebhookListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<WebhookResource[]> {
    let result: WebhookListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(reportName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(reportName, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    reportName: string,
    options?: WebhookListOptionalParams,
  ): AsyncIterableIterator<WebhookResource> {
    for await (const page of this.listPagingPage(reportName, options)) {
      yield* page;
    }
  }

  /**
   * Get the AppComplianceAutomation webhook list.
   * @param reportName Report Name.
   * @param options The options parameters.
   */
  private _list(
    reportName: string,
    options?: WebhookListOptionalParams,
  ): Promise<WebhookListResponse> {
    return this.client.sendOperationRequest(
      { reportName, options },
      listOperationSpec,
    );
  }

  /**
   * Get the AppComplianceAutomation webhook and its properties.
   * @param reportName Report Name.
   * @param webhookName Webhook Name.
   * @param options The options parameters.
   */
  get(
    reportName: string,
    webhookName: string,
    options?: WebhookGetOptionalParams,
  ): Promise<WebhookGetResponse> {
    return this.client.sendOperationRequest(
      { reportName, webhookName, options },
      getOperationSpec,
    );
  }

  /**
   * Create a new AppComplianceAutomation webhook or update an exiting AppComplianceAutomation webhook.
   * @param reportName Report Name.
   * @param webhookName Webhook Name.
   * @param properties Parameters for the create or update operation
   * @param options The options parameters.
   */
  createOrUpdate(
    reportName: string,
    webhookName: string,
    properties: WebhookResource,
    options?: WebhookCreateOrUpdateOptionalParams,
  ): Promise<WebhookCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { reportName, webhookName, properties, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Update an exiting AppComplianceAutomation webhook.
   * @param reportName Report Name.
   * @param webhookName Webhook Name.
   * @param properties Parameters for the create or update operation
   * @param options The options parameters.
   */
  update(
    reportName: string,
    webhookName: string,
    properties: WebhookResourcePatch,
    options?: WebhookUpdateOptionalParams,
  ): Promise<WebhookUpdateResponse> {
    return this.client.sendOperationRequest(
      { reportName, webhookName, properties, options },
      updateOperationSpec,
    );
  }

  /**
   * Delete an AppComplianceAutomation webhook.
   * @param reportName Report Name.
   * @param webhookName Webhook Name.
   * @param options The options parameters.
   */
  delete(
    reportName: string,
    webhookName: string,
    options?: WebhookDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { reportName, webhookName, options },
      deleteOperationSpec,
    );
  }

  /**
   * ListNext
   * @param reportName Report Name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    reportName: string,
    nextLink: string,
    options?: WebhookListNextOptionalParams,
  ): Promise<WebhookListNextResponse> {
    return this.client.sendOperationRequest(
      { reportName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WebhookResourceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skipToken,
    Parameters.top,
    Parameters.select,
    Parameters.filter,
    Parameters.orderby,
    Parameters.offerGuid,
    Parameters.reportCreatorTenantId,
  ],
  urlParameters: [Parameters.$host, Parameters.reportName],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WebhookResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.reportName,
    Parameters.webhookName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.WebhookResource,
    },
    201: {
      bodyMapper: Mappers.WebhookResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.properties4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.reportName,
    Parameters.webhookName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.WebhookResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.properties5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.reportName,
    Parameters.webhookName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/webhooks/{webhookName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.reportName,
    Parameters.webhookName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WebhookResourceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [Parameters.$host, Parameters.nextLink, Parameters.reportName],
  headerParameters: [Parameters.accept],
  serializer,
};
