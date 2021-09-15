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
import * as Mappers from "../models/recoverableManagedDatabasesMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a RecoverableManagedDatabases. */
export class RecoverableManagedDatabases {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a RecoverableManagedDatabases.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of recoverable managed databases.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecoverableManagedDatabasesListByInstanceResponse>
   */
  listByInstance(resourceGroupName: string, managedInstanceName: string, options?: msRest.RequestOptionsBase): Promise<Models.RecoverableManagedDatabasesListByInstanceResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param callback The callback
   */
  listByInstance(resourceGroupName: string, managedInstanceName: string, callback: msRest.ServiceCallback<Models.RecoverableManagedDatabaseListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInstance(resourceGroupName: string, managedInstanceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecoverableManagedDatabaseListResult>): void;
  listByInstance(resourceGroupName: string, managedInstanceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecoverableManagedDatabaseListResult>, callback?: msRest.ServiceCallback<Models.RecoverableManagedDatabaseListResult>): Promise<Models.RecoverableManagedDatabasesListByInstanceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        options
      },
      listByInstanceOperationSpec,
      callback) as Promise<Models.RecoverableManagedDatabasesListByInstanceResponse>;
  }

  /**
   * Gets a recoverable managed database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param recoverableDatabaseName
   * @param [options] The optional parameters
   * @returns Promise<Models.RecoverableManagedDatabasesGetResponse>
   */
  get(resourceGroupName: string, managedInstanceName: string, recoverableDatabaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.RecoverableManagedDatabasesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param recoverableDatabaseName
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, recoverableDatabaseName: string, callback: msRest.ServiceCallback<Models.RecoverableManagedDatabase>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param recoverableDatabaseName
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, recoverableDatabaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecoverableManagedDatabase>): void;
  get(resourceGroupName: string, managedInstanceName: string, recoverableDatabaseName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecoverableManagedDatabase>, callback?: msRest.ServiceCallback<Models.RecoverableManagedDatabase>): Promise<Models.RecoverableManagedDatabasesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        recoverableDatabaseName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RecoverableManagedDatabasesGetResponse>;
  }

  /**
   * Gets a list of recoverable managed databases.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecoverableManagedDatabasesListByInstanceNextResponse>
   */
  listByInstanceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RecoverableManagedDatabasesListByInstanceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByInstanceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RecoverableManagedDatabaseListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInstanceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecoverableManagedDatabaseListResult>): void;
  listByInstanceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecoverableManagedDatabaseListResult>, callback?: msRest.ServiceCallback<Models.RecoverableManagedDatabaseListResult>): Promise<Models.RecoverableManagedDatabasesListByInstanceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByInstanceNextOperationSpec,
      callback) as Promise<Models.RecoverableManagedDatabasesListByInstanceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByInstanceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/recoverableDatabases",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
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
      bodyMapper: Mappers.RecoverableManagedDatabaseListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/recoverableDatabases/{recoverableDatabaseName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.recoverableDatabaseName,
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
      bodyMapper: Mappers.RecoverableManagedDatabase
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByInstanceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecoverableManagedDatabaseListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
