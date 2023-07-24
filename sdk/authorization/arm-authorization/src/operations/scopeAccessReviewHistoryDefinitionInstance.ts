/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ScopeAccessReviewHistoryDefinitionInstance } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClient } from "../authorizationManagementClient";
import {
  ScopeAccessReviewHistoryDefinitionInstanceGenerateDownloadUriOptionalParams,
  ScopeAccessReviewHistoryDefinitionInstanceGenerateDownloadUriResponse
} from "../models";

/** Class containing ScopeAccessReviewHistoryDefinitionInstance operations. */
export class ScopeAccessReviewHistoryDefinitionInstanceImpl
  implements ScopeAccessReviewHistoryDefinitionInstance {
  private readonly client: AuthorizationManagementClient;

  /**
   * Initialize a new instance of the class ScopeAccessReviewHistoryDefinitionInstance class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClient) {
    this.client = client;
  }

  /**
   * Generates a uri which can be used to retrieve review history data. This URI has a TTL of 1 day and
   * can be retrieved by fetching the accessReviewHistoryDefinition object.
   * @param scope The scope of the resource.
   * @param historyDefinitionId The id of the access review history definition.
   * @param instanceId The id of the access review history definition instance to generate a URI for.
   * @param options The options parameters.
   */
  generateDownloadUri(
    scope: string,
    historyDefinitionId: string,
    instanceId: string,
    options?: ScopeAccessReviewHistoryDefinitionInstanceGenerateDownloadUriOptionalParams
  ): Promise<
    ScopeAccessReviewHistoryDefinitionInstanceGenerateDownloadUriResponse
  > {
    return this.client.sendOperationRequest(
      { scope, historyDefinitionId, instanceId, options },
      generateDownloadUriOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const generateDownloadUriOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/accessReviewHistoryDefinitions/{historyDefinitionId}/instances/{instanceId}/generateDownloadUri",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewHistoryInstance
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.historyDefinitionId,
    Parameters.instanceId,
    Parameters.scope1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
