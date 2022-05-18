/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export type ProviderSpecificPropertiesUnion =
  | ProviderSpecificProperties
  | HanaDbProviderInstanceProperties
  | SapNetWeaverProviderInstanceProperties
  | PrometheusOSProviderInstanceProperties
  | DB2ProviderInstanceProperties
  | PrometheusHaClusterProviderInstanceProperties
  | MsSqlServerProviderInstanceProperties;

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface OperationListResult {
  /**
   * List of operations supported by the resource provider
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
  /**
   * URL to get the next set of operation list results (if there are any).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /**
   * The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for ARM/control-plane operations.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /**
   * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly origin?: Origin;
  /**
   * Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionType?: ActionType;
}

/** Localized display information for this particular operation. */
export interface OperationDisplay {
  /**
   * The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * The short, localized friendly description of the operation; suitable for tool tips and detailed views.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** The response from the List SAP monitors operation. */
export interface MonitorListResult {
  /** The list of SAP monitors. */
  value?: Monitor[];
  /** The URL to get the next set of SAP monitors. */
  nextLink?: string;
}

/** Standard error object. */
export interface ErrorModel {
  /**
   * Server-defined set of error codes.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * Human-readable representation of the error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * Target of the error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * Array of details about specific errors that led to this reported error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorModel[];
  /**
   * Object containing more specific information than  the current object about the error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly innerError?: ErrorInnerError;
}

/** Object containing more specific information than  the current object about the error. */
export interface ErrorInnerError {
  /** Standard error object. */
  innerError?: ErrorModel;
}

/** Managed resource group configuration */
export interface ManagedRGConfiguration {
  /** Managed resource group name */
  name?: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** The current status of an async operation. */
export interface OperationStatusResult {
  /** Fully qualified ID for the async operation. */
  id?: string;
  /** Name of the async operation. */
  name?: string;
  /** Operation status. */
  status: string;
  /** Percent of the operation that is complete. */
  percentComplete?: number;
  /** The start time of the operation. */
  startTime?: Date;
  /** The end time of the operation. */
  endTime?: Date;
  /** The operations list. */
  operations?: OperationStatusResult[];
  /** If present, details of the operation error. */
  error?: ErrorDetail;
}

/** Tags field of the resource. */
export interface Tags {
  /** Tags field of the resource. */
  tags?: { [propertyName: string]: string };
}

/** The response from the List provider instances operation. */
export interface ProviderInstanceListResult {
  /** The list of provider instances. */
  value?: ProviderInstance[];
  /** The URL to get the next set of provider instances. */
  nextLink?: string;
}

/** Gets or sets the provider specific properties. */
export interface ProviderSpecificProperties {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  providerType:
    | "SapHana"
    | "SapNetWeaver"
    | "PrometheusOS"
    | "Db2"
    | "PrometheusHaCluster"
    | "MsSqlServer";
}

/** Defines the workload operation. */
export interface OperationsDisplayDefinition {
  /** Defines the workload provider. */
  provider: string;
  /** Defines the workload resource. */
  resource: string;
  /** Defines the workload operation. */
  operation: string;
  /** Describes the workload operation. */
  description: string;
}

/** Properties of an Operation. */
export interface OperationsDefinition {
  /** Name of the operation. */
  name: string;
  /** Indicates whether the operation applies to data-plane. */
  isDataAction?: boolean;
  /** Defines the workload operation origin. */
  origin?: OperationProperties;
  /** Display information of the operation. */
  display: OperationsDefinitionDisplay;
  /** Defines the action type of workload operation. */
  actionType?: WorkloadMonitorActionType;
  /** Defines the workload operation properties. */
  properties?: any;
}

/** Defines the workload operation definition response. */
export interface OperationsDefinitionArrayResponseWithContinuation {
  /** Defines the workload operation definition response properties. */
  value?: OperationsDefinition[];
  /** The URL to get to the next set of results, if there are any. */
  nextLink?: string;
}

/** Defines the SAP monitor errors. */
export type MonitorPropertiesErrors = ErrorModel & {};

/** Defines the provider instance errors. */
export type ProviderInstancePropertiesErrors = ErrorModel & {};

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export type TrackedResource = Resource & {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
};

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export type ProxyResource = Resource & {};

/** Defines the workload operation content. */
export type OperationsContent = Resource & {
  /** Name of the operation. */
  namePropertiesName?: string;
  /** Indicates whether the operation applies to data-plane. */
  isDataAction?: boolean;
  /** Defines the workload operation origin. */
  origin?: OperationProperties;
  /** Display information of the operation. */
  display?: OperationsDefinitionDisplay;
  /** Defines the action type of workload operation. */
  actionType?: WorkloadMonitorActionType;
  /** Defines the workload operation properties. */
  properties?: any;
};

/** Gets or sets the provider properties. */
export type HanaDbProviderInstanceProperties = ProviderSpecificProperties & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  providerType: "SapHana";
  /** Gets or sets the target virtual machine size. */
  hostname?: string;
  /** Gets or sets the hana database name. */
  dbName?: string;
  /** Gets or sets the database sql port. */
  sqlPort?: string;
  /** Gets or sets the database instance number. */
  instanceNumber?: string;
  /** Gets or sets the database user name. */
  dbUsername?: string;
  /** Gets or sets the database password. */
  dbPassword?: string;
  /** Gets or sets the key vault URI to secret with the database password. */
  dbPasswordUri?: string;
  /** Gets or sets the blob URI to SSL certificate for the DB. */
  dbSslCertificateUri?: string;
  /** Gets or sets the hostname(s) in the SSL certificate. */
  sslHostNameInCertificate?: string;
};

/** Gets or sets the provider properties. */
export type SapNetWeaverProviderInstanceProperties = ProviderSpecificProperties & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  providerType: "SapNetWeaver";
  /** Gets or sets the SAP System Identifier */
  sapSid?: string;
  /** Gets or sets the target virtual machine IP Address/FQDN. */
  sapHostname?: string;
  /** Gets or sets the instance number of SAP NetWeaver. */
  sapInstanceNr?: string;
  /** Gets or sets the list of HostFile Entries */
  sapHostFileEntries?: string[];
  /** Gets or sets the SAP user name. */
  sapUsername?: string;
  /** Sets the SAP password. */
  sapPassword?: string;
  /** Gets or sets the key vault URI to secret with the SAP password. */
  sapPasswordUri?: string;
  /** Gets or sets the SAP Client ID. */
  sapClientId?: string;
  /** Gets or sets the SAP HTTP port number. */
  sapPortNumber?: string;
  /** Gets or sets the blob URI to SSL certificate for the SAP system. */
  sapSslCertificateUri?: string;
};

/** Gets or sets the PrometheusOS provider properties. */
export type PrometheusOSProviderInstanceProperties = ProviderSpecificProperties & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  providerType: "PrometheusOS";
  /** URL of the Node Exporter endpoint */
  prometheusUrl?: string;
};

/** Gets or sets the DB2 provider properties. */
export type DB2ProviderInstanceProperties = ProviderSpecificProperties & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  providerType: "Db2";
  /** Gets or sets the target virtual machine name. */
  hostname?: string;
  /** Gets or sets the db2 database name. */
  dbName?: string;
  /** Gets or sets the db2 database sql port. */
  dbPort?: string;
  /** Gets or sets the db2 database user name. */
  dbUsername?: string;
  /** Gets or sets the db2 database password. */
  dbPassword?: string;
  /** Gets or sets the key vault URI to secret with the database password. */
  dbPasswordUri?: string;
  /** Gets or sets the SAP System Identifier */
  sapSid?: string;
};

