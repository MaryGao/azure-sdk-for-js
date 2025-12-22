# Customization on Modular (DPG) Libraries

## Generate Modular Client

Follow [DPG quickstart](https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/DPG-quickstart.md) to generate the modular client from TypeSpec definitions.

The TypeSpec emitter generates code in a `sources` folder with the following structure:
- `sources/generated/` - Generated code (do not modify directly)
- `sources/customizations/` - Your custom code and modifications

When you build your package, the build process combines both generated and customization code into the final `src` folder that gets published.

## Customization Structure

The modular library architecture separates concerns into different layers:

1. **API Layer** (`src/api/`) - Core operation logic and context management
2. **Models Layer** (`src/customization/`) - Custom type definitions, converters, and transformations
3. **Client Layer** (`src/`) - High-level client classes that provide the public API
4. **Generated Layer** (`src/generated/`) - Auto-generated code from TypeSpec

## Custom Model Transformations

Modular libraries often need to transform data between the wire format (what the service expects) and the client format (what users work with). This is typically done using converter functions.

### Input Model Converters (Client to Wire)

Create converters that transform client-friendly models to wire format before sending to the service:

```typescript
// sources/customizations/src/customization/convertModelsToWrite.ts
import type { CreateAgentOptions } from "./models.js";
import type { CreateAgentBody } from "../generated/src/models.js";

export function convertCreateAgentOptions(
  options: CreateAgentOptions
): CreateAgentBody {
  return {
    model: options.model,
    name: options.name,
    description: options.description,
    instructions: options.instructions,
    tools: options.tools?.map(convertToolDefinition),
    tool_resources: options.toolResources ? convertToolResources(options.toolResources) : undefined,
    temperature: options.temperature,
    top_p: options.topP,
    response_format: options.responseFormat,
    metadata: options.metadata,
  };
}
```

### Output Model Converters (Wire to Client)

Create converters that transform service responses into client-friendly models:

```typescript
// sources/customizations/src/customization/convertOutputModelsFromWire.ts
import type { AgentOutput } from "./outputModels.js";
import type { AgentOutput as GeneratedAgentOutput } from "../generated/src/outputModels.js";

export function convertAgentOutput(
  output: GeneratedAgentOutput
): AgentOutput {
  return {
    id: output.id,
    createdAt: new Date(output.created_at * 1000),
    name: output.name,
    description: output.description,
    model: output.model,
    instructions: output.instructions,
    tools: output.tools.map(convertToolDefinitionOutput),
    toolResources: output.tool_resources ? convertToolResourcesOutput(output.tool_resources) : undefined,
    temperature: output.temperature,
    topP: output.top_p,
    responseFormat: output.response_format,
    metadata: output.metadata,
  };
}
```

### Custom Model Definitions

Define client-friendly models that differ from the generated wire models:

```typescript
// sources/customizations/src/customization/models.ts

/** The request details to use when creating a new agent. */
export interface CreateAgentOptions {
  /** The ID of the model to use. */
  model: string;
  /** The name of the new agent. */
  name?: string | null;
  /** The description of the new agent. */
  description?: string | null;
  /** The system instructions for the new agent to use. */
  instructions?: string | null;
  /** The collection of tools to enable for the new agent. */
  tools?: Array<ToolDefinition>;
  /** Tool resources for the agent. */
  toolResources?: ToolResources | null;
  /** Sampling temperature between 0 and 2. */
  temperature?: number | null;
  /** Nucleus sampling parameter. */
  topP?: number | null;
  /** Response format option. */
  responseFormat?: AgentsApiResponseFormatOption | null;
  /** Metadata key/value pairs (max 16). */
  metadata?: Record<string, string> | null;
}
```

## Custom Operations and Convenience Methods

Add convenience methods that wrap or enhance generated operations to provide better user experience.

### Creating Operation Groups

Organize related operations into logical groups:

