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
  MonitorResource as MonitorResourceMapper,
  MonitorResourceUpdate as MonitorResourceUpdateMapper,
  SSODetailsRequest as SSODetailsRequestMapper,
  LinkableEnvironmentRequest as LinkableEnvironmentRequestMapper,
  TagRule as TagRuleMapper,
  TagRuleUpdate as TagRuleUpdateMapper,
  DynatraceSingleSignOnResource as DynatraceSingleSignOnResourceMapper
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

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-09-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
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

export const monitorName: OperationURLParameter = {
  parameterPath: "monitorName",
  mapper: {
    serializedName: "monitorName",
    required: true,
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

export const resource: OperationParameter = {
  parameterPath: "resource",
  mapper: MonitorResourceMapper
};

export const resource1: OperationParameter = {
  parameterPath: "resource",
  mapper: MonitorResourceUpdateMapper
};

export const request: OperationParameter = {
  parameterPath: ["options", "request"],
  mapper: SSODetailsRequestMapper
};

export const request1: OperationParameter = {
  parameterPath: "request",
  mapper: LinkableEnvironmentRequestMapper
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

export const ruleSetName: OperationURLParameter = {
  parameterPath: "ruleSetName",
  mapper: {
    serializedName: "ruleSetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resource2: OperationParameter = {
  parameterPath: "resource",
  mapper: TagRuleMapper
};

export const resource3: OperationParameter = {
  parameterPath: "resource",
  mapper: TagRuleUpdateMapper
};

export const resource4: OperationParameter = {
  parameterPath: "resource",
  mapper: DynatraceSingleSignOnResourceMapper
};

export const configurationName: OperationURLParameter = {
  parameterPath: "configurationName",
  mapper: {
    serializedName: "configurationName",
    required: true,
    type: {
      name: "String"
    }
  }
};
