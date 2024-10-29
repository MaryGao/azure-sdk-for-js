#!/usr/bin/env zx

$.verbose = true;

// Run using `npx zx ../generate.js` from package root
async function main() {
  // Steps:
  // Setup the environment
  await $`rm -rf src/generated/*`;
  await $`cp tsp-location.yaml src/generated`;

  // Generate from typespec
  await $`tsp-client update -d -o src/generated`;

  // Move the code from generated/src to generated
  await $`mv src/generated/src/* src/generated/`;

  // Remove generated/src
  await $`rm -rf src/generated/src`;

  // Remove tsp-location.yaml from generated folder
  await $`rm src/generated/tsp-location.yaml`;

  // Read the package.json file, and replace any dependency on azure/core-client with azure-rest/core-client
  const packageJson = await fs.readJson("./package.json");
  delete packageJson.dependencies["@azure/core-client"];
  packageJson.dependencies["@azure-rest/core-client"] = "^2.0.0";

  // Update core-lro to 3.0.0
  packageJson.dependencies["@azure/core-lro"] = "^3.0.0";

  await fs.writeJson("./package.json", packageJson, { spaces: 2 });
}

main().catch(console.error);
