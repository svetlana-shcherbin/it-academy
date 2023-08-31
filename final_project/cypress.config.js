const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'reports/custom.js',
    specPattern: 	'cypress/test/**/*.cy.{js,jsx,ts,tsx}',
    pageLoadTimeout:6000,
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    video:false,
    trashAssetsBeforeRuns: true
  },
});
