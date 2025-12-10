import { PageFactory } from "../../pages/PageFactory";

describe('SauceDemo - Flujo minimo de carrito', ()=> {
    const login = PageFactory.sauceLogin();
    const inventory = PageFactory.sauceInventory();

    beforeEach( ()=> {
        login.visit('https://www.saucedemo.com/');
        cy.fixture('users').then( ({ saucedemo }) => {
            login.loginAs(saucedemo.standard.username, saucedemo.standard.password);
            cy.url().should('include', '/inventory.html');
        });
    });

    it('agrega dos productos y valida el badge del carrito', ()=> {
        inventory.addItemByName('Sauce Labs Backpack');
        inventory.addItemByName('Sauce Labs Bike Light');
        inventory.cartBadge().should('have.text', '2');
    });
});