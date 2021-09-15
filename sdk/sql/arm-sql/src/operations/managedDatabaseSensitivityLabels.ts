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
import * as Mappers from "../models/managedDatabaseSensitivityLabelsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ManagedDatabaseSensitivityLabels. */
export class ManagedDatabaseSensitivityLabels {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ManagedDatabaseSensitivityLabels.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the sensitivity label of a given column
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param sensitivityLabelSource The source of the sensitivity label. Possible values include:
   * 'current', 'recommended'
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedDatabaseSensitivityLabelsGetResponse>
   */
  get(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, sensitivityLabelSource: Models.SensitivityLabelSource, options?: msRest.RequestOptionsBase): Promise<Models.ManagedDatabaseSensitivityLabelsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param sensitivityLabelSource The source of the sensitivity label. Possible values include:
   * 'current', 'recommended'
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, sensitivityLabelSource: Models.SensitivityLabelSource, callback: msRest.ServiceCallback<Models.SensitivityLabel>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param sensitivityLabelSource The source of the sensitivity label. Possible values include:
   * 'current', 'recommended'
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, sensitivityLabelSource: Models.SensitivityLabelSource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SensitivityLabel>): void;
  get(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, sensitivityLabelSource: Models.SensitivityLabelSource, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SensitivityLabel>, callback?: msRest.ServiceCallback<Models.SensitivityLabel>): Promise<Models.ManagedDatabaseSensitivityLabelsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        schemaName,
        tableName,
        columnName,
        sensitivityLabelSource,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ManagedDatabaseSensitivityLabelsGetResponse>;
  }

  /**
   * Creates or updates the sensitivity label of a given column
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param parameters The column sensitivity label resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedDatabaseSensitivityLabelsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, parameters: Models.SensitivityLabel, options?: msRest.RequestOptionsBase): Promise<Models.ManagedDatabaseSensitivityLabelsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param parameters The column sensitivity label resource.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, parameters: Models.SensitivityLabel, callback: msRest.ServiceCallback<Models.SensitivityLabel>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param parameters The column sensitivity label resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, parameters: Models.SensitivityLabel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SensitivityLabel>): void;
  createOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, parameters: Models.SensitivityLabel, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SensitivityLabel>, callback?: msRest.ServiceCallback<Models.SensitivityLabel>): Promise<Models.ManagedDatabaseSensitivityLabelsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        schemaName,
        tableName,
        columnName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ManagedDatabaseSensitivityLabelsCreateOrUpdateResponse>;
  }

  /**
   * Deletes the sensitivity label of a given column
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        schemaName,
        tableName,
        columnName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Disables sensitivity recommendations on a given column
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  disableRecommendation(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param callback The callback
   */
  disableRecommendation(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param options The optional parameters
   * @param callback The callback
   */
  disableRecommendation(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  disableRecommendation(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        schemaName,
        tableName,
        columnName,
        options
      },
      disableRecommendationOperationSpec,
      callback);
  }

  /**
   * Enables sensitivity recommendations on a given column (recommendations are enabled by default on
   * all columns)
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  enableRecommendation(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param callback The callback
   */
  enableRecommendation(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param options The optional parameters
   * @param callback The callback
   */
  enableRecommendation(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  enableRecommendation(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        schemaName,
        tableName,
        columnName,
        options
      },
      enableRecommendationOperationSpec,
      callback);
  }

  /**
   * Gets the sensitivity labels of a given database
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedDatabaseSensitivityLabelsListCurrentByDatabaseResponse>
   */
  listCurrentByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: Models.ManagedDatabaseSensitivityLabelsListCurrentByDatabaseOptionalParams): Promise<Models.ManagedDatabaseSensitivityLabelsListCurrentByDatabaseResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param callback The callback
   */
  listCurrentByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, callback: msRest.ServiceCallback<Models.SensitivityLabelListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The optional parameters
   * @param callback The callback
   */
  listCurrentByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options: Models.ManagedDatabaseSensitivityLabelsListCurrentByDatabaseOptionalParams, callback: msRest.ServiceCallback<Models.SensitivityLabelListResult>): void;
  listCurrentByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: Models.ManagedDatabaseSensitivityLabelsListCurrentByDatabaseOptionalParams | msRest.ServiceCallback<Models.SensitivityLabelListResult>, callback?: msRest.ServiceCallback<Models.SensitivityLabelListResult>): Promise<Models.ManagedDatabaseSensitivityLabelsListCurrentByDatabaseResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        options
      },
      listCurrentByDatabaseOperationSpec,
      callback) as Promise<Models.ManagedDatabaseSensitivityLabelsListCurrentByDatabaseResponse>;
  }

  /**
   * Update sensitivity labels of a given database using an operations batch.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param parameters
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  update(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: Models.SensitivityLabelUpdateList, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: Models.SensitivityLabelUpdateList, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param parameters
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: Models.SensitivityLabelUpdateList, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  update(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: Models.SensitivityLabelUpdateList, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        parameters,
        options
      },
      updateOperationSpec,
      callback);
  }

  /**
   * Gets the sensitivity labels of a given database
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseResponse>
   */
  listRecommendedByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: Models.ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseOptionalParams): Promise<Models.ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param callback The callback
   */
  listRecommendedByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, callback: msRest.ServiceCallback<Models.SensitivityLabelListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The optional parameters
   * @param callback The callback
   */
  listRecommendedByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options: Models.ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseOptionalParams, callback: msRest.ServiceCallback<Models.SensitivityLabelListResult>): void;
  listRecommendedByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: Models.ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseOptionalParams | msRest.ServiceCallback<Models.SensitivityLabelListResult>, callback?: msRest.ServiceCallback<Models.SensitivityLabelListResult>): Promise<Models.ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        options
      },
      listRecommendedByDatabaseOperationSpec,
      callback) as Promise<Models.ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseResponse>;
  }

  /**
   * Gets the sensitivity labels of a given database
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedDatabaseSensitivityLabelsListCurrentByDatabaseNextResponse>
   */
  listCurrentByDatabaseNext(nextPageLink: string, options?: Models.ManagedDatabaseSensitivityLabelsListCurrentByDatabaseNextOptionalParams): Promise<Models.ManagedDatabaseSensitivityLabelsListCurrentByDatabaseNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listCurrentByDatabaseNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SensitivityLabelListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listCurrentByDatabaseNext(nextPageLink: string, options: Models.ManagedDatabaseSensitivityLabelsListCurrentByDatabaseNextOptionalParams, callback: msRest.ServiceCallback<Models.SensitivityLabelListResult>): void;
  listCurrentByDatabaseNext(nextPageLink: string, options?: Models.ManagedDatabaseSensitivityLabelsListCurrentByDatabaseNextOptionalParams | msRest.ServiceCallback<Models.SensitivityLabelListResult>, callback?: msRest.ServiceCallback<Models.SensitivityLabelListResult>): Promise<Models.ManagedDatabaseSensitivityLabelsListCurrentByDatabaseNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listCurrentByDatabaseNextOperationSpec,
      callback) as Promise<Models.ManagedDatabaseSensitivityLabelsListCurrentByDatabaseNextResponse>;
  }

  /**
   * Gets the sensitivity labels of a given database
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseNextResponse>
   */
  listRecommendedByDatabaseNext(nextPageLink: string, options?: Models.ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseNextOptionalParams): Promise<Models.ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listRecommendedByDatabaseNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SensitivityLabelListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listRecommendedByDatabaseNext(nextPageLink: string, options: Models.ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseNextOptionalParams, callback: msRest.ServiceCallback<Models.SensitivityLabelListResult>): void;
  listRecommendedByDatabaseNext(nextPageLink: string, options?: Models.ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseNextOptionalParams | msRest.ServiceCallback<Models.SensitivityLabelListResult>, callback?: msRest.ServiceCallback<Models.SensitivityLabelListResult>): Promise<Models.ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listRecommendedByDatabaseNextOperationSpec,
      callback) as Promise<Models.ManagedDatabaseSensitivityLabelsListRecommendedByDatabaseNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.databaseName,
    Parameters.schemaName,
    Parameters.tableName,
    Parameters.columnName,
    Parameters.sensitivityLabelSource0,
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
      bodyMapper: Mappers.SensitivityLabel
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.databaseName,
    Parameters.schemaName,
    Parameters.tableName,
    Parameters.columnName,
    Parameters.sensitivityLabelSource1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.SensitivityLabel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SensitivityLabel
    },
    201: {
      bodyMapper: Mappers.SensitivityLabel
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.databaseName,
    Parameters.schemaName,
    Parameters.tableName,
    Parameters.columnName,
    Parameters.sensitivityLabelSource1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const disableRecommendationOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}/disable",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.databaseName,
    Parameters.schemaName,
    Parameters.tableName,
    Parameters.columnName,
    Parameters.sensitivityLabelSource2,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const enableRecommendationOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}/enable",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.databaseName,
    Parameters.schemaName,
    Parameters.tableName,
    Parameters.columnName,
    Parameters.sensitivityLabelSource2,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listCurrentByDatabaseOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/currentSensitivityLabels",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.databaseName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.skipToken,
    Parameters.count,
    Parameters.filter1,
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SensitivityLabelListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/currentSensitivityLabels",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.databaseName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.SensitivityLabelUpdateList,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listRecommendedByDatabaseOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/recommendedSensitivityLabels",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.databaseName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.skipToken,
    Parameters.includeDisabledRecommendations,
    Parameters.filter1,
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SensitivityLabelListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listCurrentByDatabaseNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.skipToken,
    Parameters.count,
    Parameters.filter1,
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SensitivityLabelListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listRecommendedByDatabaseNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.skipToken,
    Parameters.includeDisabledRecommendations,
    Parameters.filter1,
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SensitivityLabelListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
