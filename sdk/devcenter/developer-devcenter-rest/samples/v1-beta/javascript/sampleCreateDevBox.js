const { DefaultAzureCredential } = require("@azure/identity");
const { isUnexpected, getLongRunningPoller, paginate } = require("@azure-rest/developer-devcenter");
const createClient = require("@azure-rest/developer-devcenter").default;

/**
 * @summary Demonstrates creating, accessing, and deleting a Dev Box
 */
async function createDevBox() {
  // Build client and fetch required parameters
  const tenantId = process.env.AZURE_TENANT_ID || "<tenant id>";
  const devCenter = process.env.AZURE_DEVCENTER_NAME || "<devcenter name>";
  const client = createClient(tenantId, devCenter, new DefaultAzureCredential());

  // Get all projects
  const projectList = await client.path("/projects").get();
  const projects = [];
  if (isUnexpected(projectList)) {
    throw projectList.body.error;
  }

  console.log("Iterating through project results:");

  for await (const project of paginate(client, projectList)) {
    const { name } = project;
    console.log(`Received project "${name}"`);
    projects.push(project);
  }

  if (projects.length < 1) {
    throw "No projects found.";
  }

  const firstProject = projects[0];

  if (!firstProject.name) {
    throw "Project is missing name";
  }

  const projectName = firstProject.name;

  // Get all pools for the first project
  const poolList = await client.path("/projects/{projectName}/pools", projectName).get();
  const pools = [];

  if (isUnexpected(poolList)) {
    throw poolList.body.error;
  }

  console.log("Iterating through pool results:");

  for await (const pool of paginate(client, poolList)) {
    const { name } = pool;
    console.log(`Received pool "${name}"`);
    pools.push(pool);
  }

  if (pools.length < 1) {
    throw "No pools found.";
  }

  const firstPool = pools[0];

  if (!firstPool.name) {
    throw "Pool is missing name";
  }

  // Create a dev box with the first pool
  const devBoxCreateParameters = {
    contentType: "application/json",
    body: { poolName: firstPool.name },
  };

  const devBoxCreateResponse = await client
    .path(
      "/projects/{projectName}/users/{userId}/devboxes/{devBoxName}",
      projectName,
      "me",
      "TestDevBox"
    )
    .put(devBoxCreateParameters);

  if (isUnexpected(devBoxCreateResponse)) {
    throw new Error(devBoxCreateResponse.body.error.message);
  }

  const devBoxCreatePoller = getLongRunningPoller(client, devBoxCreateResponse);
  const devBoxCreateResult = await devBoxCreatePoller.pollUntilDone();

  console.log(`Provisioned dev box with state ${devBoxCreateResult.body.provisioningState}.`);

  // Get the connection URL to access the machine
  const remoteConnectionResult = await client
    .path(
      "/projects/{projectName}/users/{userId}/devboxes/{devBoxName}/remoteConnection",
      projectName,
      "me",
      "TestDevBox"
    )
    .get();
  if (isUnexpected(remoteConnectionResult)) {
    throw new Error(remoteConnectionResult.body.error.message);
  }

  console.log(`Connect using remote connection URL ${remoteConnectionResult.body.webUrl}.`);

  // Tear down the machine when finished
  const devBoxDeleteResponse = await client
    .path(
      "/projects/{projectName}/users/{userId}/devboxes/{devBoxName}",
      projectName,
      "me",
      "TestDevBox"
    )
    .delete();
  if (isUnexpected(devBoxDeleteResponse)) {
    throw new Error(devBoxDeleteResponse.body.error.message);
  }

  const devBoxDeletePoller = getLongRunningPoller(client, devBoxDeleteResponse);
  await devBoxDeletePoller.pollUntilDone();

  console.log(`Cleaned up dev box successfully.`);
}

createDevBox();
