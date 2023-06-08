/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  DatabaseAccountUpdateParameters as DatabaseAccountUpdateParametersMapper,
  DatabaseAccountCreateUpdateParameters as DatabaseAccountCreateUpdateParametersMapper,
  FailoverPolicies as FailoverPoliciesMapper,
  RegionForOnlineOffline as RegionForOnlineOfflineMapper,
  DatabaseAccountRegenerateKeyParameters as DatabaseAccountRegenerateKeyParametersMapper,
  SqlDatabaseCreateUpdateParameters as SqlDatabaseCreateUpdateParametersMapper,
  ThroughputSettingsUpdateParameters as ThroughputSettingsUpdateParametersMapper,
  SqlContainerCreateUpdateParameters as SqlContainerCreateUpdateParametersMapper,
  ClientEncryptionKeyCreateUpdateParameters as ClientEncryptionKeyCreateUpdateParametersMapper,
  SqlStoredProcedureCreateUpdateParameters as SqlStoredProcedureCreateUpdateParametersMapper,
  SqlUserDefinedFunctionCreateUpdateParameters as SqlUserDefinedFunctionCreateUpdateParametersMapper,
  SqlTriggerCreateUpdateParameters as SqlTriggerCreateUpdateParametersMapper,
  SqlRoleDefinitionCreateUpdateParameters as SqlRoleDefinitionCreateUpdateParametersMapper,
  SqlRoleAssignmentCreateUpdateParameters as SqlRoleAssignmentCreateUpdateParametersMapper,
  ContinuousBackupRestoreLocation as ContinuousBackupRestoreLocationMapper,
  MongoDBDatabaseCreateUpdateParameters as MongoDBDatabaseCreateUpdateParametersMapper,
  MongoDBCollectionCreateUpdateParameters as MongoDBCollectionCreateUpdateParametersMapper,
  MongoRoleDefinitionCreateUpdateParameters as MongoRoleDefinitionCreateUpdateParametersMapper,
  MongoUserDefinitionCreateUpdateParameters as MongoUserDefinitionCreateUpdateParametersMapper,
  TableCreateUpdateParameters as TableCreateUpdateParametersMapper,
  CassandraKeyspaceCreateUpdateParameters as CassandraKeyspaceCreateUpdateParametersMapper,
  CassandraTableCreateUpdateParameters as CassandraTableCreateUpdateParametersMapper,
  GremlinDatabaseCreateUpdateParameters as GremlinDatabaseCreateUpdateParametersMapper,
  GremlinGraphCreateUpdateParameters as GremlinGraphCreateUpdateParametersMapper,
  ClusterResource as ClusterResourceMapper,
  CommandPostBody as CommandPostBodyMapper,
  DataCenterResource as DataCenterResourceMapper,
  NotebookWorkspaceCreateUpdateParameters as NotebookWorkspaceCreateUpdateParametersMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  ServiceResourceCreateUpdateParameters as ServiceResourceCreateUpdateParametersMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const accountName: OperationURLParameter = {
  parameterPath: "accountName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-z0-9]+(-[a-z0-9]+)*"),
      MaxLength: 50,
      MinLength: 3
    },
    serializedName: "accountName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-04-15",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const updateParameters: OperationParameter = {
  parameterPath: "updateParameters",
  mapper: DatabaseAccountUpdateParametersMapper
};

export const createUpdateParameters: OperationParameter = {
  parameterPath: "createUpdateParameters",
  mapper: DatabaseAccountCreateUpdateParametersMapper
};

export const failoverParameters: OperationParameter = {
  parameterPath: "failoverParameters",
  mapper: FailoverPoliciesMapper
};

export const regionParameterForOffline: OperationParameter = {
  parameterPath: "regionParameterForOffline",
  mapper: RegionForOnlineOfflineMapper
};

export const regionParameterForOnline: OperationParameter = {
  parameterPath: "regionParameterForOnline",
  mapper: RegionForOnlineOfflineMapper
};

export const keyToRegenerate: OperationParameter = {
  parameterPath: "keyToRegenerate",
  mapper: DatabaseAccountRegenerateKeyParametersMapper
};

