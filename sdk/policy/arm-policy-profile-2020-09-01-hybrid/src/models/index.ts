/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** The policy definition. */
export interface PolicyDefinition {
  /**
   * The ID of the policy definition.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the policy definition.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /** The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom. */
  policyType?: PolicyType;
  /** The policy definition mode. Possible values are NotSpecified, Indexed, and All. */
  mode?: PolicyMode;
  /** The display name of the policy definition. */
  displayName?: string;
  /** The policy definition description. */
  description?: string;
  /** The policy rule. */
  policyRule?: Record<string, unknown>;
  /** The policy definition metadata. */
  metadata?: Record<string, unknown>;
  /** Required if a parameter is used in policy rule. */
  parameters?: Record<string, unknown>;
}

/** List of policy definitions. */
export interface PolicyDefinitionListResult {
  /** An array of policy definitions. */
  value?: PolicyDefinition[];
  /** The URL to use for getting the next set of results. */
  nextLink?: string;
}

/** The policy assignment. */
export interface PolicyAssignment {
  /**
   * The ID of the policy assignment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /** The type of the policy assignment. */
  type?: string;
  /** The name of the policy assignment. */
  name?: string;
  /** The display name of the policy assignment. */
  displayName?: string;
  /** The ID of the policy definition. */
  policyDefinitionId?: string;
  /** The scope for the policy assignment. */
  scope?: string;
  /** Required if a parameter is used in policy rule. */
  parameters?: Record<string, unknown>;
  /** This message will be part of response in case of policy violation. */
  description?: string;
}

/** List of policy assignments. */
export interface PolicyAssignmentListResult {
  /** An array of policy assignments. */
  value?: PolicyAssignment[];
  /** The URL to use for getting the next set of results. */
  nextLink?: string;
}

/** Known values of {@link PolicyType} that the service accepts. */
export enum KnownPolicyType {
  /** NotSpecified */
  NotSpecified = "NotSpecified",
  /** BuiltIn */
  BuiltIn = "BuiltIn",
  /** Custom */
  Custom = "Custom"
}

/**
 * Defines values for PolicyType. \
 * {@link KnownPolicyType} can be used interchangeably with PolicyType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified** \
 * **BuiltIn** \
 * **Custom**
 */
export type PolicyType = string;

/** Known values of {@link PolicyMode} that the service accepts. */
export enum KnownPolicyMode {
  /** NotSpecified */
  NotSpecified = "NotSpecified",
  /** Indexed */
  Indexed = "Indexed",
  /** All */
  All = "All"
}

/**
 * Defines values for PolicyMode. \
 * {@link KnownPolicyMode} can be used interchangeably with PolicyMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified** \
 * **Indexed** \
 * **All**
 */
export type PolicyMode = string;

/** Optional parameters. */
export interface PolicyDefinitionsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type PolicyDefinitionsCreateOrUpdateResponse = PolicyDefinition;

/** Optional parameters. */
export interface PolicyDefinitionsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PolicyDefinitionsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PolicyDefinitionsGetResponse = PolicyDefinition;

/** Optional parameters. */
export interface PolicyDefinitionsGetBuiltInOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getBuiltIn operation. */
export type PolicyDefinitionsGetBuiltInResponse = PolicyDefinition;

/** Optional parameters. */
export interface PolicyDefinitionsCreateOrUpdateAtManagementGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdateAtManagementGroup operation. */
export type PolicyDefinitionsCreateOrUpdateAtManagementGroupResponse = PolicyDefinition;

/** Optional parameters. */
export interface PolicyDefinitionsDeleteAtManagementGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PolicyDefinitionsGetAtManagementGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAtManagementGroup operation. */
export type PolicyDefinitionsGetAtManagementGroupResponse = PolicyDefinition;

/** Optional parameters. */
export interface PolicyDefinitionsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type PolicyDefinitionsListResponse = PolicyDefinitionListResult;

/** Optional parameters. */
export interface PolicyDefinitionsListBuiltInOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBuiltIn operation. */
export type PolicyDefinitionsListBuiltInResponse = PolicyDefinitionListResult;

/** Optional parameters. */
export interface PolicyDefinitionsListByManagementGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByManagementGroup operation. */
export type PolicyDefinitionsListByManagementGroupResponse = PolicyDefinitionListResult;

/** Optional parameters. */
export interface PolicyDefinitionsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type PolicyDefinitionsListNextResponse = PolicyDefinitionListResult;

/** Optional parameters. */
export interface PolicyDefinitionsListBuiltInNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBuiltInNext operation. */
export type PolicyDefinitionsListBuiltInNextResponse = PolicyDefinitionListResult;

/** Optional parameters. */
export interface PolicyDefinitionsListByManagementGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByManagementGroupNext operation. */
export type PolicyDefinitionsListByManagementGroupNextResponse = PolicyDefinitionListResult;

/** Optional parameters. */
export interface PolicyAssignmentsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the delete operation. */
export type PolicyAssignmentsDeleteResponse = PolicyAssignment;

/** Optional parameters. */
export interface PolicyAssignmentsCreateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the create operation. */
export type PolicyAssignmentsCreateResponse = PolicyAssignment;

/** Optional parameters. */
export interface PolicyAssignmentsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PolicyAssignmentsGetResponse = PolicyAssignment;

/** Optional parameters. */
export interface PolicyAssignmentsListForResourceGroupOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. */
  filter?: string;
}

/** Contains response data for the listForResourceGroup operation. */
export type PolicyAssignmentsListForResourceGroupResponse = PolicyAssignmentListResult;

/** Optional parameters. */
export interface PolicyAssignmentsListForResourceOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. */
  filter?: string;
}

/** Contains response data for the listForResource operation. */
export type PolicyAssignmentsListForResourceResponse = PolicyAssignmentListResult;

/** Optional parameters. */
export interface PolicyAssignmentsListOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. */
  filter?: string;
}

/** Contains response data for the list operation. */
export type PolicyAssignmentsListResponse = PolicyAssignmentListResult;

/** Optional parameters. */
export interface PolicyAssignmentsDeleteByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteById operation. */
export type PolicyAssignmentsDeleteByIdResponse = PolicyAssignment;

/** Optional parameters. */
export interface PolicyAssignmentsCreateByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createById operation. */
export type PolicyAssignmentsCreateByIdResponse = PolicyAssignment;

/** Optional parameters. */
export interface PolicyAssignmentsGetByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getById operation. */
export type PolicyAssignmentsGetByIdResponse = PolicyAssignment;

/** Optional parameters. */
export interface PolicyAssignmentsListForResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listForResourceGroupNext operation. */
export type PolicyAssignmentsListForResourceGroupNextResponse = PolicyAssignmentListResult;

/** Optional parameters. */
export interface PolicyAssignmentsListForResourceNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listForResourceNext operation. */
export type PolicyAssignmentsListForResourceNextResponse = PolicyAssignmentListResult;

/** Optional parameters. */
export interface PolicyAssignmentsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type PolicyAssignmentsListNextResponse = PolicyAssignmentListResult;

/** Optional parameters. */
export interface PolicyClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
