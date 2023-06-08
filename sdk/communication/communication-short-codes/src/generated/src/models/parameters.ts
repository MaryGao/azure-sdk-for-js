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
  USProgramBrief as USProgramBriefMapper,
  ProgramBriefAttachment as ProgramBriefAttachmentMapper
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

export const skip: OperationQueryParameter = {
  parameterPath: ["options", "skip"],
  mapper: {
    defaultValue: 0,
    serializedName: "skip",
    type: {
      name: "Number"
    }
  }
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    defaultValue: 100,
    serializedName: "top",
    type: {
      name: "Number"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-09-06",
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
    defaultValue: "application/merge-patch+json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: USProgramBriefMapper
};

export const programBriefId: OperationURLParameter = {
  parameterPath: "programBriefId",
  mapper: {
    serializedName: "programBriefId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const contentType1: OperationParameter = {
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

export const id: OperationParameter = {
  parameterPath: "id",
  mapper: ProgramBriefAttachmentMapper
};

export const type: OperationParameter = {
  parameterPath: "type",
  mapper: ProgramBriefAttachmentMapper
};

export const fileName: OperationParameter = {
  parameterPath: "fileName",
  mapper: ProgramBriefAttachmentMapper
};

export const fileSizeInBytes: OperationParameter = {
  parameterPath: ["options", "fileSizeInBytes"],
  mapper: ProgramBriefAttachmentMapper
};

export const fileType: OperationParameter = {
  parameterPath: "fileType",
  mapper: ProgramBriefAttachmentMapper
};

export const fileContentBase64: OperationParameter = {
  parameterPath: "fileContentBase64",
  mapper: ProgramBriefAttachmentMapper
};

export const attachmentId: OperationURLParameter = {
  parameterPath: "attachmentId",
  mapper: {
    serializedName: "attachmentId",
    required: true,
    type: {
      name: "Uuid"
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