```typescript
// sources/customizations/src/agents/assistants.ts
import type { Client } from "@azure-rest/core-client";
import { operationOptionsToRequestParameters } from "@azure-rest/core-client";
import type { AgentOutput } from "../customization/outputModels.js";
import * as ConvertFromWire from "../customization/convertOutputModelsFromWire.js";
import * as ConverterToWire from "../customization/convertModelsToWrite.js";

/** Creates a new agent. */
export async function createAgent(
  context: Client,
  model: string,
  options: CreateAgentOptionalParams = {},
): Promise<AgentOutput> {
  const createOptions: GeneratedParameters.CreateAgentParameters = {
    ...operationOptionsToRequestParameters(options),
    body: {
      ...ConverterToWire.convertCreateAgentOptions({ ...options, model }),
    },
  };

  const result = await context.path("/assistants").post(createOptions);
  if (!expectedStatuses.includes(result.status)) {
    throw createOpenAIError(result);
  }
  
  return ConvertFromWire.convertAgentOutput(result.body);
}

/** Gets a list of agents that were previously created. */
export async function listAgents(
  context: Client,
  options: ListAgentsOptionalParams = {},
): Promise<PagedAsyncIterableIterator<AgentOutput>> {
  return _listAgents(context, options);
}
```

### Creating the Client Class

Wrap the generated client to provide a clean public API:

```typescript
// sources/customizations/src/aiProjectsClient.ts
import type { Client } from "@azure-rest/core-client";
import type { TokenCredential } from "@azure/core-auth";
import type { AgentsOperations } from "./agents/index.js";
import { getAgentsOperations } from "./agents/index.js";
import type { ProjectsClientOptions } from "./generated/src/projectsClient.js";
import createClient from "./generated/src/projectsClient.js";

export interface AIProjectsClientOptions extends ProjectsClientOptions {}

export class AIProjectsClient {
  private _client: Client;

  constructor(
    endpointParam: string,
    subscriptionId: string,
    resourceGroupName: string,
    projectName: string,
    credential: TokenCredential,
    options: AIProjectsClientOptions = {},
  ) {
    this._client = createClient(
      endpointParam,
      subscriptionId,
      resourceGroupName,
      projectName,
      credential,
      options,
    );

    this.agents = getAgentsOperations(this._client);
  }

  /** Static factory method from connection string */
  static fromConnectionString(
    connectionString: string,
    credential: TokenCredential,
    options: AIProjectsClientOptions = {},
  ): AIProjectsClient {
    const { endpointParam, subscriptionId, resourceGroupName, projectName } =
      AIProjectsClient.parseConnectionString(connectionString);
    return new AIProjectsClient(
      endpointParam,
      subscriptionId,
      resourceGroupName,
      projectName,
      credential,
      options,
    );
  }

  private static parseConnectionString(connectionString: string): {
    endpointParam: string;
    subscriptionId: string;
    resourceGroupName: string;
    projectName: string;
  } {
    const parts = connectionString.split(";");
    return {
      endpointParam: `https://${parts[0]}`,
      subscriptionId: parts[1],
      resourceGroupName: parts[2],
      projectName: parts[3],
    };
  }

  /** The operation groups for Agents */
  public readonly agents: AgentsOperations;
}
```

## Custom Authentication

For services requiring custom authentication flows, you can create custom policies and inject them into the client pipeline.

### Custom Credential Policy

```typescript
// sources/customizations/src/authentication/customCredentialPolicy.ts
import {
  PipelinePolicy,
  PipelineRequest,
  PipelineResponse,
  SendRequest,
} from "@azure/core-rest-pipeline";
import { KeyCredential } from "@azure/core-auth";

export interface CustomKeyCredential extends KeyCredential {
  /** Primary API key */
  key: string;
  /** Secondary subscription key */
  subscriptionKey?: string;
}

