export default class BasePage {
  visit(path) {
    cy.visit(path);
  }
  byDataTest(id) {
    return cy.get(`[data-test="${id}"]`);
  }
  byId(id) {
    return cy.get(`#${id}`);
  }
}