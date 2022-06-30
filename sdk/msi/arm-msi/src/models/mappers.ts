/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CloudError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "CloudErrorBody"
        }
      }
    }
  }
};

export const CloudErrorBody: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudErrorBody",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CloudErrorBody"
            }
          }
        }
      }
    }
  }
};

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UserAssignedIdentitiesListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserAssignedIdentitiesListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Identity"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AssociatedResourcesListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssociatedResourcesListResult",
    modelProperties: {
      totalCount: {
        serializedName: "totalCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AzureResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzureResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureResource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resourceGroup: {
        serializedName: "resourceGroup",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        serializedName: "subscriptionId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      subscriptionDisplayName: {
        serializedName: "subscriptionDisplayName",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FederatedIdentityCredentialsListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FederatedIdentityCredentialsListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FederatedIdentityCredential"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProxyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IdentityUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IdentityUpdate",
    modelProperties: {
      ...Resource.type.modelProperties,
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      tenantId: {
        serializedName: "properties.tenantId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      principalId: {
        serializedName: "properties.principalId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      clientId: {
        serializedName: "properties.clientId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      }
    }
  }
};

export const SystemAssignedIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemAssignedIdentity",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      tenantId: {
        serializedName: "properties.tenantId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      principalId: {
        serializedName: "properties.principalId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      clientId: {
        serializedName: "properties.clientId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      clientSecretUrl: {
        serializedName: "properties.clientSecretUrl",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FederatedIdentityCredential: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FederatedIdentityCredential",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      issuer: {
        serializedName: "properties.issuer",
        type: {
          name: "String"
        }
      },
      subject: {
        serializedName: "properties.subject",
        type: {
          name: "String"
        }
      },
      audiences: {
        serializedName: "properties.audiences",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Identity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Identity",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      tenantId: {
        serializedName: "properties.tenantId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      principalId: {
        serializedName: "properties.principalId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      clientId: {
        serializedName: "properties.clientId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      }
    }
  }
};