export function createCustomKeyCredentialPolicy(
  credential: CustomKeyCredential
): PipelinePolicy {
  return {
    name: "customKeyCredentialPolicy",
    sendRequest(
      request: PipelineRequest,
      next: SendRequest
    ): Promise<PipelineResponse> {
      request.headers.set("api-key", credential.key);
      if (credential.subscriptionKey) {
        request.headers.set("subscription-key", credential.subscriptionKey);
      }
      return next(request);
    },
  };
}
```

### Wrapping Client with Custom Auth

```typescript
// sources/customizations/src/myServiceClient.ts
import { TokenCredential, isTokenCredential } from "@azure/core-auth";
import type { Client } from "@azure-rest/core-client";
import createGeneratedClient from "./generated/src/myServiceClient.js";
import type { MyServiceClientOptions } from "./generated/src/myServiceClient.js";
import { createCustomKeyCredentialPolicy, CustomKeyCredential } from "./authentication/customCredentialPolicy.js";

export function createClient(
  endpoint: string,
  credential: TokenCredential | CustomKeyCredential,
  options: MyServiceClientOptions = {}
): Client {
  const client = createGeneratedClient(endpoint, credential, options);
  
  if (!isTokenCredential(credential)) {
    const authPolicy = createCustomKeyCredentialPolicy(credential);
    client.pipeline.addPolicy(authPolicy);
  }
  
  return client;
}
```

## Custom Pagination Helpers

For services with non-standard pagination patterns, you can create custom pagination helpers.

### Custom Paginate Function

```typescript
// sources/customizations/src/pagination/customPaginate.ts
import { Client, PathUncheckedResponse } from "@azure-rest/core-client";
import { 
  PagedAsyncIterableIterator, 
  getPagedAsyncIterator,
  PagedResult 
} from "../generated/src/paginateHelper.js";

export function customPaginate<TResponse extends PathUncheckedResponse>(
  client: Client,
  initialResponse: TResponse,
  options: PaginationOptions<TResponse> = {}
): PagedAsyncIterableIterator<PaginateReturn<TResponse>> {
  // Map operations that need POST for pagination
  const paginationMapping: Record<string, { method: string }> = {
    "/resources/query": { method: "POST" },
    "/items": { method: "GET" },
  };

  type TElement = PaginateReturn<TResponse>;
  let firstRun = true;

  checkPagingRequest(initialResponse);
  const { itemName, nextLinkName } = getPaginationProperties(initialResponse);

  const pagedResult: PagedResult<TElement[]> = {
    firstPageLink: "",
    getPage: async (pageLink: string) => {
      let result;
      const usesPost = paginationMapping[initialResponse.request.url]?.method === "POST";
      
      if (usesPost) {
        result = firstRun
          ? initialResponse
          : await client.pathUnchecked(pageLink).post({ 
              body: initialResponse.request.body 
            });
      } else {
        result = firstRun 
          ? initialResponse 
          : await client.pathUnchecked(pageLink).get();
      }
      
      firstRun = false;
      checkPagingRequest(result);
      
      const nextLink = getNextLink(result.body, nextLinkName);
      const values = getElements<TElement>(result.body, itemName);
      
      return {
        page: values,
        nextPageLink: nextLink,
      };
    },
  };

  return getPagedAsyncIterator(pagedResult);
}
```

## Long-Running Operations (LRO)

For long-running operations, use the LRO primitives from `@azure/core-lro` rather than implementing LRO logic manually.

### Using Core LRO Primitives

```typescript
// sources/customizations/src/operations/longRunning.ts
import { PollerLike, OperationState } from "@azure/core-lro";
import { createHttpPoller } from "@azure/core-lro";
import type { Client } from "@azure-rest/core-client";

export async function beginCreateResource(
  context: Client,
  resourceName: string,
  options: CreateResourceOptions = {}
): Promise<PollerLike<OperationState<ResourceOutput>, ResourceOutput>> {
  const initialResponse = await context
    .path("/resources/{resourceName}", resourceName)
    .put({ body: options });

  // Use core-lro primitives for polling
  const poller = await createHttpPoller(initialResponse, {
    intervalInMs: options.updateIntervalInMs,
    // Additional LRO configuration
  });

  return poller;
}
```

## Input Validation

Add input validation to provide better error messages before calling the service:

```typescript
// sources/customizations/src/validation/inputValidations.ts

