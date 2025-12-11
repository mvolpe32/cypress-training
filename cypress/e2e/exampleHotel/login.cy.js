import { PageFactory } from "../../pages/PageFactory";
import users from '../../fixtures/users.json';

describe('Example Hotel - Login', ()=> {
    const hotel = PageFactory.exampleHotel();
    const { validUsers, invalidUsers } = users.exampleHotelUsers;

    validUsers.forEach(({email, password, membership}) => {
        it('Login successful', ()=> {
            hotel.open();
            hotel.openLogin().click();
            hotel.loginEmail().should('be.visible').type(email);
            hotel.loginPassword().type(password);
            hotel.submitLogin().click();
            cy.url().should('include', '/mypage');
            cy.get('#rank').should('contain.text', membership);
        });
    });
    invalidUsers.forEach(({email, password}) => {
        it('Login unsuccessful', ()=> {
            hotel.open();
            hotel.openLogin().click();
            hotel.loginEmail().should('be.visible').type(email);
            hotel.loginPassword().type(password);
            hotel.submitLogin().click();
            cy.contains('Email or password is invalid.').should('be.visible');
        });
    });
});