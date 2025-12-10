import { PageFactory } from "../../pages/PageFactory";
//cmabio para prueba git de nuevo
describe('Example Hotel - Login', ()=> {
    const hotel = PageFactory.exampleHotel();
    it('Login correcto', ()=> {
        hotel.open();
        hotel.loginBtn().click();
        hotel.email().should('be.visible').type('clark@example.com');
        hotel.password().type('password');
        cy.contains('button', '#login-button').click();
        cy.url().should('include', '/mypage');
    });
});