/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import { TokenCredential } from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { SqlManagementClientContext } from "./sqlManagementClientContext";


class SqlManagementClient extends SqlManagementClientContext {
  // Operation groups
  recoverableDatabases: operations.RecoverableDatabases;
  serverConnectionPolicies: operations.ServerConnectionPolicies;
  dataMaskingPolicies: operations.DataMaskingPolicies;
  dataMaskingRules: operations.DataMaskingRules;
  geoBackupPolicies: operations.GeoBackupPolicies;
  databases: operations.Databases;
  elasticPools: operations.ElasticPools;
  replicationLinks: operations.ReplicationLinks;
  serverCommunicationLinks: operations.ServerCommunicationLinks;
  serviceObjectives: operations.ServiceObjectives;
  elasticPoolActivities: operations.ElasticPoolActivities;
  elasticPoolDatabaseActivities: operations.ElasticPoolDatabaseActivities;
  transparentDataEncryptions: operations.TransparentDataEncryptions;
  transparentDataEncryptionActivities: operations.TransparentDataEncryptionActivities;
  serverUsages: operations.ServerUsages;
  extendedDatabaseBlobAuditingPolicies: operations.ExtendedDatabaseBlobAuditingPolicies;
  extendedServerBlobAuditingPolicies: operations.ExtendedServerBlobAuditingPolicies;
  serverBlobAuditingPolicies: operations.ServerBlobAuditingPolicies;
  databaseBlobAuditingPolicies: operations.DatabaseBlobAuditingPolicies;
  databaseAdvisors: operations.DatabaseAdvisors;
  databaseAutomaticTuning: operations.DatabaseAutomaticTuningOperations;
  databaseColumns: operations.DatabaseColumns;
  databaseRecommendedActions: operations.DatabaseRecommendedActions;
  databaseSchemas: operations.DatabaseSchemas;
  databaseSecurityAlertPolicies: operations.DatabaseSecurityAlertPolicies;
  databaseTables: operations.DatabaseTables;
  databaseVulnerabilityAssessmentRuleBaselines: operations.DatabaseVulnerabilityAssessmentRuleBaselines;
  databaseVulnerabilityAssessments: operations.DatabaseVulnerabilityAssessments;
  databaseVulnerabilityAssessmentScans: operations.DatabaseVulnerabilityAssessmentScans;
  dataWarehouseUserActivities: operations.DataWarehouseUserActivitiesOperations;
  deletedServers: operations.DeletedServers;
  elasticPoolOperations: operations.ElasticPoolOperations;
  encryptionProtectors: operations.EncryptionProtectors;
  failoverGroups: operations.FailoverGroups;
  firewallRules: operations.FirewallRules;
  instanceFailoverGroups: operations.InstanceFailoverGroups;
  instancePools: operations.InstancePools;
  jobAgents: operations.JobAgents;
  jobCredentials: operations.JobCredentials;
  jobExecutions: operations.JobExecutions;
  jobs: operations.Jobs;
  jobStepExecutions: operations.JobStepExecutions;
  jobSteps: operations.JobSteps;
  jobTargetExecutions: operations.JobTargetExecutions;
  jobTargetGroups: operations.JobTargetGroups;
  jobVersions: operations.JobVersions;
  capabilities: operations.Capabilities;
  longTermRetentionBackups: operations.LongTermRetentionBackups;
  longTermRetentionManagedInstanceBackups: operations.LongTermRetentionManagedInstanceBackups;
  longTermRetentionPolicies: operations.LongTermRetentionPolicies;
  maintenanceWindowOptions: operations.MaintenanceWindowOptionsOperations;
  maintenanceWindows: operations.MaintenanceWindowsOperations;
  managedBackupShortTermRetentionPolicies: operations.ManagedBackupShortTermRetentionPolicies;
  managedDatabaseColumns: operations.ManagedDatabaseColumns;
  managedDatabaseQueries: operations.ManagedDatabaseQueries;
  managedDatabaseRestoreDetails: operations.ManagedDatabaseRestoreDetails;
  managedDatabases: operations.ManagedDatabases;
  managedDatabaseSchemas: operations.ManagedDatabaseSchemas;
  managedDatabaseSecurityAlertPolicies: operations.ManagedDatabaseSecurityAlertPolicies;
  managedDatabaseSecurityEvents: operations.ManagedDatabaseSecurityEvents;
  managedDatabaseSensitivityLabels: operations.ManagedDatabaseSensitivityLabels;
  managedDatabaseRecommendedSensitivityLabels: operations.ManagedDatabaseRecommendedSensitivityLabels;
  managedDatabaseTables: operations.ManagedDatabaseTables;
  managedDatabaseTransparentDataEncryption: operations.ManagedDatabaseTransparentDataEncryption;
  managedDatabaseVulnerabilityAssessmentRuleBaselines: operations.ManagedDatabaseVulnerabilityAssessmentRuleBaselines;
  managedDatabaseVulnerabilityAssessments: operations.ManagedDatabaseVulnerabilityAssessments;
  managedDatabaseVulnerabilityAssessmentScans: operations.ManagedDatabaseVulnerabilityAssessmentScans;
  managedInstanceAdministrators: operations.ManagedInstanceAdministrators;
  managedInstanceAzureADOnlyAuthentications: operations.ManagedInstanceAzureADOnlyAuthentications;
  managedInstanceEncryptionProtectors: operations.ManagedInstanceEncryptionProtectors;
  managedInstanceKeys: operations.ManagedInstanceKeys;
  managedInstanceLongTermRetentionPolicies: operations.ManagedInstanceLongTermRetentionPolicies;
  managedInstanceOperations: operations.ManagedInstanceOperations;
  managedInstancePrivateEndpointConnections: operations.ManagedInstancePrivateEndpointConnections;
  managedInstancePrivateLinkResources: operations.ManagedInstancePrivateLinkResources;
  managedInstances: operations.ManagedInstances;
  managedInstanceTdeCertificates: operations.ManagedInstanceTdeCertificates;
  managedInstanceVulnerabilityAssessments: operations.ManagedInstanceVulnerabilityAssessments;
  managedRestorableDroppedDatabaseBackupShortTermRetentionPolicies: operations.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies;
  managedServerSecurityAlertPolicies: operations.ManagedServerSecurityAlertPolicies;
  operations: operations.Operations;
  operationsHealth: operations.OperationsHealthOperations;
  privateEndpointConnections: operations.PrivateEndpointConnections;
  privateLinkResources: operations.PrivateLinkResources;
  recoverableManagedDatabases: operations.RecoverableManagedDatabases;
  restorePoints: operations.RestorePoints;
  sensitivityLabels: operations.SensitivityLabels;
  recommendedSensitivityLabels: operations.RecommendedSensitivityLabels;
  serverAdvisors: operations.ServerAdvisors;
  serverAutomaticTuning: operations.ServerAutomaticTuningOperations;
  serverAzureADAdministrators: operations.ServerAzureADAdministrators;
  serverAzureADOnlyAuthentications: operations.ServerAzureADOnlyAuthentications;
  serverDevOpsAuditSettings: operations.ServerDevOpsAuditSettings;
  serverDnsAliases: operations.ServerDnsAliases;
  serverKeys: operations.ServerKeys;
  serverOperations: operations.ServerOperations;
  serverSecurityAlertPolicies: operations.ServerSecurityAlertPolicies;
  serverTrustGroups: operations.ServerTrustGroups;
  serverVulnerabilityAssessments: operations.ServerVulnerabilityAssessments;
  sqlAgent: operations.SqlAgent;
  subscriptionUsages: operations.SubscriptionUsages;
  syncAgents: operations.SyncAgents;
  syncGroups: operations.SyncGroups;
  syncMembers: operations.SyncMembers;
  tdeCertificates: operations.TdeCertificates;
  timeZones: operations.TimeZones;
  virtualClusters: operations.VirtualClusters;
  virtualNetworkRules: operations.VirtualNetworkRules;
  workloadClassifiers: operations.WorkloadClassifiers;
  workloadGroups: operations.WorkloadGroups;
  backupShortTermRetentionPolicies: operations.BackupShortTermRetentionPolicies;
  databaseExtensions: operations.DatabaseExtensionsOperations;
  databaseOperations: operations.DatabaseOperations;
  databaseUsages: operations.DatabaseUsages;
  ledgerDigestUploads: operations.LedgerDigestUploadsOperations;
  outboundFirewallRules: operations.OutboundFirewallRules;
  restorableDroppedDatabases: operations.RestorableDroppedDatabases;
  restorableDroppedManagedDatabases: operations.RestorableDroppedManagedDatabases;
  servers: operations.Servers;
  usages: operations.Usages;

