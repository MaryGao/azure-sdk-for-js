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
import * as Mappers from "../models/timeZonesMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a TimeZones. */
export class TimeZones {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a TimeZones.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of managed instance time zones by location.
   * @param locationName
   * @param [options] The optional parameters
   * @returns Promise<Models.TimeZonesListByLocationResponse>
   */
  listByLocation(locationName: string, options?: msRest.RequestOptionsBase): Promise<Models.TimeZonesListByLocationResponse>;
  /**
   * @param locationName
   * @param callback The callback
   */
  listByLocation(locationName: string, callback: msRest.ServiceCallback<Models.TimeZoneListResult>): void;
  /**
   * @param locationName
   * @param options The optional parameters
   * @param callback The callback
   */
  listByLocation(locationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TimeZoneListResult>): void;
  listByLocation(locationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TimeZoneListResult>, callback?: msRest.ServiceCallback<Models.TimeZoneListResult>): Promise<Models.TimeZonesListByLocationResponse> {
    return this.client.sendOperationRequest(
      {
        locationName,
        options
      },
      listByLocationOperationSpec,
      callback) as Promise<Models.TimeZonesListByLocationResponse>;
  }

  /**
   * Gets a managed instance time zone.
   * @param locationName
   * @param timeZoneId
   * @param [options] The optional parameters
   * @returns Promise<Models.TimeZonesGetResponse>
   */
  get(locationName: string, timeZoneId: string, options?: msRest.RequestOptionsBase): Promise<Models.TimeZonesGetResponse>;
  /**
   * @param locationName
   * @param timeZoneId
   * @param callback The callback
   */
  get(locationName: string, timeZoneId: string, callback: msRest.ServiceCallback<Models.TimeZone>): void;
  /**
   * @param locationName
   * @param timeZoneId
   * @param options The optional parameters
   * @param callback The callback
   */
  get(locationName: string, timeZoneId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TimeZone>): void;
  get(locationName: string, timeZoneId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TimeZone>, callback?: msRest.ServiceCallback<Models.TimeZone>): Promise<Models.TimeZonesGetResponse> {
    return this.client.sendOperationRequest(
      {
        locationName,
        timeZoneId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.TimeZonesGetResponse>;
  }

  /**
   * Gets a list of managed instance time zones by location.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.TimeZonesListByLocationNextResponse>
   */
  listByLocationNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.TimeZonesListByLocationNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByLocationNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.TimeZoneListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByLocationNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TimeZoneListResult>): void;
  listByLocationNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TimeZoneListResult>, callback?: msRest.ServiceCallback<Models.TimeZoneListResult>): Promise<Models.TimeZonesListByLocationNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByLocationNextOperationSpec,
      callback) as Promise<Models.TimeZonesListByLocationNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByLocationOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/timeZones",
  urlParameters: [
    Parameters.locationName,
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
      bodyMapper: Mappers.TimeZoneListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/timeZones/{timeZoneId}",
  urlParameters: [
    Parameters.locationName,
    Parameters.timeZoneId,
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
      bodyMapper: Mappers.TimeZone
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByLocationNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.TimeZoneListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
