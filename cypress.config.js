const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'p11mfo',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
