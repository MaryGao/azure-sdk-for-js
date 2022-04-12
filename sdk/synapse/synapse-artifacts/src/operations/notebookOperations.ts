/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { createSpan } from "../tracing";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { NotebookOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreTracing from "@azure/core-tracing";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ArtifactsClient } from "../artifactsClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  NotebookResource,
  NotebookGetNotebooksByWorkspaceNextOptionalParams,
  NotebookGetNotebooksByWorkspaceOptionalParams,
  NotebookGetNotebookSummaryByWorkSpaceNextOptionalParams,
  NotebookGetNotebookSummaryByWorkSpaceOptionalParams,
  NotebookGetNotebooksByWorkspaceResponse,
  NotebookGetNotebookSummaryByWorkSpaceResponse,
  NotebookCreateOrUpdateNotebookOptionalParams,
  NotebookCreateOrUpdateNotebookResponse,
  NotebookGetNotebookOptionalParams,
  NotebookGetNotebookResponse,
  NotebookDeleteNotebookOptionalParams,
  ArtifactRenameRequest,
  NotebookRenameNotebookOptionalParams,
  NotebookGetNotebooksByWorkspaceNextResponse,
  NotebookGetNotebookSummaryByWorkSpaceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing NotebookOperations operations. */
export class NotebookOperationsImpl implements NotebookOperations {
  private readonly client: ArtifactsClient;

