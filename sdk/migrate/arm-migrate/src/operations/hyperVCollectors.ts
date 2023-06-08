/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { HyperVCollectors } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMigrateV2 } from "../azureMigrateV2";
import {
  HyperVCollector,
  HyperVCollectorsListByProjectOptionalParams,
  HyperVCollectorsListByProjectResponse,
  HyperVCollectorsGetOptionalParams,
  HyperVCollectorsGetResponse,
  HyperVCollectorsCreateOptionalParams,
  HyperVCollectorsCreateResponse,
  HyperVCollectorsDeleteOptionalParams,
  HyperVCollectorsDeleteResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing HyperVCollectors operations. */
export class HyperVCollectorsImpl implements HyperVCollectors {
  private readonly client: AzureMigrateV2;

  /**
   * Initialize a new instance of the class HyperVCollectors class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMigrateV2) {
    this.client = client;
  }

  /**
   * Get a list of Hyper-V collector.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The options parameters.
   */
  public listByProject(
    resourceGroupName: string,
    projectName: string,
    options?: HyperVCollectorsListByProjectOptionalParams
  ): PagedAsyncIterableIterator<HyperVCollector> {
    const iter = this.listByProjectPagingAll(
      resourceGroupName,
      projectName,
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
        return this.listByProjectPagingPage(
          resourceGroupName,
          projectName,
          options,
          settings
        );
      }
    };
  }

  private async *listByProjectPagingPage(
    resourceGroupName: string,
    projectName: string,
    options?: HyperVCollectorsListByProjectOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<HyperVCollector[]> {
    let result: HyperVCollectorsListByProjectResponse;
    result = await this._listByProject(resourceGroupName, projectName, options);
    yield result.value || [];
  }

  private async *listByProjectPagingAll(
    resourceGroupName: string,
    projectName: string,
    options?: HyperVCollectorsListByProjectOptionalParams
  ): AsyncIterableIterator<HyperVCollector> {
    for await (const page of this.listByProjectPagingPage(
      resourceGroupName,
      projectName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a list of Hyper-V collector.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The options parameters.
   */
  private _listByProject(
    resourceGroupName: string,
    projectName: string,
    options?: HyperVCollectorsListByProjectOptionalParams
  ): Promise<HyperVCollectorsListByProjectResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, options },
      listByProjectOperationSpec
    );
  }

  /**
   * Get a Hyper-V collector.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param hyperVCollectorName Unique name of a Hyper-V collector within a project.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    hyperVCollectorName: string,
    options?: HyperVCollectorsGetOptionalParams
  ): Promise<HyperVCollectorsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, hyperVCollectorName, options },
      getOperationSpec
    );
  }

  /**
   * Create or Update Hyper-V collector
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param hyperVCollectorName Unique name of a Hyper-V collector within a project.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    projectName: string,
    hyperVCollectorName: string,
    options?: HyperVCollectorsCreateOptionalParams
  ): Promise<HyperVCollectorsCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, hyperVCollectorName, options },
      createOperationSpec
    );
  }

  /**
   * Delete a Hyper-V collector from the project.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param hyperVCollectorName Unique name of a Hyper-V collector within a project.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    projectName: string,
    hyperVCollectorName: string,
    options?: HyperVCollectorsDeleteOptionalParams
  ): Promise<HyperVCollectorsDeleteResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, hyperVCollectorName, options },
      deleteOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProjectOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/hypervcollectors",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HyperVCollectorList,
      headersMapper: Mappers.HyperVCollectorsListByProjectHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/hypervcollectors/{hyperVCollectorName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HyperVCollector,
      headersMapper: Mappers.HyperVCollectorsGetHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.hyperVCollectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/hypervcollectors/{hyperVCollectorName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.HyperVCollector,
      headersMapper: Mappers.HyperVCollectorsCreateHeaders
    },
    201: {
      bodyMapper: Mappers.HyperVCollector,
      headersMapper: Mappers.HyperVCollectorsCreateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.collectorBody,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.hyperVCollectorName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/hypervcollectors/{hyperVCollectorName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.HyperVCollectorsDeleteHeaders
    },
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.hyperVCollectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
