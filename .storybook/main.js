const { join, resolve } = require("path");
const {
  withStorybookModuleFederation,
} = require('storybook-module-federation');
const pkg = require('../package.json');

const WORKSPACEROOT = resolve(process.cwd());
// const APPROOT = join(WORKSPACEROOT, "apps", "micro", "histroy");
const APPROOT = join(__dirname, "..");

console.log("WORKSPACEROOT = ", process.cwd());
console.log("APPROOT = ", process.cwd());

const SHARED = join(WORKSPACEROOT, "shared");
const SHARED_COMPONENTS = join(SHARED, "components");
const SHARED_HELPERS = join(SHARED, "helpers");

module.exports = withStorybookModuleFederation({
  name: 'storybook',
  // remotes: pkg.infinisoft.moduleFederation.dev.remotes,
  name: 'history',
  filename: 'remoteEntry.js',
  exposes: {
    [`./History`]: resolve("apps", "micro", "history", 'src', 'core'),
  },
  shared: {
    react: {
      singleton: true,
      eager: true,
    },
    'react-dom': {
      singleton: true,
      eager: true,
    },
  },
})({
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
    builder: "webpack5"
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
          "@/config": resolve(process.cwd(), "config"),
          "@/mock": resolve(process.cwd(), "mock"),
          "@/app": resolve(process.cwd(), "app"),
          "@/core/theme/css/App.css": join("theme", "css", "App.css"),
          "@/core/router": resolve(process.cwd(), "src", "core", "router"),
          "@/core": resolve(process.cwd(), "core"),
          "@/services": resolve(process.cwd(), "services"),
          "@/components": SHARED_COMPONENTS,
          "@/helpers": SHARED_HELPERS
        }
      }
    };
  }
});
