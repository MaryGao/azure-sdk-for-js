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
import * as Mappers from "../models/managedDatabaseRecommendedSensitivityLabelsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ManagedDatabaseRecommendedSensitivityLabels. */
export class ManagedDatabaseRecommendedSensitivityLabels {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ManagedDatabaseRecommendedSensitivityLabels.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Update recommended sensitivity labels states of a given database using an operations batch.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param parameters
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  update(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: Models.RecommendedSensitivityLabelUpdateList, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: Models.RecommendedSensitivityLabelUpdateList, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param parameters
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: Models.RecommendedSensitivityLabelUpdateList, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  update(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: Models.RecommendedSensitivityLabelUpdateList, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
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
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/recommendedSensitivityLabels",
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
      ...Mappers.RecommendedSensitivityLabelUpdateList,
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
