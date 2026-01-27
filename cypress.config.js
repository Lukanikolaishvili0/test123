const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://testzootopia.loremipsum.ge/ka",
    supportFile: "cypress/support/e2e.js"
  }
});