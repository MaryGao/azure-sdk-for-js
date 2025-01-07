/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { WorkflowRunActionRepetitions } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { WebSiteManagementClient } from "../webSiteManagementClient.js";
import {
  WorkflowRunActionRepetitionDefinition,
  WorkflowRunActionRepetitionsListNextOptionalParams,
  WorkflowRunActionRepetitionsListOptionalParams,
  WorkflowRunActionRepetitionsListResponse,
  ExpressionRoot,
  WorkflowRunActionRepetitionsListExpressionTracesNextOptionalParams,
  WorkflowRunActionRepetitionsListExpressionTracesOptionalParams,
  WorkflowRunActionRepetitionsListExpressionTracesResponse,
  WorkflowRunActionRepetitionsGetOptionalParams,
  WorkflowRunActionRepetitionsGetResponse,
  WorkflowRunActionRepetitionsListNextResponse,
  WorkflowRunActionRepetitionsListExpressionTracesNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkflowRunActionRepetitions operations. */
export class WorkflowRunActionRepetitionsImpl
  implements WorkflowRunActionRepetitions
{
  private readonly client: WebSiteManagementClient;

  /**
   * Initialize a new instance of the class WorkflowRunActionRepetitions class.
   * @param client Reference to the service client
   */
  constructor(client: WebSiteManagementClient) {
    this.client = client;
  }

  /**
   * Get all of a workflow run action repetitions.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Site name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    name: string,
    workflowName: string,
    runName: string,
    actionName: string,
    options?: WorkflowRunActionRepetitionsListOptionalParams,
  ): PagedAsyncIterableIterator<WorkflowRunActionRepetitionDefinition> {
    const iter = this.listPagingAll(
      resourceGroupName,
      name,
      workflowName,
      runName,
      actionName,
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
        return this.listPagingPage(
          resourceGroupName,
          name,
          workflowName,
          runName,
          actionName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    name: string,
    workflowName: string,
    runName: string,
    actionName: string,
    options?: WorkflowRunActionRepetitionsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<WorkflowRunActionRepetitionDefinition[]> {
    let result: WorkflowRunActionRepetitionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        name,
        workflowName,
        runName,
        actionName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        name,
        workflowName,
        runName,
        actionName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    name: string,
    workflowName: string,
    runName: string,
    actionName: string,
    options?: WorkflowRunActionRepetitionsListOptionalParams,
  ): AsyncIterableIterator<WorkflowRunActionRepetitionDefinition> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      name,
      workflowName,
      runName,
      actionName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists a workflow run expression trace.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Site name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param repetitionName The workflow repetition.
   * @param options The options parameters.
   */
  public listExpressionTraces(
    resourceGroupName: string,
    name: string,
    workflowName: string,
    runName: string,
    actionName: string,
    repetitionName: string,
    options?: WorkflowRunActionRepetitionsListExpressionTracesOptionalParams,
  ): PagedAsyncIterableIterator<ExpressionRoot> {
    const iter = this.listExpressionTracesPagingAll(
      resourceGroupName,
      name,
      workflowName,
      runName,
      actionName,
      repetitionName,
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
        return this.listExpressionTracesPagingPage(
          resourceGroupName,
          name,
          workflowName,
          runName,
          actionName,
          repetitionName,
          options,
          settings,
        );
      },
    };
  }

  private async *listExpressionTracesPagingPage(
    resourceGroupName: string,
    name: string,
    workflowName: string,
    runName: string,
    actionName: string,
    repetitionName: string,
    options?: WorkflowRunActionRepetitionsListExpressionTracesOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ExpressionRoot[]> {
    let result: WorkflowRunActionRepetitionsListExpressionTracesResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listExpressionTraces(
        resourceGroupName,
        name,
        workflowName,
        runName,
        actionName,
        repetitionName,
        options,
      );
      let page = result.inputs || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listExpressionTracesNext(
        resourceGroupName,
        name,
        workflowName,
        runName,
        actionName,
        repetitionName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.inputs || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listExpressionTracesPagingAll(
    resourceGroupName: string,
    name: string,
    workflowName: string,
    runName: string,
    actionName: string,
    repetitionName: string,
    options?: WorkflowRunActionRepetitionsListExpressionTracesOptionalParams,
  ): AsyncIterableIterator<ExpressionRoot> {
    for await (const page of this.listExpressionTracesPagingPage(
      resourceGroupName,
      name,
      workflowName,
      runName,
      actionName,
      repetitionName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Get all of a workflow run action repetitions.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Site name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    name: string,
    workflowName: string,
    runName: string,
    actionName: string,
    options?: WorkflowRunActionRepetitionsListOptionalParams,
  ): Promise<WorkflowRunActionRepetitionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, workflowName, runName, actionName, options },
      listOperationSpec,
    );
  }

  /**
   * Get a workflow run action repetition.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Site name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param repetitionName The workflow repetition.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    workflowName: string,
    runName: string,
    actionName: string,
    repetitionName: string,
    options?: WorkflowRunActionRepetitionsGetOptionalParams,
  ): Promise<WorkflowRunActionRepetitionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        workflowName,
        runName,
        actionName,
        repetitionName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Lists a workflow run expression trace.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Site name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param repetitionName The workflow repetition.
   * @param options The options parameters.
   */
  private _listExpressionTraces(
    resourceGroupName: string,
    name: string,
    workflowName: string,
    runName: string,
    actionName: string,
    repetitionName: string,
    options?: WorkflowRunActionRepetitionsListExpressionTracesOptionalParams,
  ): Promise<WorkflowRunActionRepetitionsListExpressionTracesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        workflowName,
        runName,
        actionName,
        repetitionName,
        options,
      },
      listExpressionTracesOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Site name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    name: string,
    workflowName: string,
    runName: string,
    actionName: string,
    nextLink: string,
    options?: WorkflowRunActionRepetitionsListNextOptionalParams,
  ): Promise<WorkflowRunActionRepetitionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        workflowName,
        runName,
        actionName,
        nextLink,
        options,
      },
      listNextOperationSpec,
    );
  }

  /**
   * ListExpressionTracesNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Site name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param actionName The workflow action name.
   * @param repetitionName The workflow repetition.
   * @param nextLink The nextLink from the previous successful call to the ListExpressionTraces method.
   * @param options The options parameters.
   */
  private _listExpressionTracesNext(
    resourceGroupName: string,
    name: string,
    workflowName: string,
    runName: string,
    actionName: string,
    repetitionName: string,
    nextLink: string,
    options?: WorkflowRunActionRepetitionsListExpressionTracesNextOptionalParams,
  ): Promise<WorkflowRunActionRepetitionsListExpressionTracesNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        workflowName,
        runName,
        actionName,
        repetitionName,
        nextLink,
        options,
      },
      listExpressionTracesNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hostruntime/runtime/webhooks/workflow/api/management/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowRunActionRepetitionDefinitionCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.workflowName1,
    Parameters.runName,
    Parameters.actionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hostruntime/runtime/webhooks/workflow/api/management/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions/{repetitionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowRunActionRepetitionDefinition,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.workflowName1,
    Parameters.runName,
    Parameters.actionName,
    Parameters.repetitionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listExpressionTracesOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hostruntime/runtime/webhooks/workflow/api/management/workflows/{workflowName}/runs/{runName}/actions/{actionName}/repetitions/{repetitionName}/listExpressionTraces",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressionTraces,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.workflowName1,
    Parameters.runName,
    Parameters.actionName,
    Parameters.repetitionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowRunActionRepetitionDefinitionCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.nextLink,
    Parameters.workflowName1,
    Parameters.runName,
    Parameters.actionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listExpressionTracesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressionTraces,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.nextLink,
    Parameters.workflowName1,
    Parameters.runName,
    Parameters.actionName,
    Parameters.repetitionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