  /**
   * Initialize a new instance of the class NotebookOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ArtifactsClient) {
    this.client = client;
  }

  /**
   * Lists Notebooks.
   * @param options The options parameters.
   */
  public listNotebooksByWorkspace(
    options?: NotebookGetNotebooksByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<NotebookResource> {
    const iter = this.getNotebooksByWorkspacePagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getNotebooksByWorkspacePagingPage(options);
      }
    };
  }

  private async *getNotebooksByWorkspacePagingPage(
    options?: NotebookGetNotebooksByWorkspaceOptionalParams
  ): AsyncIterableIterator<NotebookResource[]> {
    let result = await this._getNotebooksByWorkspace(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getNotebooksByWorkspaceNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getNotebooksByWorkspacePagingAll(
    options?: NotebookGetNotebooksByWorkspaceOptionalParams
  ): AsyncIterableIterator<NotebookResource> {
    for await (const page of this.getNotebooksByWorkspacePagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists a summary of Notebooks.
   * @param options The options parameters.
   */
  public listNotebookSummaryByWorkSpace(
    options?: NotebookGetNotebookSummaryByWorkSpaceOptionalParams
  ): PagedAsyncIterableIterator<NotebookResource> {
    const iter = this.getNotebookSummaryByWorkSpacePagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getNotebookSummaryByWorkSpacePagingPage(options);
      }
    };
  }

  private async *getNotebookSummaryByWorkSpacePagingPage(
    options?: NotebookGetNotebookSummaryByWorkSpaceOptionalParams
  ): AsyncIterableIterator<NotebookResource[]> {
    let result = await this._getNotebookSummaryByWorkSpace(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getNotebookSummaryByWorkSpaceNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getNotebookSummaryByWorkSpacePagingAll(
    options?: NotebookGetNotebookSummaryByWorkSpaceOptionalParams
  ): AsyncIterableIterator<NotebookResource> {
    for await (const page of this.getNotebookSummaryByWorkSpacePagingPage(
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists Notebooks.
   * @param options The options parameters.
   */
  private async _getNotebooksByWorkspace(
    options?: NotebookGetNotebooksByWorkspaceOptionalParams
  ): Promise<NotebookGetNotebooksByWorkspaceResponse> {
    const { span } = createSpan(
      "ArtifactsClient-_getNotebooksByWorkspace",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { options },
        getNotebooksByWorkspaceOperationSpec
      );
      return result as NotebookGetNotebooksByWorkspaceResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Lists a summary of Notebooks.
   * @param options The options parameters.
   */
  private async _getNotebookSummaryByWorkSpace(
    options?: NotebookGetNotebookSummaryByWorkSpaceOptionalParams
  ): Promise<NotebookGetNotebookSummaryByWorkSpaceResponse> {
    const { span } = createSpan(
      "ArtifactsClient-_getNotebookSummaryByWorkSpace",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { options },
        getNotebookSummaryByWorkSpaceOperationSpec
      );
      return result as NotebookGetNotebookSummaryByWorkSpaceResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Creates or updates a Note Book.
   * @param notebookName The notebook name.
   * @param notebook Note book resource definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateNotebook(
    notebookName: string,
    notebook: NotebookResource,
    options?: NotebookCreateOrUpdateNotebookOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<NotebookCreateOrUpdateNotebookResponse>,
      NotebookCreateOrUpdateNotebookResponse
    >
  > {
    const { span } = createSpan(
      "ArtifactsClient-beginCreateOrUpdateNotebook",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NotebookCreateOrUpdateNotebookResponse> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as NotebookCreateOrUpdateNotebookResponse;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { notebookName, notebook, options },
      createOrUpdateNotebookOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a Note Book.
   * @param notebookName The notebook name.
   * @param notebook Note book resource definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateNotebookAndWait(
    notebookName: string,
    notebook: NotebookResource,
    options?: NotebookCreateOrUpdateNotebookOptionalParams
  ): Promise<NotebookCreateOrUpdateNotebookResponse> {
    const poller = await this.beginCreateOrUpdateNotebook(
      notebookName,
      notebook,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a Note Book.
   * @param notebookName The notebook name.
   * @param options The options parameters.
   */
  async getNotebook(
    notebookName: string,
    options?: NotebookGetNotebookOptionalParams
  ): Promise<NotebookGetNotebookResponse> {
    const { span } = createSpan("ArtifactsClient-getNotebook", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { notebookName, options },
        getNotebookOperationSpec
      );
      return result as NotebookGetNotebookResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Deletes a Note book.
   * @param notebookName The notebook name.
   * @param options The options parameters.
   */
  async beginDeleteNotebook(
    notebookName: string,
    options?: NotebookDeleteNotebookOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const { span } = createSpan(
      "ArtifactsClient-beginDeleteNotebook",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as void;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { notebookName, options },
      deleteNotebookOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a Note book.
   * @param notebookName The notebook name.
   * @param options The options parameters.
   */
  async beginDeleteNotebookAndWait(
    notebookName: string,
    options?: NotebookDeleteNotebookOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteNotebook(notebookName, options);
    return poller.pollUntilDone();
  }

  /**
   * Renames a notebook.
   * @param notebookName The notebook name.
   * @param request proposed new name.
   * @param options The options parameters.
   */
  async beginRenameNotebook(
    notebookName: string,
    request: ArtifactRenameRequest,
    options?: NotebookRenameNotebookOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const { span } = createSpan(
      "ArtifactsClient-beginRenameNotebook",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as void;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { notebookName, request, options },
      renameNotebookOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Renames a notebook.
   * @param notebookName The notebook name.
   * @param request proposed new name.
   * @param options The options parameters.
   */
  async beginRenameNotebookAndWait(
    notebookName: string,
    request: ArtifactRenameRequest,
    options?: NotebookRenameNotebookOptionalParams
  ): Promise<void> {
    const poller = await this.beginRenameNotebook(
      notebookName,
      request,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * GetNotebooksByWorkspaceNext
   * @param nextLink The nextLink from the previous successful call to the GetNotebooksByWorkspace
   *                 method.
   * @param options The options parameters.
   */
  private async _getNotebooksByWorkspaceNext(
    nextLink: string,
    options?: NotebookGetNotebooksByWorkspaceNextOptionalParams
  ): Promise<NotebookGetNotebooksByWorkspaceNextResponse> {
    const { span } = createSpan(
      "ArtifactsClient-_getNotebooksByWorkspaceNext",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { nextLink, options },
        getNotebooksByWorkspaceNextOperationSpec
      );
      return result as NotebookGetNotebooksByWorkspaceNextResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * GetNotebookSummaryByWorkSpaceNext
   * @param nextLink The nextLink from the previous successful call to the GetNotebookSummaryByWorkSpace
   *                 method.
   * @param options The options parameters.
   */
  private async _getNotebookSummaryByWorkSpaceNext(
    nextLink: string,
    options?: NotebookGetNotebookSummaryByWorkSpaceNextOptionalParams
  ): Promise<NotebookGetNotebookSummaryByWorkSpaceNextResponse> {
    const { span } = createSpan(
      "ArtifactsClient-_getNotebookSummaryByWorkSpaceNext",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { nextLink, options },
        getNotebookSummaryByWorkSpaceNextOperationSpec
      );
      return result as NotebookGetNotebookSummaryByWorkSpaceNextResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getNotebooksByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/notebooks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NotebookListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const getNotebookSummaryByWorkSpaceOperationSpec: coreClient.OperationSpec = {
  path: "/notebooksSummary",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NotebookListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateNotebookOperationSpec: coreClient.OperationSpec = {
  path: "/notebooks/{notebookName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NotebookResource
    },
    201: {
      bodyMapper: Mappers.NotebookResource
    },
    202: {
      bodyMapper: Mappers.NotebookResource
    },
    204: {
      bodyMapper: Mappers.NotebookResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.notebook,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.notebookName],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const getNotebookOperationSpec: coreClient.OperationSpec = {
  path: "/notebooks/{notebookName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NotebookResource
    },
    304: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.notebookName],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer
};
const deleteNotebookOperationSpec: coreClient.OperationSpec = {
  path: "/notebooks/{notebookName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.notebookName],
  headerParameters: [Parameters.accept],
  serializer
};
const renameNotebookOperationSpec: coreClient.OperationSpec = {
  path: "/notebooks/{notebookName}/rename",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.request,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.notebookName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getNotebooksByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NotebookListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getNotebookSummaryByWorkSpaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NotebookListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