export function validateLimit(limit: number | undefined): void {
  if (limit !== undefined && (limit < 1 || limit > 100)) {
    throw new Error("Limit must be between 1 and 100");
  }
}

export function validateOrder(order: string | undefined): void {
  const validOrders = ["asc", "desc"];
  if (order !== undefined && !validOrders.includes(order)) {
    throw new Error(`Order must be one of: ${validOrders.join(", ")}`);
  }
}

export function validateMetadata(metadata: Record<string, string> | undefined): void {
  if (metadata) {
    const entries = Object.entries(metadata);
    if (entries.length > 16) {
      throw new Error("Metadata cannot have more than 16 key-value pairs");
    }
    for (const [key, value] of entries) {
      if (key.length > 64) {
        throw new Error("Metadata keys cannot exceed 64 characters");
      }
      if (value.length > 512) {
        throw new Error("Metadata values cannot exceed 512 characters");
      }
    }
  }
}
```

## Tracing and Telemetry

Add distributed tracing support to help users diagnose issues:

```typescript
// sources/customizations/src/tracing.ts
import { TracingClient, useInstrumenter } from "@azure/core-tracing";
import type { OperationTracingOptions } from "@azure/core-tracing";

export class TracingUtility {
  private static tracingClient: TracingClient;

  static getTracingClient(): TracingClient {
    if (!this.tracingClient) {
      this.tracingClient = useInstrumenter().createTracingClient({
        namespace: "Microsoft.AIProjects",
        packageName: "@azure/ai-projects",
        packageVersion: "1.0.0",
      });
    }
    return this.tracingClient;
  }

  static async withSpan<T>(
    operationName: string,
    options: OperationTracingOptions,
    callback: (updatedOptions: any) => Promise<T>,
    onStart?: (span: any, options: any) => void,
    onEnd?: (span: any, result: T) => void
  ): Promise<T> {
    const tracingClient = this.getTracingClient();
    return tracingClient.withSpan(
      operationName,
      options,
      async (updatedOptions) => {
        const span = tracingClient.startSpan(operationName, updatedOptions);
        if (onStart) onStart(span, updatedOptions);
        
        try {
          const result = await callback(updatedOptions);
          if (onEnd) onEnd(span, result);
          return result;
        } finally {
          span.end();
        }
      }
    );
  }
}
```

## Error Handling

Create custom error types and error handling utilities:

```typescript
// sources/customizations/src/errors/customErrors.ts
import type { PathUncheckedResponse } from "@azure-rest/core-client";

export class ServiceError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number,
    public details?: any
  ) {
    super(message);
    this.name = "ServiceError";
  }
}

export function createCustomError(response: PathUncheckedResponse): ServiceError {
  const error = response.body?.error;
  return new ServiceError(
    error?.message || "An error occurred",
    error?.code || "UnknownError",
    parseInt(response.status),
    error?.details
  );
}
```

## Multi-Client Packages

For services with multiple related clients, you can organize them into a single package with separate namespaces:

### Project Structure

```
sdk/myservice/myservice/
├─ sources/
│  ├─ generated/
│  │  ├─ src/
│  │  │  ├─ mainClient.ts
│  │  │  ├─ adminClient.ts
│  ├─ customizations/
│  │  ├─ src/
│  │  │  ├─ main/
│  │  │  │  ├─ operations.ts
│  │  │  │  ├─ index.ts
│  │  │  ├─ admin/
│  │  │  │  ├─ operations.ts
│  │  │  │  ├─ index.ts
│  │  │  ├─ mainClient.ts
│  │  │  ├─ adminClient.ts
│  │  │  ├─ index.ts
```

### Exporting Multiple Clients

```typescript
// sources/customizations/src/index.ts
export { MyServiceClient } from "./mainClient.js";
export { MyServiceAdminClient } from "./adminClient.js";
export type { MyServiceClientOptions } from "./mainClient.js";
export type { MyServiceAdminClientOptions } from "./adminClient.js";

