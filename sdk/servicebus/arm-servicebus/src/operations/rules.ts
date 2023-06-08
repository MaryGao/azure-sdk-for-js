/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Rules } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ServiceBusManagementClient } from "../serviceBusManagementClient";
import {
  Rule,
  RulesListBySubscriptionsNextOptionalParams,
  RulesListBySubscriptionsOptionalParams,
  RulesListBySubscriptionsResponse,
  RulesCreateOrUpdateOptionalParams,
  RulesCreateOrUpdateResponse,
  RulesDeleteOptionalParams,
  RulesGetOptionalParams,
  RulesGetResponse,
  RulesListBySubscriptionsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Rules operations. */
export class RulesImpl implements Rules {
  private readonly client: ServiceBusManagementClient;

  /**
   * Initialize a new instance of the class Rules class.
   * @param client Reference to the service client
   */
  constructor(client: ServiceBusManagementClient) {
    this.client = client;
  }

  /**
   * List all the rules within given topic-subscription
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param options The options parameters.
   */
  public listBySubscriptions(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    subscriptionName: string,
    options?: RulesListBySubscriptionsOptionalParams
  ): PagedAsyncIterableIterator<Rule> {
    const iter = this.listBySubscriptionsPagingAll(
      resourceGroupName,
      namespaceName,
      topicName,
      subscriptionName,
      options
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
        return this.listBySubscriptionsPagingPage(
          resourceGroupName,
          namespaceName,
          topicName,
          subscriptionName,
          options,
          settings
        );
      }
    };
  }

  private async *listBySubscriptionsPagingPage(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    subscriptionName: string,
    options?: RulesListBySubscriptionsOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Rule[]> {
    let result: RulesListBySubscriptionsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscriptions(
        resourceGroupName,
        namespaceName,
        topicName,
        subscriptionName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionsNext(
        resourceGroupName,
        namespaceName,
        topicName,
        subscriptionName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionsPagingAll(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    subscriptionName: string,
    options?: RulesListBySubscriptionsOptionalParams
  ): AsyncIterableIterator<Rule> {
    for await (const page of this.listBySubscriptionsPagingPage(
      resourceGroupName,
      namespaceName,
      topicName,
      subscriptionName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List all the rules within given topic-subscription
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param options The options parameters.
   */
  private _listBySubscriptions(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    subscriptionName: string,
    options?: RulesListBySubscriptionsOptionalParams
  ): Promise<RulesListBySubscriptionsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        subscriptionName,
        options
      },
      listBySubscriptionsOperationSpec
    );
  }

  /**
   * Creates a new rule and updates an existing rule
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param ruleName The rule name.
   * @param parameters Parameters supplied to create a rule.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    subscriptionName: string,
    ruleName: string,
    parameters: Rule,
    options?: RulesCreateOrUpdateOptionalParams
  ): Promise<RulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        subscriptionName,
        ruleName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes an existing rule.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param ruleName The rule name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    subscriptionName: string,
    ruleName: string,
    options?: RulesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        subscriptionName,
        ruleName,
        options
      },
      deleteOperationSpec
    );
  }

  /**
   * Retrieves the description for the specified rule.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param ruleName The rule name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    subscriptionName: string,
    ruleName: string,
    options?: RulesGetOptionalParams
  ): Promise<RulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        subscriptionName,
        ruleName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * ListBySubscriptionsNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param nextLink The nextLink from the previous successful call to the ListBySubscriptions method.
   * @param options The options parameters.
   */
  private _listBySubscriptionsNext(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    subscriptionName: string,
    nextLink: string,
    options?: RulesListBySubscriptionsNextOptionalParams
  ): Promise<RulesListBySubscriptionsNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        subscriptionName,
        nextLink,
        options
      },
      listBySubscriptionsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}/rules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RuleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skip, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.topicName,
    Parameters.subscriptionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}/rules/{ruleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Rule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.topicName,
    Parameters.subscriptionName,
    Parameters.ruleName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}/rules/{ruleName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.topicName,
    Parameters.subscriptionName,
    Parameters.ruleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}/rules/{ruleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Rule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.topicName,
    Parameters.subscriptionName,
    Parameters.ruleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RuleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.nextLink,
    Parameters.topicName,
    Parameters.subscriptionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
