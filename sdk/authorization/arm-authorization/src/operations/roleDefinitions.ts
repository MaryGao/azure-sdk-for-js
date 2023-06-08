/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { RoleDefinitions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClient } from "../authorizationManagementClient";
import {
  RoleDefinition,
  RoleDefinitionsListNextOptionalParams,
  RoleDefinitionsListOptionalParams,
  RoleDefinitionsListResponse,
  RoleDefinitionsDeleteOptionalParams,
  RoleDefinitionsDeleteResponse,
  RoleDefinitionsGetOptionalParams,
  RoleDefinitionsGetResponse,
  RoleDefinitionsCreateOrUpdateOptionalParams,
  RoleDefinitionsCreateOrUpdateResponse,
  RoleDefinitionsGetByIdOptionalParams,
  RoleDefinitionsGetByIdResponse,
  RoleDefinitionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RoleDefinitions operations. */
export class RoleDefinitionsImpl implements RoleDefinitions {
  private readonly client: AuthorizationManagementClient;

  /**
   * Initialize a new instance of the class RoleDefinitions class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClient) {
    this.client = client;
  }

  /**
   * Get all role definitions that are applicable at scope and above.
   * @param scope The scope of the role definition.
   * @param options The options parameters.
   */
  public list(
    scope: string,
    options?: RoleDefinitionsListOptionalParams
  ): PagedAsyncIterableIterator<RoleDefinition> {
    const iter = this.listPagingAll(scope, options);
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
        return this.listPagingPage(scope, options, settings);
      }
    };
  }

  private async *listPagingPage(
    scope: string,
    options?: RoleDefinitionsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<RoleDefinition[]> {
    let result: RoleDefinitionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(scope, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(scope, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    scope: string,
    options?: RoleDefinitionsListOptionalParams
  ): AsyncIterableIterator<RoleDefinition> {
    for await (const page of this.listPagingPage(scope, options)) {
      yield* page;
    }
  }

  /**
   * Deletes a role definition.
   * @param scope The scope of the role definition.
   * @param roleDefinitionId The ID of the role definition to delete.
   * @param options The options parameters.
   */
  delete(
    scope: string,
    roleDefinitionId: string,
    options?: RoleDefinitionsDeleteOptionalParams
  ): Promise<RoleDefinitionsDeleteResponse> {
    return this.client.sendOperationRequest(
      { scope, roleDefinitionId, options },
      deleteOperationSpec
    );
  }

  /**
   * Get role definition by name (GUID).
   * @param scope The scope of the role definition.
   * @param roleDefinitionId The ID of the role definition.
   * @param options The options parameters.
   */
  get(
    scope: string,
    roleDefinitionId: string,
    options?: RoleDefinitionsGetOptionalParams
  ): Promise<RoleDefinitionsGetResponse> {
    return this.client.sendOperationRequest(
      { scope, roleDefinitionId, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a role definition.
   * @param scope The scope of the role definition.
   * @param roleDefinitionId The ID of the role definition.
   * @param roleDefinition The values for the role definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    scope: string,
    roleDefinitionId: string,
    roleDefinition: RoleDefinition,
    options?: RoleDefinitionsCreateOrUpdateOptionalParams
  ): Promise<RoleDefinitionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { scope, roleDefinitionId, roleDefinition, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Get all role definitions that are applicable at scope and above.
   * @param scope The scope of the role definition.
   * @param options The options parameters.
   */
  private _list(
    scope: string,
    options?: RoleDefinitionsListOptionalParams
  ): Promise<RoleDefinitionsListResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      listOperationSpec
    );
  }

  /**
   * Gets a role definition by ID.
   * @param roleId The fully qualified role definition ID. Use the format,
   *               /subscriptions/{guid}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId} for
   *               subscription level role definitions, or
   *               /providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId} for tenant level role
   *               definitions.
   * @param options The options parameters.
   */
  getById(
    roleId: string,
    options?: RoleDefinitionsGetByIdOptionalParams
  ): Promise<RoleDefinitionsGetByIdResponse> {
    return this.client.sendOperationRequest(
      { roleId, options },
      getByIdOperationSpec
    );
  }

  /**
   * ListNext
   * @param scope The scope of the role definition.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    scope: string,
    nextLink: string,
    options?: RoleDefinitionsListNextOptionalParams
  ): Promise<RoleDefinitionsListNextResponse> {
    return this.client.sendOperationRequest(
      { scope, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.RoleDefinition
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.roleDefinitionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.roleDefinitionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId}",
  httpMethod: "PUT",
  responses: {
    201: {
      bodyMapper: Mappers.RoleDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.roleDefinition,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.roleDefinitionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Authorization/roleDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
const getByIdOperationSpec: coreClient.OperationSpec = {
  path: "/{roleId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.roleId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [Parameters.$host, Parameters.nextLink, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