export const filter: OperationQueryParameter = {
  parameterPath: "filter",
  mapper: {
    serializedName: "$filter",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const filter1: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const databaseRid: OperationURLParameter = {
  parameterPath: "databaseRid",
  mapper: {
    serializedName: "databaseRid",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const collectionRid: OperationURLParameter = {
  parameterPath: "collectionRid",
  mapper: {
    serializedName: "collectionRid",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const region: OperationURLParameter = {
  parameterPath: "region",
  mapper: {
    serializedName: "region",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const sourceRegion: OperationURLParameter = {
  parameterPath: "sourceRegion",
  mapper: {
    serializedName: "sourceRegion",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const targetRegion: OperationURLParameter = {
  parameterPath: "targetRegion",
  mapper: {
    serializedName: "targetRegion",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const partitionKeyRangeId: OperationURLParameter = {
  parameterPath: "partitionKeyRangeId",
  mapper: {
    serializedName: "partitionKeyRangeId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const databaseName: OperationURLParameter = {
  parameterPath: "databaseName",
  mapper: {
    serializedName: "databaseName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateSqlDatabaseParameters: OperationParameter = {
  parameterPath: "createUpdateSqlDatabaseParameters",
  mapper: SqlDatabaseCreateUpdateParametersMapper
};

export const updateThroughputParameters: OperationParameter = {
  parameterPath: "updateThroughputParameters",
  mapper: ThroughputSettingsUpdateParametersMapper
};

export const containerName: OperationURLParameter = {
  parameterPath: "containerName",
  mapper: {
    serializedName: "containerName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateSqlContainerParameters: OperationParameter = {
  parameterPath: "createUpdateSqlContainerParameters",
  mapper: SqlContainerCreateUpdateParametersMapper
};

export const clientEncryptionKeyName: OperationURLParameter = {
  parameterPath: "clientEncryptionKeyName",
  mapper: {
    serializedName: "clientEncryptionKeyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateClientEncryptionKeyParameters: OperationParameter = {
  parameterPath: "createUpdateClientEncryptionKeyParameters",
  mapper: ClientEncryptionKeyCreateUpdateParametersMapper
};

export const storedProcedureName: OperationURLParameter = {
  parameterPath: "storedProcedureName",
  mapper: {
    serializedName: "storedProcedureName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateSqlStoredProcedureParameters: OperationParameter = {
  parameterPath: "createUpdateSqlStoredProcedureParameters",
  mapper: SqlStoredProcedureCreateUpdateParametersMapper
};

export const userDefinedFunctionName: OperationURLParameter = {
  parameterPath: "userDefinedFunctionName",
  mapper: {
    serializedName: "userDefinedFunctionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateSqlUserDefinedFunctionParameters: OperationParameter = {
  parameterPath: "createUpdateSqlUserDefinedFunctionParameters",
  mapper: SqlUserDefinedFunctionCreateUpdateParametersMapper
};

export const triggerName: OperationURLParameter = {
  parameterPath: "triggerName",
  mapper: {
    serializedName: "triggerName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateSqlTriggerParameters: OperationParameter = {
  parameterPath: "createUpdateSqlTriggerParameters",
  mapper: SqlTriggerCreateUpdateParametersMapper
};

export const roleDefinitionId: OperationURLParameter = {
  parameterPath: "roleDefinitionId",
  mapper: {
    serializedName: "roleDefinitionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateSqlRoleDefinitionParameters: OperationParameter = {
  parameterPath: "createUpdateSqlRoleDefinitionParameters",
  mapper: SqlRoleDefinitionCreateUpdateParametersMapper
};

export const roleAssignmentId: OperationURLParameter = {
  parameterPath: "roleAssignmentId",
  mapper: {
    serializedName: "roleAssignmentId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateSqlRoleAssignmentParameters: OperationParameter = {
  parameterPath: "createUpdateSqlRoleAssignmentParameters",
  mapper: SqlRoleAssignmentCreateUpdateParametersMapper
};

export const location: OperationParameter = {
  parameterPath: "location",
  mapper: ContinuousBackupRestoreLocationMapper
};

export const createUpdateMongoDBDatabaseParameters: OperationParameter = {
  parameterPath: "createUpdateMongoDBDatabaseParameters",
  mapper: MongoDBDatabaseCreateUpdateParametersMapper
};

export const collectionName: OperationURLParameter = {
  parameterPath: "collectionName",
  mapper: {
    serializedName: "collectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateMongoDBCollectionParameters: OperationParameter = {
  parameterPath: "createUpdateMongoDBCollectionParameters",
  mapper: MongoDBCollectionCreateUpdateParametersMapper
};

export const mongoRoleDefinitionId: OperationURLParameter = {
  parameterPath: "mongoRoleDefinitionId",
  mapper: {
    serializedName: "mongoRoleDefinitionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateMongoRoleDefinitionParameters: OperationParameter = {
  parameterPath: "createUpdateMongoRoleDefinitionParameters",
  mapper: MongoRoleDefinitionCreateUpdateParametersMapper
};

export const mongoUserDefinitionId: OperationURLParameter = {
  parameterPath: "mongoUserDefinitionId",
  mapper: {
    serializedName: "mongoUserDefinitionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateMongoUserDefinitionParameters: OperationParameter = {
  parameterPath: "createUpdateMongoUserDefinitionParameters",
  mapper: MongoUserDefinitionCreateUpdateParametersMapper
};

export const tableName: OperationURLParameter = {
  parameterPath: "tableName",
  mapper: {
    serializedName: "tableName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateTableParameters: OperationParameter = {
  parameterPath: "createUpdateTableParameters",
  mapper: TableCreateUpdateParametersMapper
};

export const keyspaceName: OperationURLParameter = {
  parameterPath: "keyspaceName",
  mapper: {
    serializedName: "keyspaceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateCassandraKeyspaceParameters: OperationParameter = {
  parameterPath: "createUpdateCassandraKeyspaceParameters",
  mapper: CassandraKeyspaceCreateUpdateParametersMapper
};

export const createUpdateCassandraTableParameters: OperationParameter = {
  parameterPath: "createUpdateCassandraTableParameters",
  mapper: CassandraTableCreateUpdateParametersMapper
};

export const createUpdateGremlinDatabaseParameters: OperationParameter = {
  parameterPath: "createUpdateGremlinDatabaseParameters",
  mapper: GremlinDatabaseCreateUpdateParametersMapper
};

export const graphName: OperationURLParameter = {
  parameterPath: "graphName",
  mapper: {
    serializedName: "graphName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createUpdateGremlinGraphParameters: OperationParameter = {
  parameterPath: "createUpdateGremlinGraphParameters",
  mapper: GremlinGraphCreateUpdateParametersMapper
};

export const location1: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const clusterName: OperationURLParameter = {
  parameterPath: "clusterName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$"),
      MaxLength: 100,
      MinLength: 1
    },
    serializedName: "clusterName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: ClusterResourceMapper
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: CommandPostBodyMapper
};

export const dataCenterName: OperationURLParameter = {
  parameterPath: "dataCenterName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$"),
      MaxLength: 100,
      MinLength: 1
    },
    serializedName: "dataCenterName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body2: OperationParameter = {
  parameterPath: "body",
  mapper: DataCenterResourceMapper
};

export const notebookWorkspaceName: OperationURLParameter = {
  parameterPath: "notebookWorkspaceName",
  mapper: {
    serializedName: "notebookWorkspaceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const notebookCreateUpdateParameters: OperationParameter = {
  parameterPath: "notebookCreateUpdateParameters",
  mapper: NotebookWorkspaceCreateUpdateParametersMapper
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: PrivateEndpointConnectionMapper
};

export const groupName: OperationURLParameter = {
  parameterPath: "groupName",
  mapper: {
    serializedName: "groupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const instanceId: OperationURLParameter = {
  parameterPath: "instanceId",
  mapper: {
    serializedName: "instanceId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const restorableSqlDatabaseRid: OperationQueryParameter = {
  parameterPath: ["options", "restorableSqlDatabaseRid"],
  mapper: {
    serializedName: "restorableSqlDatabaseRid",
    type: {
      name: "String"
    }
  }
};

export const startTime: OperationQueryParameter = {
  parameterPath: ["options", "startTime"],
  mapper: {
    serializedName: "startTime",
    type: {
      name: "String"
    }
  }
};

export const endTime: OperationQueryParameter = {
  parameterPath: ["options", "endTime"],
  mapper: {
    serializedName: "endTime",
    type: {
      name: "String"
    }
  }
};

export const restoreLocation: OperationQueryParameter = {
  parameterPath: ["options", "restoreLocation"],
  mapper: {
    serializedName: "restoreLocation",
    type: {
      name: "String"
    }
  }
};

export const restoreTimestampInUtc: OperationQueryParameter = {
  parameterPath: ["options", "restoreTimestampInUtc"],
  mapper: {
    serializedName: "restoreTimestampInUtc",
    type: {
      name: "String"
    }
  }
};

export const restorableMongodbDatabaseRid: OperationQueryParameter = {
  parameterPath: ["options", "restorableMongodbDatabaseRid"],
  mapper: {
    serializedName: "restorableMongodbDatabaseRid",
    type: {
      name: "String"
    }
  }
};

export const restorableGremlinDatabaseRid: OperationQueryParameter = {
  parameterPath: ["options", "restorableGremlinDatabaseRid"],
  mapper: {
    serializedName: "restorableGremlinDatabaseRid",
    type: {
      name: "String"
    }
  }
};

export const createUpdateParameters1: OperationParameter = {
  parameterPath: "createUpdateParameters",
  mapper: ServiceResourceCreateUpdateParametersMapper
};

export const serviceName: OperationURLParameter = {
  parameterPath: "serviceName",
  mapper: {
    constraints: {
      MaxLength: 50,
      MinLength: 3
    },
    serializedName: "serviceName",
    required: true,
    type: {
      name: "String"
    }
  }
};
