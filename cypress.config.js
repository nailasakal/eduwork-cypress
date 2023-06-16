const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    userEmail: "admin",
    userPassword: "admin",
    apiUrl: "https://the-internet.herokuapp.com",
  },
});
