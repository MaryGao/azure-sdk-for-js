/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  TypeField,
  ObjectDataTypesListFieldsByModuleAndTypeOptionalParams,
  ObjectDataTypesListFieldsByTypeOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ObjectDataTypes. */
export interface ObjectDataTypes {
  /**
   * Retrieve a list of fields of a given type identified by module name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param moduleName The name of module.
   * @param typeName The name of type.
   * @param options The options parameters.
   */
  listFieldsByModuleAndType(
    resourceGroupName: string,
    automationAccountName: string,
    moduleName: string,
    typeName: string,
    options?: ObjectDataTypesListFieldsByModuleAndTypeOptionalParams
  ): PagedAsyncIterableIterator<TypeField>;
  /**
   * Retrieve a list of fields of a given type across all accessible modules.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param typeName The name of type.
   * @param options The options parameters.
   */
  listFieldsByType(
    resourceGroupName: string,
    automationAccountName: string,
    typeName: string,
    options?: ObjectDataTypesListFieldsByTypeOptionalParams
  ): PagedAsyncIterableIterator<TypeField>;
}
