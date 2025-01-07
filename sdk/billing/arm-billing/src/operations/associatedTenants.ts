/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { AssociatedTenants } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { BillingManagementClient } from "../billingManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  AssociatedTenant,
  AssociatedTenantsListByBillingAccountNextOptionalParams,
  AssociatedTenantsListByBillingAccountOptionalParams,
  AssociatedTenantsListByBillingAccountResponse,
  AssociatedTenantsDeleteOptionalParams,
  AssociatedTenantsDeleteResponse,
  AssociatedTenantsGetOptionalParams,
  AssociatedTenantsGetResponse,
  AssociatedTenantsCreateOrUpdateOptionalParams,
  AssociatedTenantsCreateOrUpdateResponse,
  AssociatedTenantsListByBillingAccountNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing AssociatedTenants operations. */
export class AssociatedTenantsImpl implements AssociatedTenants {
  private readonly client: BillingManagementClient;

  /**
   * Initialize a new instance of the class AssociatedTenants class.
   * @param client Reference to the service client
   */
  constructor(client: BillingManagementClient) {
    this.client = client;
  }

  /**
   * Lists the associated tenants that can collaborate with the billing account on commerce activities
   * like viewing and downloading invoices, managing payments, making purchases, and managing or
   * provisioning licenses.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  public listByBillingAccount(
    billingAccountName: string,
    options?: AssociatedTenantsListByBillingAccountOptionalParams,
  ): PagedAsyncIterableIterator<AssociatedTenant> {
    const iter = this.listByBillingAccountPagingAll(
      billingAccountName,
      options,
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
        return this.listByBillingAccountPagingPage(
          billingAccountName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByBillingAccountPagingPage(
    billingAccountName: string,
    options?: AssociatedTenantsListByBillingAccountOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<AssociatedTenant[]> {
    let result: AssociatedTenantsListByBillingAccountResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByBillingAccount(billingAccountName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByBillingAccountNext(
        billingAccountName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByBillingAccountPagingAll(
    billingAccountName: string,
    options?: AssociatedTenantsListByBillingAccountOptionalParams,
  ): AsyncIterableIterator<AssociatedTenant> {
    for await (const page of this.listByBillingAccountPagingPage(
      billingAccountName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Deletes an associated tenant for a billing account.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param associatedTenantName The ID that uniquely identifies a tenant.
   * @param options The options parameters.
   */
  async beginDelete(
    billingAccountName: string,
    associatedTenantName: string,
    options?: AssociatedTenantsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AssociatedTenantsDeleteResponse>,
      AssociatedTenantsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AssociatedTenantsDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { billingAccountName, associatedTenantName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      AssociatedTenantsDeleteResponse,
      OperationState<AssociatedTenantsDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an associated tenant for a billing account.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param associatedTenantName The ID that uniquely identifies a tenant.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    billingAccountName: string,
    associatedTenantName: string,
    options?: AssociatedTenantsDeleteOptionalParams,
  ): Promise<AssociatedTenantsDeleteResponse> {
    const poller = await this.beginDelete(
      billingAccountName,
      associatedTenantName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets an associated tenant by ID.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param associatedTenantName The ID that uniquely identifies a tenant.
   * @param options The options parameters.
   */
  get(
    billingAccountName: string,
    associatedTenantName: string,
    options?: AssociatedTenantsGetOptionalParams,
  ): Promise<AssociatedTenantsGetResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, associatedTenantName, options },
      getOperationSpec,
    );
  }

  /**
   * Create or update an associated tenant for the billing account.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param associatedTenantName The ID that uniquely identifies a tenant.
   * @param parameters An associated tenant.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    billingAccountName: string,
    associatedTenantName: string,
    parameters: AssociatedTenant,
    options?: AssociatedTenantsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AssociatedTenantsCreateOrUpdateResponse>,
      AssociatedTenantsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AssociatedTenantsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { billingAccountName, associatedTenantName, parameters, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      AssociatedTenantsCreateOrUpdateResponse,
      OperationState<AssociatedTenantsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update an associated tenant for the billing account.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param associatedTenantName The ID that uniquely identifies a tenant.
   * @param parameters An associated tenant.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    billingAccountName: string,
    associatedTenantName: string,
    parameters: AssociatedTenant,
    options?: AssociatedTenantsCreateOrUpdateOptionalParams,
  ): Promise<AssociatedTenantsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      billingAccountName,
      associatedTenantName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists the associated tenants that can collaborate with the billing account on commerce activities
   * like viewing and downloading invoices, managing payments, making purchases, and managing or
   * provisioning licenses.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  private _listByBillingAccount(
    billingAccountName: string,
    options?: AssociatedTenantsListByBillingAccountOptionalParams,
  ): Promise<AssociatedTenantsListByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, options },
      listByBillingAccountOperationSpec,
    );
  }

  /**
   * ListByBillingAccountNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param nextLink The nextLink from the previous successful call to the ListByBillingAccount method.
   * @param options The options parameters.
   */
  private _listByBillingAccountNext(
    billingAccountName: string,
    nextLink: string,
    options?: AssociatedTenantsListByBillingAccountNextOptionalParams,
  ): Promise<AssociatedTenantsListByBillingAccountNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, nextLink, options },
      listByBillingAccountNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/associatedTenants/{associatedTenantName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.AssociatedTenantsDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.AssociatedTenantsDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.AssociatedTenantsDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.AssociatedTenantsDeleteHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.associatedTenantName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/associatedTenants/{associatedTenantName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AssociatedTenant,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.associatedTenantName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/associatedTenants/{associatedTenantName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AssociatedTenant,
    },
    201: {
      bodyMapper: Mappers.AssociatedTenant,
    },
    202: {
      bodyMapper: Mappers.AssociatedTenant,
    },
    204: {
      bodyMapper: Mappers.AssociatedTenant,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.associatedTenantName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByBillingAccountOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/associatedTenants",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AssociatedTenantListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.includeRevoked,
    Parameters.filter,
    Parameters.orderBy,
    Parameters.top,
    Parameters.skip,
    Parameters.count,
    Parameters.search,
  ],
  urlParameters: [Parameters.$host, Parameters.billingAccountName],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByBillingAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AssociatedTenantListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
