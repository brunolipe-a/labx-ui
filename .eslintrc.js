module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-labx-ui`
  extends: ["labx-ui"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
