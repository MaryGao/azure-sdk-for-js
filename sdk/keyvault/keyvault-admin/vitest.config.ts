// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "../../../vitest.shared.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      hookTimeout: 0,
      testTimeout: 0,
      include: ["test/**/*.spec.ts"],
    },
  }),
);
