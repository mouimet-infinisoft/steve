const { join, resolve } = require("path");

const WORKSPACEROOT = resolve(process.cwd());
// const APPROOT = join(WORKSPACEROOT, "apps", "micro", "histroy");
const APPROOT = join(__dirname, "..");

console.log("WORKSPACEROOT = ", process.cwd());
console.log("APPROOT = ", process.cwd());

const SHARED = join(WORKSPACEROOT, "shared");
const SHARED_COMPONENTS = join(SHARED, "components");
const SHARED_HELPERS = join(SHARED, "helpers");

module.exports = {
  stories: [
    "../docs/stories/**/*.stories.mdx",
    "../shared/components/**/*.stories.mdx",
    "../docs/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../shared/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../apps/micro/**/*.stories.mdx",
    "../apps/micro/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    console.log(`alias ` + config.resolve.alias);
    console.log(`dirname ` + __dirname);

    return {
      ...config,
      experiments: {
        topLevelAwait: true
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@/config": join(APPROOT, "config"),
          "@/mock": join(APPROOT, "mock"),
          "@/app": join(APPROOT, "app"),
          "@/core/theme/css/App.css": join("theme", "css", "App.css"),
          "@/core/router": join(APPROOT, "core", "router"),
          "@/core": join(APPROOT, "core"),
          "@/services": join(APPROOT, "services"),
          "@/components": SHARED_COMPONENTS,
          "@/helpers": SHARED_HELPERS
        }
      }
    };
  }
};
