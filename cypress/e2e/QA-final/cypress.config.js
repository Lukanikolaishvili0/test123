const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://testzootopia.loremipsum.ge/ka/profile",
    supportFile: "cypress/support/e2e.js",

    setupNodeEvents(on, config) {
      // currently not used
    },
  },
});
