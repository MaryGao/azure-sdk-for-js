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
  LinkConnectionResource as LinkConnectionResourceMapper,
  EditTablesRequest as EditTablesRequestMapper,
  QueryTableStatusRequest as QueryTableStatusRequestMapper,
  UpdateLandingZoneCredential as UpdateLandingZoneCredentialMapper,
  RunNotebookRequest as RunNotebookRequestMapper,
  KqlScriptResource as KqlScriptResourceMapper,
  ArtifactRenameRequest as ArtifactRenameRequestMapper,
  MetastoreRegisterObject as MetastoreRegisterObjectMapper,
  MetastoreUpdateObject as MetastoreUpdateObjectMapper,
  SparkConfigurationResource as SparkConfigurationResourceMapper,
  DataFlowResource as DataFlowResourceMapper,
  CreateDataFlowDebugSessionRequest as CreateDataFlowDebugSessionRequestMapper,
  DataFlowDebugPackage as DataFlowDebugPackageMapper,
  DeleteDataFlowDebugSessionRequest as DeleteDataFlowDebugSessionRequestMapper,
  DataFlowDebugCommandRequest as DataFlowDebugCommandRequestMapper,
  DatasetResource as DatasetResourceMapper,
  GitHubAccessTokenRequest as GitHubAccessTokenRequestMapper,
  LinkedServiceResource as LinkedServiceResourceMapper,
  NotebookResourceAutoGenerated as NotebookResourceAutoGeneratedMapper,
  PipelineResource as PipelineResourceMapper,
  RunFilterParameters as RunFilterParametersMapper,
  SparkJobDefinitionResource as SparkJobDefinitionResourceMapper,
  SqlScriptResource as SqlScriptResourceMapper,
  TriggerResource as TriggerResourceMapper,
  DDLBatch as DDLBatchMapper,
  DatabaseEntity as DatabaseEntityMapper,
  MDEntity as MDEntityMapper
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

export const endpoint: OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    serializedName: "endpoint",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-04-18-preview",
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

export const linkConnection: OperationParameter = {
  parameterPath: "linkConnection",
  mapper: LinkConnectionResourceMapper
};

