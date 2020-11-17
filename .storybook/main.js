module.exports = {
  "stories": [
    "../projects/story-demo/src/lib/**/*.stories.mdx",
    "../projects/story-demo/src/lib/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-knobs',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-a11y'
  ]
}