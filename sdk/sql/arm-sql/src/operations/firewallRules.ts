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
import * as Mappers from "../models/firewallRulesMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a FirewallRules. */
export class FirewallRules {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a FirewallRules.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a firewall rule.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the firewall rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.FirewallRulesGetResponse>
   */
  get(resourceGroupName: string, serverName: string, firewallRuleName: string, options?: msRest.RequestOptionsBase): Promise<Models.FirewallRulesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the firewall rule.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, firewallRuleName: string, callback: msRest.ServiceCallback<Models.FirewallRule>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the firewall rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, firewallRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FirewallRule>): void;
  get(resourceGroupName: string, serverName: string, firewallRuleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FirewallRule>, callback?: msRest.ServiceCallback<Models.FirewallRule>): Promise<Models.FirewallRulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        firewallRuleName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.FirewallRulesGetResponse>;
  }

  /**
   * Creates or updates a firewall rule.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the firewall rule.
   * @param parameters The required parameters for creating or updating a firewall rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.FirewallRulesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, firewallRuleName: string, parameters: Models.FirewallRule, options?: msRest.RequestOptionsBase): Promise<Models.FirewallRulesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the firewall rule.
   * @param parameters The required parameters for creating or updating a firewall rule.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serverName: string, firewallRuleName: string, parameters: Models.FirewallRule, callback: msRest.ServiceCallback<Models.FirewallRule>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the firewall rule.
   * @param parameters The required parameters for creating or updating a firewall rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serverName: string, firewallRuleName: string, parameters: Models.FirewallRule, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FirewallRule>): void;
  createOrUpdate(resourceGroupName: string, serverName: string, firewallRuleName: string, parameters: Models.FirewallRule, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FirewallRule>, callback?: msRest.ServiceCallback<Models.FirewallRule>): Promise<Models.FirewallRulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        firewallRuleName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.FirewallRulesCreateOrUpdateResponse>;
  }

  /**
   * Deletes a firewall rule.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the firewall rule.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serverName: string, firewallRuleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the firewall rule.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serverName: string, firewallRuleName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the firewall rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serverName: string, firewallRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serverName: string, firewallRuleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        firewallRuleName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets a list of firewall rules.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.FirewallRulesListByServerResponse>
   */
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.FirewallRulesListByServerResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.FirewallRuleListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FirewallRuleListResult>): void;
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FirewallRuleListResult>, callback?: msRest.ServiceCallback<Models.FirewallRuleListResult>): Promise<Models.FirewallRulesListByServerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      listByServerOperationSpec,
      callback) as Promise<Models.FirewallRulesListByServerResponse>;
  }

  /**
   * Replaces all firewall rules on the server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters
   * @param [options] The optional parameters
   * @returns Promise<Models.FirewallRulesReplaceResponse>
   */
  replace(resourceGroupName: string, serverName: string, parameters: Models.FirewallRuleList, options?: msRest.RequestOptionsBase): Promise<Models.FirewallRulesReplaceResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters
   * @param callback The callback
   */
  replace(resourceGroupName: string, serverName: string, parameters: Models.FirewallRuleList, callback: msRest.ServiceCallback<Models.FirewallRule>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters
   * @param options The optional parameters
   * @param callback The callback
   */
  replace(resourceGroupName: string, serverName: string, parameters: Models.FirewallRuleList, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FirewallRule>): void;
  replace(resourceGroupName: string, serverName: string, parameters: Models.FirewallRuleList, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FirewallRule>, callback?: msRest.ServiceCallback<Models.FirewallRule>): Promise<Models.FirewallRulesReplaceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        parameters,
        options
      },
      replaceOperationSpec,
      callback) as Promise<Models.FirewallRulesReplaceResponse>;
  }

  /**
   * Gets a list of firewall rules.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.FirewallRulesListByServerNextResponse>
   */
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.FirewallRulesListByServerNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.FirewallRuleListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FirewallRuleListResult>): void;
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FirewallRuleListResult>, callback?: msRest.ServiceCallback<Models.FirewallRuleListResult>): Promise<Models.FirewallRulesListByServerNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServerNextOperationSpec,
      callback) as Promise<Models.FirewallRulesListByServerNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/firewallRules/{firewallRuleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.firewallRuleName,
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
      bodyMapper: Mappers.FirewallRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/firewallRules/{firewallRuleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.firewallRuleName,
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
      ...Mappers.FirewallRule,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.FirewallRule
    },
    201: {
      bodyMapper: Mappers.FirewallRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/firewallRules/{firewallRuleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.firewallRuleName,
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
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/firewallRules",
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
      bodyMapper: Mappers.FirewallRuleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const replaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/firewallRules",
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
      ...Mappers.FirewallRuleList,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.FirewallRule
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServerNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.FirewallRuleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
