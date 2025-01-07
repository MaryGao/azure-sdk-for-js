/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  CloudManifestFileListOptionalParams,
  CloudManifestFileListResponse,
  CloudManifestFileGetOptionalParams,
  CloudManifestFileGetResponse
} from "../models/index.js";

/** Interface representing a CloudManifestFile. */
export interface CloudManifestFile {
  /**
   * Returns a cloud specific manifest JSON file with latest version.
   * @param options The options parameters.
   */
  list(
    options?: CloudManifestFileListOptionalParams
  ): Promise<CloudManifestFileListResponse>;
  /**
   * Returns a cloud specific manifest JSON file.
   * @param verificationVersion Signing verification key version.
   * @param options The options parameters.
   */
  get(
    verificationVersion: string,
    options?: CloudManifestFileGetOptionalParams
  ): Promise<CloudManifestFileGetResponse>;
}
