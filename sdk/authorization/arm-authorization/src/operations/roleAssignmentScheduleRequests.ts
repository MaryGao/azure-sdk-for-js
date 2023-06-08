/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { RoleAssignmentScheduleRequests } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClient } from "../authorizationManagementClient";
import {
  RoleAssignmentScheduleRequest,
  RoleAssignmentScheduleRequestsListForScopeNextOptionalParams,
  RoleAssignmentScheduleRequestsListForScopeOptionalParams,
  RoleAssignmentScheduleRequestsListForScopeResponse,
  RoleAssignmentScheduleRequestsCreateOptionalParams,
  RoleAssignmentScheduleRequestsCreateResponse,
  RoleAssignmentScheduleRequestsGetOptionalParams,
  RoleAssignmentScheduleRequestsGetResponse,
  RoleAssignmentScheduleRequestsCancelOptionalParams,
  RoleAssignmentScheduleRequestsValidateOptionalParams,
  RoleAssignmentScheduleRequestsValidateResponse,
  RoleAssignmentScheduleRequestsListForScopeNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RoleAssignmentScheduleRequests operations. */
export class RoleAssignmentScheduleRequestsImpl
  implements RoleAssignmentScheduleRequests {
  private readonly client: AuthorizationManagementClient;

  /**
   * Initialize a new instance of the class RoleAssignmentScheduleRequests class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClient) {
    this.client = client;
  }

  /**
   * Gets role assignment schedule requests for a scope.
   * @param scope The scope of the role assignments schedule requests.
   * @param options The options parameters.
   */
  public listForScope(
    scope: string,
    options?: RoleAssignmentScheduleRequestsListForScopeOptionalParams
  ): PagedAsyncIterableIterator<RoleAssignmentScheduleRequest> {
    const iter = this.listForScopePagingAll(scope, options);
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
        return this.listForScopePagingPage(scope, options, settings);
      }
    };
  }

  private async *listForScopePagingPage(
    scope: string,
    options?: RoleAssignmentScheduleRequestsListForScopeOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<RoleAssignmentScheduleRequest[]> {
    let result: RoleAssignmentScheduleRequestsListForScopeResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listForScope(scope, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listForScopeNext(scope, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listForScopePagingAll(
    scope: string,
    options?: RoleAssignmentScheduleRequestsListForScopeOptionalParams
  ): AsyncIterableIterator<RoleAssignmentScheduleRequest> {
    for await (const page of this.listForScopePagingPage(scope, options)) {
      yield* page;
    }
  }

  /**
   * Creates a role assignment schedule request.
   * @param scope The scope of the role assignment schedule request to create. The scope can be any REST
   *              resource instance. For example, use '/subscriptions/{subscription-id}/' for a subscription,
   *              '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for a resource group, and
   *              '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}'
   *              for a resource.
   * @param roleAssignmentScheduleRequestName A GUID for the role assignment to create. The name must be
   *                                          unique and different for each role assignment.
   * @param parameters Parameters for the role assignment schedule request.
   * @param options The options parameters.
   */
  create(
    scope: string,
    roleAssignmentScheduleRequestName: string,
    parameters: RoleAssignmentScheduleRequest,
    options?: RoleAssignmentScheduleRequestsCreateOptionalParams
  ): Promise<RoleAssignmentScheduleRequestsCreateResponse> {
    return this.client.sendOperationRequest(
      { scope, roleAssignmentScheduleRequestName, parameters, options },
      createOperationSpec
    );
  }

  /**
   * Get the specified role assignment schedule request.
   * @param scope The scope of the role assignment schedule request.
   * @param roleAssignmentScheduleRequestName The name (guid) of the role assignment schedule request to
   *                                          get.
   * @param options The options parameters.
   */
  get(
    scope: string,
    roleAssignmentScheduleRequestName: string,
    options?: RoleAssignmentScheduleRequestsGetOptionalParams
  ): Promise<RoleAssignmentScheduleRequestsGetResponse> {
    return this.client.sendOperationRequest(
      { scope, roleAssignmentScheduleRequestName, options },
      getOperationSpec
    );
  }

  /**
   * Gets role assignment schedule requests for a scope.
   * @param scope The scope of the role assignments schedule requests.
   * @param options The options parameters.
   */
  private _listForScope(
    scope: string,
    options?: RoleAssignmentScheduleRequestsListForScopeOptionalParams
  ): Promise<RoleAssignmentScheduleRequestsListForScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      listForScopeOperationSpec
    );
  }

  /**
   * Cancels a pending role assignment schedule request.
   * @param scope The scope of the role assignment request to cancel.
   * @param roleAssignmentScheduleRequestName The name of the role assignment request to cancel.
   * @param options The options parameters.
   */
  cancel(
    scope: string,
    roleAssignmentScheduleRequestName: string,
    options?: RoleAssignmentScheduleRequestsCancelOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scope, roleAssignmentScheduleRequestName, options },
      cancelOperationSpec
    );
  }

  /**
   * Validates a new role assignment schedule request.
   * @param scope The scope of the role assignment request to validate.
   * @param roleAssignmentScheduleRequestName The name of the role assignment request to validate.
   * @param parameters Parameters for the role assignment schedule request.
   * @param options The options parameters.
   */
  validate(
    scope: string,
    roleAssignmentScheduleRequestName: string,
    parameters: RoleAssignmentScheduleRequest,
    options?: RoleAssignmentScheduleRequestsValidateOptionalParams
  ): Promise<RoleAssignmentScheduleRequestsValidateResponse> {
    return this.client.sendOperationRequest(
      { scope, roleAssignmentScheduleRequestName, parameters, options },
      validateOperationSpec
    );
  }

  /**
   * ListForScopeNext
   * @param scope The scope of the role assignments schedule requests.
   * @param nextLink The nextLink from the previous successful call to the ListForScope method.
   * @param options The options parameters.
   */
  private _listForScopeNext(
    scope: string,
    nextLink: string,
    options?: RoleAssignmentScheduleRequestsListForScopeNextOptionalParams
  ): Promise<RoleAssignmentScheduleRequestsListForScopeNextResponse> {
    return this.client.sendOperationRequest(
      { scope, nextLink, options },
      listForScopeNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/roleAssignmentScheduleRequests/{roleAssignmentScheduleRequestName}",
  httpMethod: "PUT",
  responses: {
    201: {
      bodyMapper: Mappers.RoleAssignmentScheduleRequest
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.roleAssignmentScheduleRequestName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/roleAssignmentScheduleRequests/{roleAssignmentScheduleRequestName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentScheduleRequest
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.roleAssignmentScheduleRequestName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listForScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/roleAssignmentScheduleRequests",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentScheduleRequestListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion2],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
const cancelOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/roleAssignmentScheduleRequests/{roleAssignmentScheduleRequestName}/cancel",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.roleAssignmentScheduleRequestName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const validateOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/roleAssignmentScheduleRequests/{roleAssignmentScheduleRequestName}/validate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentScheduleRequest
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.roleAssignmentScheduleRequestName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listForScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentScheduleRequestListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [Parameters.$host, Parameters.nextLink, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