/** Gets or sets the PrometheusHaCluster provider properties. */
export type PrometheusHaClusterProviderInstanceProperties = ProviderSpecificProperties & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  providerType: "PrometheusHaCluster";
  /** URL of the Node Exporter endpoint. */
  prometheusUrl?: string;
  /** Gets or sets the target machine name. */
  hostname?: string;
  /** Gets or sets the cluster sid. */
  sid?: string;
  /** Gets or sets the clusterName. */
  clusterName?: string;
};

/** Gets or sets the SQL server provider properties. */
export type MsSqlServerProviderInstanceProperties = ProviderSpecificProperties & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  providerType: "MsSqlServer";
  /** Gets or sets the SQL server host name. */
  hostname?: string;
  /** Gets or sets the database sql port. */
  dbPort?: string;
  /** Gets or sets the database user name. */
  dbUsername?: string;
  /** Gets or sets the database password. */
  dbPassword?: string;
  /** Gets or sets the key vault URI to secret with the database password. */
  dbPasswordUri?: string;
  /** Gets or sets the SAP System Identifier */
  sapSid?: string;
};

/** Display information of the operation. */
export type OperationsDefinitionDisplay = OperationsDisplayDefinition & {};

/** SAP monitor info on Azure (ARM properties and SAP monitor properties) */
export type Monitor = TrackedResource & {
  /**
   * State of provisioning of the monitor.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: WorkloadMonitorProvisioningState;
  /**
   * Defines the SAP monitor errors.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly errors?: MonitorPropertiesErrors;
  /** The monitor resources will be deployed in the monitoring region. The subnet region should be same as the monitoring region. */
  appLocation?: string;
  /** Sets the routing preference of the monitor. By default only RFC1918 traffic is routed to the customer VNET. */
  routingPreference?: RoutingPreference;
  /** Managed resource group configuration */
  managedResourceGroupConfiguration?: ManagedRGConfiguration;
  /** The ARM ID of the Log Analytics Workspace that is used for monitoring. */
  logAnalyticsWorkspaceArmId?: string;
  /** The subnet which the SAP monitor will be deployed in */
  monitorSubnet?: string;
  /**
   * The ARM ID of the MSI used for monitoring.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly msiArmId?: string;
};

/** A provider instance associated with monitor. */
export type ProviderInstance = ProxyResource & {
  /**
   * State of provisioning of the provider instance
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: WorkloadMonitorProvisioningState;
  /**
   * Defines the provider instance errors.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly errors?: ProviderInstancePropertiesErrors;
  /** Defines the provider instance errors. */
  providerSettings?: ProviderSpecificPropertiesUnion;
};

/** Known values of {@link Origin} that the service accepts. */
export enum KnownOrigin {
  User = "user",
  System = "system",
  UserSystem = "user,system"
}

/**
 * Defines values for Origin. \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **system** \
 * **user,system**
 */
export type Origin = string;

/** Known values of {@link ActionType} that the service accepts. */
export enum KnownActionType {
  Internal = "Internal"
}

/**
 * Defines values for ActionType. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;

/** Known values of {@link WorkloadMonitorProvisioningState} that the service accepts. */
export enum KnownWorkloadMonitorProvisioningState {
  Accepted = "Accepted",
  Creating = "Creating",
  Updating = "Updating",
  Failed = "Failed",
  Succeeded = "Succeeded",
  Deleting = "Deleting",
  Migrating = "Migrating"
}

/**
 * Defines values for WorkloadMonitorProvisioningState. \
 * {@link KnownWorkloadMonitorProvisioningState} can be used interchangeably with WorkloadMonitorProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Accepted** \
 * **Creating** \
 * **Updating** \
 * **Failed** \
 * **Succeeded** \
 * **Deleting** \
 * **Migrating**
 */
export type WorkloadMonitorProvisioningState = string;

/** Known values of {@link RoutingPreference} that the service accepts. */
export enum KnownRoutingPreference {
  Default = "Default",
  RouteAll = "RouteAll"
}

/**
 * Defines values for RoutingPreference. \
 * {@link KnownRoutingPreference} can be used interchangeably with RoutingPreference,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Default** \
 * **RouteAll**
 */
export type RoutingPreference = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  User = "User",
  Application = "Application",
  ManagedIdentity = "ManagedIdentity",
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link OperationProperties} that the service accepts. */
export enum KnownOperationProperties {
  NotSpecified = "NotSpecified",
  User = "User",
  System = "System"
}

