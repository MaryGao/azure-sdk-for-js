/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/databaseSchemasMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a DatabaseSchemas. */
export class DatabaseSchemas {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a DatabaseSchemas.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * List database schemas
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<Models.DatabaseSchemasListByDatabaseResponse>
   */
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: Models.DatabaseSchemasListByDatabaseOptionalParams): Promise<Models.DatabaseSchemasListByDatabaseResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param callback The callback
   */
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, callback: msRest.ServiceCallback<Models.DatabaseSchemaListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options: Models.DatabaseSchemasListByDatabaseOptionalParams, callback: msRest.ServiceCallback<Models.DatabaseSchemaListResult>): void;
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: Models.DatabaseSchemasListByDatabaseOptionalParams | msRest.ServiceCallback<Models.DatabaseSchemaListResult>, callback?: msRest.ServiceCallback<Models.DatabaseSchemaListResult>): Promise<Models.DatabaseSchemasListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        options
      },
      listByDatabaseOperationSpec,
      callback) as Promise<Models.DatabaseSchemasListByDatabaseResponse>;
  }

  /**
   * Get database schema
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param [options] The optional parameters
   * @returns Promise<Models.DatabaseSchemasGetResponse>
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, schemaName: string, options?: msRest.RequestOptionsBase): Promise<Models.DatabaseSchemasGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, schemaName: string, callback: msRest.ServiceCallback<Models.DatabaseSchema>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, schemaName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DatabaseSchema>): void;
  get(resourceGroupName: string, serverName: string, databaseName: string, schemaName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DatabaseSchema>, callback?: msRest.ServiceCallback<Models.DatabaseSchema>): Promise<Models.DatabaseSchemasGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        schemaName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DatabaseSchemasGetResponse>;
  }

  /**
   * List database schemas
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.DatabaseSchemasListByDatabaseNextResponse>
   */
  listByDatabaseNext(nextPageLink: string, options?: Models.DatabaseSchemasListByDatabaseNextOptionalParams): Promise<Models.DatabaseSchemasListByDatabaseNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByDatabaseNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DatabaseSchemaListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDatabaseNext(nextPageLink: string, options: Models.DatabaseSchemasListByDatabaseNextOptionalParams, callback: msRest.ServiceCallback<Models.DatabaseSchemaListResult>): void;
  listByDatabaseNext(nextPageLink: string, options?: Models.DatabaseSchemasListByDatabaseNextOptionalParams | msRest.ServiceCallback<Models.DatabaseSchemaListResult>, callback?: msRest.ServiceCallback<Models.DatabaseSchemaListResult>): Promise<Models.DatabaseSchemasListByDatabaseNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByDatabaseNextOperationSpec,
      callback) as Promise<Models.DatabaseSchemasListByDatabaseNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByDatabaseOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/schemas",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter1,
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseSchemaListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/schemas/{schemaName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.schemaName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseSchema
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByDatabaseNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.filter1,
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseSchemaListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