  /**
   * Initializes a new instance of the SqlManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId The subscription ID that identifies an Azure subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string, options?: Models.SqlManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.recoverableDatabases = new operations.RecoverableDatabases(this);
    this.serverConnectionPolicies = new operations.ServerConnectionPolicies(this);
    this.dataMaskingPolicies = new operations.DataMaskingPolicies(this);
    this.dataMaskingRules = new operations.DataMaskingRules(this);
    this.geoBackupPolicies = new operations.GeoBackupPolicies(this);
    this.databases = new operations.Databases(this);
    this.elasticPools = new operations.ElasticPools(this);
    this.replicationLinks = new operations.ReplicationLinks(this);
    this.serverCommunicationLinks = new operations.ServerCommunicationLinks(this);
    this.serviceObjectives = new operations.ServiceObjectives(this);
    this.elasticPoolActivities = new operations.ElasticPoolActivities(this);
    this.elasticPoolDatabaseActivities = new operations.ElasticPoolDatabaseActivities(this);
    this.transparentDataEncryptions = new operations.TransparentDataEncryptions(this);
    this.transparentDataEncryptionActivities = new operations.TransparentDataEncryptionActivities(this);
    this.serverUsages = new operations.ServerUsages(this);
    this.extendedDatabaseBlobAuditingPolicies = new operations.ExtendedDatabaseBlobAuditingPolicies(this);
    this.extendedServerBlobAuditingPolicies = new operations.ExtendedServerBlobAuditingPolicies(this);
    this.serverBlobAuditingPolicies = new operations.ServerBlobAuditingPolicies(this);
    this.databaseBlobAuditingPolicies = new operations.DatabaseBlobAuditingPolicies(this);
    this.databaseAdvisors = new operations.DatabaseAdvisors(this);
    this.databaseAutomaticTuning = new operations.DatabaseAutomaticTuningOperations(this);
    this.databaseColumns = new operations.DatabaseColumns(this);
    this.databaseRecommendedActions = new operations.DatabaseRecommendedActions(this);
    this.databaseSchemas = new operations.DatabaseSchemas(this);
    this.databaseSecurityAlertPolicies = new operations.DatabaseSecurityAlertPolicies(this);
    this.databaseTables = new operations.DatabaseTables(this);
    this.databaseVulnerabilityAssessmentRuleBaselines = new operations.DatabaseVulnerabilityAssessmentRuleBaselines(this);
    this.databaseVulnerabilityAssessments = new operations.DatabaseVulnerabilityAssessments(this);
    this.databaseVulnerabilityAssessmentScans = new operations.DatabaseVulnerabilityAssessmentScans(this);
    this.dataWarehouseUserActivities = new operations.DataWarehouseUserActivitiesOperations(this);
    this.deletedServers = new operations.DeletedServers(this);
    this.elasticPoolOperations = new operations.ElasticPoolOperations(this);
    this.encryptionProtectors = new operations.EncryptionProtectors(this);
    this.failoverGroups = new operations.FailoverGroups(this);
    this.firewallRules = new operations.FirewallRules(this);
    this.instanceFailoverGroups = new operations.InstanceFailoverGroups(this);
    this.instancePools = new operations.InstancePools(this);
    this.jobAgents = new operations.JobAgents(this);
    this.jobCredentials = new operations.JobCredentials(this);
    this.jobExecutions = new operations.JobExecutions(this);
    this.jobs = new operations.Jobs(this);
    this.jobStepExecutions = new operations.JobStepExecutions(this);
    this.jobSteps = new operations.JobSteps(this);
    this.jobTargetExecutions = new operations.JobTargetExecutions(this);
    this.jobTargetGroups = new operations.JobTargetGroups(this);
    this.jobVersions = new operations.JobVersions(this);
    this.capabilities = new operations.Capabilities(this);
    this.longTermRetentionBackups = new operations.LongTermRetentionBackups(this);
    this.longTermRetentionManagedInstanceBackups = new operations.LongTermRetentionManagedInstanceBackups(this);
    this.longTermRetentionPolicies = new operations.LongTermRetentionPolicies(this);
    this.maintenanceWindowOptions = new operations.MaintenanceWindowOptionsOperations(this);
    this.maintenanceWindows = new operations.MaintenanceWindowsOperations(this);
    this.managedBackupShortTermRetentionPolicies = new operations.ManagedBackupShortTermRetentionPolicies(this);
    this.managedDatabaseColumns = new operations.ManagedDatabaseColumns(this);
    this.managedDatabaseQueries = new operations.ManagedDatabaseQueries(this);
    this.managedDatabaseRestoreDetails = new operations.ManagedDatabaseRestoreDetails(this);
    this.managedDatabases = new operations.ManagedDatabases(this);
    this.managedDatabaseSchemas = new operations.ManagedDatabaseSchemas(this);
    this.managedDatabaseSecurityAlertPolicies = new operations.ManagedDatabaseSecurityAlertPolicies(this);
    this.managedDatabaseSecurityEvents = new operations.ManagedDatabaseSecurityEvents(this);
    this.managedDatabaseSensitivityLabels = new operations.ManagedDatabaseSensitivityLabels(this);
    this.managedDatabaseRecommendedSensitivityLabels = new operations.ManagedDatabaseRecommendedSensitivityLabels(this);
    this.managedDatabaseTables = new operations.ManagedDatabaseTables(this);
    this.managedDatabaseTransparentDataEncryption = new operations.ManagedDatabaseTransparentDataEncryption(this);
    this.managedDatabaseVulnerabilityAssessmentRuleBaselines = new operations.ManagedDatabaseVulnerabilityAssessmentRuleBaselines(this);
    this.managedDatabaseVulnerabilityAssessments = new operations.ManagedDatabaseVulnerabilityAssessments(this);
    this.managedDatabaseVulnerabilityAssessmentScans = new operations.ManagedDatabaseVulnerabilityAssessmentScans(this);
    this.managedInstanceAdministrators = new operations.ManagedInstanceAdministrators(this);
    this.managedInstanceAzureADOnlyAuthentications = new operations.ManagedInstanceAzureADOnlyAuthentications(this);
    this.managedInstanceEncryptionProtectors = new operations.ManagedInstanceEncryptionProtectors(this);
    this.managedInstanceKeys = new operations.ManagedInstanceKeys(this);
    this.managedInstanceLongTermRetentionPolicies = new operations.ManagedInstanceLongTermRetentionPolicies(this);
    this.managedInstanceOperations = new operations.ManagedInstanceOperations(this);
    this.managedInstancePrivateEndpointConnections = new operations.ManagedInstancePrivateEndpointConnections(this);
    this.managedInstancePrivateLinkResources = new operations.ManagedInstancePrivateLinkResources(this);
    this.managedInstances = new operations.ManagedInstances(this);
    this.managedInstanceTdeCertificates = new operations.ManagedInstanceTdeCertificates(this);
    this.managedInstanceVulnerabilityAssessments = new operations.ManagedInstanceVulnerabilityAssessments(this);
    this.managedRestorableDroppedDatabaseBackupShortTermRetentionPolicies = new operations.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies(this);
    this.managedServerSecurityAlertPolicies = new operations.ManagedServerSecurityAlertPolicies(this);
    this.operations = new operations.Operations(this);
    this.operationsHealth = new operations.OperationsHealthOperations(this);
    this.privateEndpointConnections = new operations.PrivateEndpointConnections(this);
    this.privateLinkResources = new operations.PrivateLinkResources(this);
    this.recoverableManagedDatabases = new operations.RecoverableManagedDatabases(this);
    this.restorePoints = new operations.RestorePoints(this);
    this.sensitivityLabels = new operations.SensitivityLabels(this);
    this.recommendedSensitivityLabels = new operations.RecommendedSensitivityLabels(this);
    this.serverAdvisors = new operations.ServerAdvisors(this);
    this.serverAutomaticTuning = new operations.ServerAutomaticTuningOperations(this);
    this.serverAzureADAdministrators = new operations.ServerAzureADAdministrators(this);
    this.serverAzureADOnlyAuthentications = new operations.ServerAzureADOnlyAuthentications(this);
    this.serverDevOpsAuditSettings = new operations.ServerDevOpsAuditSettings(this);
    this.serverDnsAliases = new operations.ServerDnsAliases(this);
    this.serverKeys = new operations.ServerKeys(this);
    this.serverOperations = new operations.ServerOperations(this);
    this.serverSecurityAlertPolicies = new operations.ServerSecurityAlertPolicies(this);
    this.serverTrustGroups = new operations.ServerTrustGroups(this);
    this.serverVulnerabilityAssessments = new operations.ServerVulnerabilityAssessments(this);
    this.sqlAgent = new operations.SqlAgent(this);
    this.subscriptionUsages = new operations.SubscriptionUsages(this);
    this.syncAgents = new operations.SyncAgents(this);
    this.syncGroups = new operations.SyncGroups(this);
    this.syncMembers = new operations.SyncMembers(this);
    this.tdeCertificates = new operations.TdeCertificates(this);
    this.timeZones = new operations.TimeZones(this);
    this.virtualClusters = new operations.VirtualClusters(this);
    this.virtualNetworkRules = new operations.VirtualNetworkRules(this);
    this.workloadClassifiers = new operations.WorkloadClassifiers(this);
    this.workloadGroups = new operations.WorkloadGroups(this);
    this.backupShortTermRetentionPolicies = new operations.BackupShortTermRetentionPolicies(this);
    this.databaseExtensions = new operations.DatabaseExtensionsOperations(this);
    this.databaseOperations = new operations.DatabaseOperations(this);
    this.databaseUsages = new operations.DatabaseUsages(this);
    this.ledgerDigestUploads = new operations.LedgerDigestUploadsOperations(this);
    this.outboundFirewallRules = new operations.OutboundFirewallRules(this);
    this.restorableDroppedDatabases = new operations.RestorableDroppedDatabases(this);
    this.restorableDroppedManagedDatabases = new operations.RestorableDroppedManagedDatabases(this);
    this.servers = new operations.Servers(this);
    this.usages = new operations.Usages(this);
  }
}

// Operation Specifications

export {
  SqlManagementClient,
  SqlManagementClientContext,
  Models as SqlManagementModels,
  Mappers as SqlManagementMappers
};
export * from "./operations";
