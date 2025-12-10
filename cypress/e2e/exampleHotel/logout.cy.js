import { PageFactory } from "../../pages/PageFactory";
import users from '../../fixtures/users.json';

describe('Example Hotel - Logout', ()=> {
    const hotel = PageFactory.exampleHotel();
    const { validUsers } = users.exampleHotelUsers; 

    validUsers.forEach(({email, password }) => {
        it('Logout Successful', ()=> {
            hotel.open();
            hotel.openLogin().click();
            hotel.email().should('be.visible').type(email);
            hotel.password().type(password);
            hotel.submitLogin().click();
            //Chequeo que el login fue exitoso
            cy.url().should('include', '/mypage');

            //Hago el logout
            cy.contains('button', 'Logout').click();

            //Verifico que el logout fue exitoso
            cy.contains('a', 'Mypage').should('not.be.visible');
            cy.url().should('eq', 'https://hotel-example-site.takeyaqa.dev/en-US/index.html?');    
        });        
    });
});