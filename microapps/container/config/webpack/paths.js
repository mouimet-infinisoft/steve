const { resolve, join } = require("path");

const APPROOT = resolve(__dirname, "..", "..");
const PKGJSON = join(APPROOT, "package.json");
const ARTEFACT = join(APPROOT, "artefacts");
const SHARED = join(APPROOT, "..", "..", "shared");
const SHARED_COMPONENTS = join(SHARED, "components");
const SHARED_HELPERS = join(SHARED, "helpers");

module.exports = {
  APPROOT,
  SHARED,
  PKGJSON,
  SHARED_COMPONENTS,
  SHARED_HELPERS,
  ARTEFACT
};
