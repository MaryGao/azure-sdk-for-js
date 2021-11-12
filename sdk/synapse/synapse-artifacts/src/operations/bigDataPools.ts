/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { createSpan } from "../tracing";
import { BigDataPools } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreTracing from "@azure/core-tracing";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ArtifactsClientContext } from "../artifactsClientContext";
import {
  BigDataPoolsListOptionalParams,
  BigDataPoolsListResponse,
  BigDataPoolsGetOptionalParams,
  BigDataPoolsGetResponse
} from "../models";

/** Class containing BigDataPools operations. */
export class BigDataPoolsImpl implements BigDataPools {
  private readonly client: ArtifactsClientContext;

  /**
   * Initialize a new instance of the class BigDataPools class.
   * @param client Reference to the service client
   */
  constructor(client: ArtifactsClientContext) {
    this.client = client;
  }

  /**
   * List Big Data Pools
   * @param options The options parameters.
   */
  async list(
    options?: BigDataPoolsListOptionalParams
  ): Promise<BigDataPoolsListResponse> {
    const { span } = createSpan("ArtifactsClient-list", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { options },
        listOperationSpec
      );
      return result as BigDataPoolsListResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Get Big Data Pool
   * @param bigDataPoolName The Big Data Pool name
   * @param options The options parameters.
   */
  async get(
    bigDataPoolName: string,
    options?: BigDataPoolsGetOptionalParams
  ): Promise<BigDataPoolsGetResponse> {
    const { span } = createSpan("ArtifactsClient-get", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { bigDataPoolName, options },
        getOperationSpec
      );
      return result as BigDataPoolsGetResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/bigDataPools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BigDataPoolResourceInfoListResult
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/bigDataPools/{bigDataPoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BigDataPoolResourceInfo
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.endpoint, Parameters.bigDataPoolName],
  headerParameters: [Parameters.accept],
  serializer
};
