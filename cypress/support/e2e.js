// Import commands.js using ES2015 syntax:
import './commands'

import 'cypress-mochawesome-reporter/register';

afterEach(function () {
  if (this.currentTest?.state === 'failed') {
    cy.screenshot({ capture: 'runner' });
  }
});