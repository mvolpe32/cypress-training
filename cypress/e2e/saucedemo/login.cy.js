import { PageFactory } from "../../pages/PageFactory";

describe('SauceDemo - Login', ()=> {
    const login = PageFactory.sauceLogin();

    beforeEach( ()=> {
        login.visit('https://www.saucedemo.com/');
    });

    it('login valido navega al inventario', ()=> {
        cy.fixture('users').then(({ saucedemo }) => {
            login.loginAs(saucedemo.standard.username, saucedemo.standard.password);
        });
    });

    it('usuario bloqueado muestra error', ()=> {
        cy.fixture('users').then( ({ saucedemo }) => {
            login.loginAs(saucedemo.locked.username, saucedemo.locked.password);
            login.error().should('be.visible');
        });
    });

});