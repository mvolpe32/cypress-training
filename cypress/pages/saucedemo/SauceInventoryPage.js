import BasePage from "../BasePage";

export default class SauceInventoryPage extends BasePage {
    cartBadge() { return cy.get('.shopping_cart_badge'); }

    addItemByName(name) {
        cy.contains('.inventory_item', name).within(()=> {
            cy.contains('button', /add to cart/i).click();
        });
    }

    removeItemByName(name) {
        cy.contains('.inventory_item', name).within(()=> {
            cy.contains('button', /remove/i).click();
        });
    }
}