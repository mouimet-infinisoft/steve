const { resolve, join } = require("path");

const APPROOT = resolve(__dirname, "..");

const SHARED = join(APPROOT, "..", "..", "..", "shared");
const PKGJSON = join(APPROOT, "package.json");
const ARTEFACT = join(APPROOT, "artefacts");
const SHARED_COMPONENTS = join(SHARED, "components");
const SHARED_HELPERS = join(SHARED, "helpers");
const SHARED_PLUGINS = join(SHARED, "plugins");

const paths = {
  APPROOT,
  SHARED,
  PKGJSON,
  SHARED_COMPONENTS,
  SHARED_HELPERS,
  SHARED_PLUGINS,
  ARTEFACT
};

const debug_paths = () => {
  console.log(`paths configuration`);
  Object.entries(paths).forEach(([k, v]) => {
    console.log(`${k} ${v}`);
  });
};

module.exports = {...paths, debug_paths};
