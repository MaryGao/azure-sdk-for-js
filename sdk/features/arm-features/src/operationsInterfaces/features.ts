/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  FeatureResult,
  FeaturesListAllOptionalParams,
  FeaturesListOptionalParams,
  FeaturesGetOptionalParams,
  FeaturesGetResponse,
  FeaturesRegisterOptionalParams,
  FeaturesRegisterResponse,
  FeaturesUnregisterOptionalParams,
  FeaturesUnregisterResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Features. */
export interface Features {
  /**
   * Gets all the preview features that are available through AFEC for the subscription.
   * @param options The options parameters.
   */
  listAll(
    options?: FeaturesListAllOptionalParams
  ): PagedAsyncIterableIterator<FeatureResult>;
  /**
   * Gets all the preview features in a provider namespace that are available through AFEC for the
   * subscription.
   * @param resourceProviderNamespace The namespace of the resource provider for getting features.
   * @param options The options parameters.
   */
  list(
    resourceProviderNamespace: string,
    options?: FeaturesListOptionalParams
  ): PagedAsyncIterableIterator<FeatureResult>;
  /**
   * Gets the preview feature with the specified name.
   * @param resourceProviderNamespace The resource provider namespace for the feature.
   * @param featureName The name of the feature to get.
   * @param options The options parameters.
   */
  get(
    resourceProviderNamespace: string,
    featureName: string,
    options?: FeaturesGetOptionalParams
  ): Promise<FeaturesGetResponse>;
  /**
   * Registers the preview feature for the subscription.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param featureName The name of the feature to register.
   * @param options The options parameters.
   */
  register(
    resourceProviderNamespace: string,
    featureName: string,
    options?: FeaturesRegisterOptionalParams
  ): Promise<FeaturesRegisterResponse>;
  /**
   * Unregisters the preview feature for the subscription.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param featureName The name of the feature to unregister.
   * @param options The options parameters.
   */
  unregister(
    resourceProviderNamespace: string,
    featureName: string,
    options?: FeaturesUnregisterOptionalParams
  ): Promise<FeaturesUnregisterResponse>;
}
