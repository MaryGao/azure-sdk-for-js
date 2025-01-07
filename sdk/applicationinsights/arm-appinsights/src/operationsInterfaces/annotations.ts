/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Annotation,
  AnnotationsListOptionalParams,
  AnnotationsCreateOptionalParams,
  AnnotationsCreateResponse,
  AnnotationsDeleteOptionalParams,
  AnnotationsGetOptionalParams,
  AnnotationsGetResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Annotations. */
export interface Annotations {
  /**
   * Gets the list of annotations for a component for given time range
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param start The start time to query from for annotations, cannot be older than 90 days from current
   *              date.
   * @param end The end time to query for annotations.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    start: string,
    end: string,
    options?: AnnotationsListOptionalParams
  ): PagedAsyncIterableIterator<Annotation>;
  /**
   * Create an Annotation of an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param annotationProperties Properties that need to be specified to create an annotation of a
   *                             Application Insights component.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    resourceName: string,
    annotationProperties: Annotation,
    options?: AnnotationsCreateOptionalParams
  ): Promise<AnnotationsCreateResponse>;
  /**
   * Delete an Annotation of an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param annotationId The unique annotation ID. This is unique within a Application Insights
   *                     component.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    annotationId: string,
    options?: AnnotationsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Get the annotation for given id.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param annotationId The unique annotation ID. This is unique within a Application Insights
   *                     component.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    annotationId: string,
    options?: AnnotationsGetOptionalParams
  ): Promise<AnnotationsGetResponse>;
}