/**
 * Defines values for OperationProperties. \
 * {@link KnownOperationProperties} can be used interchangeably with OperationProperties,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified** \
 * **User** \
 * **System**
 */
export type OperationProperties = string;

/** Known values of {@link WorkloadMonitorActionType} that the service accepts. */
export enum KnownWorkloadMonitorActionType {
  NotSpecified = "NotSpecified",
  Internal = "Internal"
}

/**
 * Defines values for WorkloadMonitorActionType. \
 * {@link KnownWorkloadMonitorActionType} can be used interchangeably with WorkloadMonitorActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified** \
 * **Internal**
 */
export type WorkloadMonitorActionType = string;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export interface MonitorsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type MonitorsListResponse = MonitorListResult;

/** Optional parameters. */
export interface MonitorsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type MonitorsListByResourceGroupResponse = MonitorListResult;

/** Optional parameters. */
export interface MonitorsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type MonitorsGetResponse = Monitor;

/** Optional parameters. */
export interface MonitorsCreateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the create operation. */
export type MonitorsCreateResponse = Monitor;

/** Optional parameters. */
export interface MonitorsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the delete operation. */
export type MonitorsDeleteResponse = OperationStatusResult;

/** Optional parameters. */
export interface MonitorsUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type MonitorsUpdateResponse = Monitor;

/** Optional parameters. */
export interface MonitorsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type MonitorsListNextResponse = MonitorListResult;

/** Optional parameters. */
export interface MonitorsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type MonitorsListByResourceGroupNextResponse = MonitorListResult;

/** Optional parameters. */
export interface ProviderInstancesListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type ProviderInstancesListResponse = ProviderInstanceListResult;

/** Optional parameters. */
export interface ProviderInstancesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ProviderInstancesGetResponse = ProviderInstance;

/** Optional parameters. */
export interface ProviderInstancesCreateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the create operation. */
export type ProviderInstancesCreateResponse = ProviderInstance;

/** Optional parameters. */
export interface ProviderInstancesDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the delete operation. */
export type ProviderInstancesDeleteResponse = OperationStatusResult;

/** Optional parameters. */
export interface ProviderInstancesListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type ProviderInstancesListNextResponse = ProviderInstanceListResult;

/** Optional parameters. */
export interface WorkloadsClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
