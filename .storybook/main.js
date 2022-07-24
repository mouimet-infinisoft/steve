module.exports = {
  "stories": [
    "../docs/stories/**/*.stories.mdx",
    "../shared/components/**/*.stories.mdx",
    "../docs/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../shared/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-dark-mode',
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}