export const linkConnectionName: OperationURLParameter = {
  parameterPath: "linkConnectionName",
  mapper: {
    serializedName: "linkConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const editTablesRequest: OperationParameter = {
  parameterPath: "editTablesRequest",
  mapper: EditTablesRequestMapper
};

export const queryTableStatusRequest: OperationParameter = {
  parameterPath: "queryTableStatusRequest",
  mapper: QueryTableStatusRequestMapper
};

export const updateLandingZoneCredentialRequest: OperationParameter = {
  parameterPath: "updateLandingZoneCredentialRequest",
  mapper: UpdateLandingZoneCredentialMapper
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

export const runNotebookRequest: OperationParameter = {
  parameterPath: "runNotebookRequest",
  mapper: RunNotebookRequestMapper
};

export const apiVersion1: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-03-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const runId: OperationURLParameter = {
  parameterPath: "runId",
  mapper: {
    constraints: {
      MaxLength: 100
    },
    serializedName: "runId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion2: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-11-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const kqlScript: OperationParameter = {
  parameterPath: "kqlScript",
  mapper: KqlScriptResourceMapper
};

export const kqlScriptName: OperationURLParameter = {
  parameterPath: "kqlScriptName",
  mapper: {
    serializedName: "kqlScriptName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const renameRequest: OperationParameter = {
  parameterPath: "renameRequest",
  mapper: ArtifactRenameRequestMapper
};

export const registerBody: OperationParameter = {
  parameterPath: "registerBody",
  mapper: MetastoreRegisterObjectMapper
};

export const apiVersion3: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-07-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const id: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const updateBody: OperationParameter = {
  parameterPath: "updateBody",
  mapper: MetastoreUpdateObjectMapper
};

export const apiVersion4: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-06-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const sparkConfiguration: OperationParameter = {
  parameterPath: "sparkConfiguration",
  mapper: SparkConfigurationResourceMapper
};

export const sparkConfigurationName: OperationURLParameter = {
  parameterPath: "sparkConfigurationName",
  mapper: {
    serializedName: "sparkConfigurationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const ifMatch: OperationParameter = {
  parameterPath: ["options", "ifMatch"],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};

export const ifNoneMatch: OperationParameter = {
  parameterPath: ["options", "ifNoneMatch"],
  mapper: {
    serializedName: "If-None-Match",
    type: {
      name: "String"
    }
  }
};

export const request: OperationParameter = {
  parameterPath: "request",
  mapper: ArtifactRenameRequestMapper
};

export const apiVersion5: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-12-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const bigDataPoolName: OperationURLParameter = {
  parameterPath: "bigDataPoolName",
  mapper: {
    serializedName: "bigDataPoolName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const dataFlow: OperationParameter = {
  parameterPath: "dataFlow",
  mapper: DataFlowResourceMapper
};

export const dataFlowName: OperationURLParameter = {
  parameterPath: "dataFlowName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9_][^<>*#.%&:\\\\+?/]*$"),
      MaxLength: 260,
      MinLength: 1
    },
    serializedName: "dataFlowName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const request1: OperationParameter = {
  parameterPath: "request",
  mapper: CreateDataFlowDebugSessionRequestMapper
};

export const request2: OperationParameter = {
  parameterPath: "request",
  mapper: DataFlowDebugPackageMapper
};

export const request3: OperationParameter = {
  parameterPath: "request",
  mapper: DeleteDataFlowDebugSessionRequestMapper
};

export const request4: OperationParameter = {
  parameterPath: "request",
  mapper: DataFlowDebugCommandRequestMapper
};

export const dataset: OperationParameter = {
  parameterPath: "dataset",
  mapper: DatasetResourceMapper
};

export const datasetName: OperationURLParameter = {
  parameterPath: "datasetName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9_][^<>*#.%&:\\\\+?/]*$"),
      MaxLength: 260,
      MinLength: 1
    },
    serializedName: "datasetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const gitHubAccessTokenRequest: OperationParameter = {
  parameterPath: "gitHubAccessTokenRequest",
  mapper: GitHubAccessTokenRequestMapper
};

export const clientRequestId: OperationParameter = {
  parameterPath: ["options", "clientRequestId"],
  mapper: {
    serializedName: "x-ms-client-request-id",
    type: {
      name: "String"
    }
  }
};

export const integrationRuntimeName: OperationURLParameter = {
  parameterPath: "integrationRuntimeName",
  mapper: {
    serializedName: "integrationRuntimeName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const libraryName: OperationURLParameter = {
  parameterPath: "libraryName",
  mapper: {
    constraints: {
      MaxLength: 100
    },
    serializedName: "libraryName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const operationId: OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    serializedName: "operationId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType1: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/octet-stream",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const content: OperationParameter = {
  parameterPath: "content",
  mapper: {
    serializedName: "content",
    required: true,
    type: {
      name: "Stream"
    }
  }
};

export const accept1: OperationParameter = {
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

export const comp: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "appendblock",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const blobConditionAppendPosition: OperationParameter = {
  parameterPath: ["options", "blobConditionAppendPosition"],
  mapper: {
    serializedName: "x-ms-blob-condition-appendpos",
    type: {
      name: "Number"
    }
  }
};

export const linkedService: OperationParameter = {
  parameterPath: "linkedService",
  mapper: LinkedServiceResourceMapper
};

export const linkedServiceName: OperationURLParameter = {
  parameterPath: "linkedServiceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9_][^<>*#.%&:\\\\+?/]*$"),
      MaxLength: 260,
      MinLength: 1
    },
    serializedName: "linkedServiceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const notebook: OperationParameter = {
  parameterPath: "notebook",
  mapper: NotebookResourceAutoGeneratedMapper
};

export const notebookName: OperationURLParameter = {
  parameterPath: "notebookName",
  mapper: {
    serializedName: "notebookName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const pipeline: OperationParameter = {
  parameterPath: "pipeline",
  mapper: PipelineResourceMapper
};

export const pipelineName: OperationURLParameter = {
  parameterPath: "pipelineName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9_][^<>*#.%&:\\\\+?/]*$"),
      MaxLength: 260,
      MinLength: 1
    },
    serializedName: "pipelineName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters: OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: {
    serializedName: "parameters",
    type: {
      name: "Dictionary",
      value: { type: { name: "any" } }
    }
  }
};

export const referencePipelineRunId: OperationQueryParameter = {
  parameterPath: ["options", "referencePipelineRunId"],
  mapper: {
    serializedName: "referencePipelineRunId",
    type: {
      name: "String"
    }
  }
};

export const isRecovery: OperationQueryParameter = {
  parameterPath: ["options", "isRecovery"],
  mapper: {
    serializedName: "isRecovery",
    type: {
      name: "Boolean"
    }
  }
};

export const startActivityName: OperationQueryParameter = {
  parameterPath: ["options", "startActivityName"],
  mapper: {
    serializedName: "startActivityName",
    type: {
      name: "String"
    }
  }
};

export const filterParameters: OperationParameter = {
  parameterPath: "filterParameters",
  mapper: RunFilterParametersMapper
};

export const runId1: OperationURLParameter = {
  parameterPath: "runId",
  mapper: {
    serializedName: "runId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const isRecursive: OperationQueryParameter = {
  parameterPath: ["options", "isRecursive"],
  mapper: {
    serializedName: "isRecursive",
    type: {
      name: "Boolean"
    }
  }
};

export const sparkJobDefinition: OperationParameter = {
  parameterPath: "sparkJobDefinition",
  mapper: SparkJobDefinitionResourceMapper
};

export const sparkJobDefinitionName: OperationURLParameter = {
  parameterPath: "sparkJobDefinitionName",
  mapper: {
    serializedName: "sparkJobDefinitionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const sparkJobDefinitionAzureResource: OperationParameter = {
  parameterPath: "sparkJobDefinitionAzureResource",
  mapper: SparkJobDefinitionResourceMapper
};

export const sqlPoolName: OperationURLParameter = {
  parameterPath: "sqlPoolName",
  mapper: {
    serializedName: "sqlPoolName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const sqlScript: OperationParameter = {
  parameterPath: "sqlScript",
  mapper: SqlScriptResourceMapper
};

export const sqlScriptName: OperationURLParameter = {
  parameterPath: "sqlScriptName",
  mapper: {
    serializedName: "sqlScriptName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const trigger: OperationParameter = {
  parameterPath: "trigger",
  mapper: TriggerResourceMapper
};

export const triggerName: OperationURLParameter = {
  parameterPath: "triggerName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9_][^<>*#.%&:\\\\+?/]*$"),
      MaxLength: 260,
      MinLength: 1
    },
    serializedName: "triggerName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createArtifactsPayload: OperationParameter = {
  parameterPath: "createArtifactsPayload",
  mapper: DDLBatchMapper
};

export const apiVersion6: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-04-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const userAgent: OperationParameter = {
  parameterPath: "userAgent",
  mapper: {
    serializedName: "User-Agent",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const validationType: OperationQueryParameter = {
  parameterPath: "validationType",
  mapper: {
    serializedName: "validationType",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const continuationToken: OperationQueryParameter = {
  parameterPath: ["options", "continuationToken"],
  mapper: {
    serializedName: "continuationToken",
    type: {
      name: "String"
    }
  }
};

export const maxPageSize: OperationQueryParameter = {
  parameterPath: ["options", "maxPageSize"],
  mapper: {
    serializedName: "maxPageSize",
    type: {
      name: "Number"
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

export const artifactType: OperationURLParameter = {
  parameterPath: "artifactType",
  mapper: {
    serializedName: "artifactType",
    required: true,
    type: {
      name: "Enum",
      allowedValues: [
        "DATABASE",
        "TABLE",
        "SCHEMA",
        "VIEW",
        "FUNCTION",
        "PARTITIONINFO",
        "RELATIONSHIP"
      ]
    }
  }
};

export const schemaName: OperationURLParameter = {
  parameterPath: "schemaName",
  mapper: {
    serializedName: "schemaName",
    required: true,
    type: {
      name: "String"
    }
  }
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

export const viewName: OperationURLParameter = {
  parameterPath: "viewName",
  mapper: {
    serializedName: "viewName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createArtifactsPayload1: OperationParameter = {
  parameterPath: "createArtifactsPayload",
  mapper: DatabaseEntityMapper
};

export const artifactName: OperationURLParameter = {
  parameterPath: "artifactName",
  mapper: {
    serializedName: "artifactName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const createArtifactsPayload2: OperationParameter = {
  parameterPath: "createArtifactsPayload",
  mapper: MDEntityMapper
};