// Export types from both clients
export type * from "./main/index.js";
export type * from "./admin/index.js";
```

### Usage Example

```typescript
import { MyServiceClient, MyServiceAdminClient } from "@azure/myservice";
import { DefaultAzureCredential } from "@azure/identity";

const credential = new DefaultAzureCredential();

// Create main client for data plane operations
const client = new MyServiceClient(endpoint, credential);
const items = await client.listItems();

// Create admin client for control plane operations
const adminClient = new MyServiceAdminClient(endpoint, credential);
const config = await adminClient.updateConfiguration({ setting: "value" });
```

## Modular Customization Best Practices

When customizing modular libraries, follow these principles:

### 1. **Separation of Concerns**
- Keep generated code separate from custom code
- Use the `sources/customizations` folder for all custom logic
- Never modify generated code directly

### 2. **Type Safety**
- Define custom types that provide better developer experience
- Use converters to transform between wire and client formats
- Leverage TypeScript's type system for compile-time safety

### 3. **Progressive Enhancement**
- Provide custom operations as opt-in enhancements
- Maintain compatibility with generated operations
- Document when to use custom vs. generated operations

### 4. **Consistency with Azure SDK Guidelines**
- Follow [Azure SDK Design Guidelines](https://azure.github.io/azure-sdk/typescript_design.html)
- Use `OperationOptions` for all optional parameters
- Implement proper error handling and retry policies

### 5. **Testing**
- Write comprehensive tests for custom code
- Test both custom and generated functionality
- Include integration tests for end-to-end scenarios

### 6. **Documentation**
- Document all custom operations and their purpose
- Provide code samples for common customization scenarios
- Explain when custom operations differ from generated ones

### 7. **Avoid Over-Customization**
- Only customize when necessary to improve user experience
- Consider whether the issue should be fixed in TypeSpec/service
- Balance convenience with maintaining a clear mapping to the API

## Customization vs. RLC Customization

Modular libraries differ from RLC (Rest-Level Client) libraries in their customization approach:

| Aspect | Modular (DPG) | RLC |
|--------|--------------|-----|
| **Structure** | Layered (Client → API → Generated) | Flat (src folder) |
| **Customization Location** | `sources/customizations/` | `src/` with `generated/` |
| **Type Definitions** | Custom models with converters | Direct wire models |
| **Client Pattern** | Class-based with operation groups | Factory function |
| **Convenience Methods** | Built into client class | Separate helper functions |
| **Paging** | Custom iterators in operation groups | Custom paginate helper function |

For RLC customization patterns, see [RLC Customization Guide](./RLC-customization.md).

## Real-World Examples

For complete examples of modular library customizations, refer to these packages:

- **AI Projects**: `sdk/ai/ai-projects` - Complex customizations with multiple operation groups, custom models, and tracing
- **Health Deidentification**: `sdk/healthdataaiservices/azure-health-deidentification` - Custom authentication and LRO patterns
- **Template DPG**: `sdk/template/template-dpg` - Basic customization template structure

## Getting Help

- For questions about modular library customization, visit the [TypeSpec Discussion](https://teams.microsoft.com/l/channel/19%3a906c1efbbec54dc8949ac736633e6bdf%40thread.skype/TypeSpec%2520Discussion) channel
- Tag `@DPG TypeScript` for JavaScript/TypeScript-specific questions
- Review your API design with the [JavaScript - Reviews](https://teams.microsoft.com/l/channel/19%3a408c5f1322ee4303b02b5da9c5ff6137%40thread.skype/Language%2520-%2520JavaScript%2520-%2520Reviews) team

## Related Documentation

- [DPG Quickstart Guide](./DPG-quickstart.md)
- [Generate Code from TypeSpec](./Generate-code-from-TypeSpec.md)
- [Steps After Code Generation](./steps-after-generations.md)
- [RLC Customization Guide](./RLC-customization.md)
- [Azure SDK TypeScript Design Guidelines](https://azure.github.io/azure-sdk/typescript_design.html)
