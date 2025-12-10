import { PageFactory } from "../../pages/PageFactory";

describe('Example Hotel - Reserve a room successfully with login', ()=> {
    const hotel = PageFactory.exampleHotel();

    beforeEach(()=> {
        //Login previo a cada caso y click en Reserve
        hotel.open();
        hotel.openLogin().click();
        hotel.email().should('be.visible').type('clark@example.com');
        hotel.password().type('password');
        hotel.submitLogin().click();
        cy.url().should('include', '/mypage');
        hotel.reserve().click();
    });


    it('Reserve a room - Plan with special offers', ()=> {
        hotel.reserveButton(0).invoke('removeAttr', 'target').click();
        cy.url().should('include', 'plan-id=0');
        cy.contains('h2', 'Reservation');
    });

    
});


describe('Example Hotel - Reserve a room successfully without login', ()=> {
    const hotel = PageFactory.exampleHotel();


    
});