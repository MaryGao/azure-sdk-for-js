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
import * as Mappers from "../models/serverAutomaticTuningOperationsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ServerAutomaticTuningOperations. */
export class ServerAutomaticTuningOperations {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ServerAutomaticTuningOperations.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves server automatic tuning options.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerAutomaticTuningGetResponse>
   */
  get(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServerAutomaticTuningGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.ServerAutomaticTuning>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServerAutomaticTuning>): void;
  get(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServerAutomaticTuning>, callback?: msRest.ServiceCallback<Models.ServerAutomaticTuning>): Promise<Models.ServerAutomaticTuningGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ServerAutomaticTuningGetResponse>;
  }

  /**
   * Update automatic tuning options on server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters The requested automatic tuning resource state.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerAutomaticTuningUpdateResponse>
   */
  update(resourceGroupName: string, serverName: string, parameters: Models.ServerAutomaticTuning, options?: msRest.RequestOptionsBase): Promise<Models.ServerAutomaticTuningUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters The requested automatic tuning resource state.
   * @param callback The callback
   */
  update(resourceGroupName: string, serverName: string, parameters: Models.ServerAutomaticTuning, callback: msRest.ServiceCallback<Models.ServerAutomaticTuning>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters The requested automatic tuning resource state.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, serverName: string, parameters: Models.ServerAutomaticTuning, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServerAutomaticTuning>): void;
  update(resourceGroupName: string, serverName: string, parameters: Models.ServerAutomaticTuning, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServerAutomaticTuning>, callback?: msRest.ServiceCallback<Models.ServerAutomaticTuning>): Promise<Models.ServerAutomaticTuningUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ServerAutomaticTuningUpdateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/automaticTuning/current",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
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
      bodyMapper: Mappers.ServerAutomaticTuning
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/automaticTuning/current",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
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
      ...Mappers.ServerAutomaticTuning,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ServerAutomaticTuning
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
