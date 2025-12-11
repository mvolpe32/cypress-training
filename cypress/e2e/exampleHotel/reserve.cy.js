import { PageFactory } from "../../pages/PageFactory";

describe('Example Hotel - Reserve a room successfully with login', ()=> {
    const hotel = PageFactory.exampleHotel();
    const reserveRoom = PageFactory.reserve();

    beforeEach(()=> {
        //Login previo a cada caso y click en Reserve
        hotel.open();
        hotel.openLogin().click();
        hotel.loginEmail().should('be.visible').type('clark@example.com');
        hotel.loginPassword().type('password');
        hotel.submitLogin().click();
        cy.url().should('include', '/mypage');
        hotel.reserve().click();
        hotel.reserveButton(0).invoke('removeAttr', 'target').click();
        cy.url().should('include', 'plan-id=0');
        cy.contains('h2', 'Reservation');
    });


    it('Reserve a room - Plan with special offers', ()=> {
        //Elegir fecha
        reserveRoom.getFutureDate(4);
        reserveRoom.stayNights().clear().type('3');
        reserveRoom.guests().clear().type('2');
        reserveRoom.breakfast().check();
        reserveRoom.sightseeing().check();
        reserveRoom.username().clear().type('Rita Pavone');
        reserveRoom.confirmationSelect('email');
        //Chequeo que se despliegue el combo, ingreso email
        cy.get('#email').should('be.visible').clear().type('testing@test.com');
        reserveRoom.specialRequests().clear().type('No smoking room, please.');
        reserveRoom.confirmReservation().click();
        reserveRoom.submitButton().click();
        cy.contains('h5','Thank you').should('be.visible');
        cy.contains('button','Close').and('have.class','btn-success').should('be.visible').and('not.be.disabled').click({ force: true });
        cy.url().should('include', 'https://hotel-example-site.takeyaqa.dev/en-US/plans.html');
    });
});


// describe('Example Hotel - Reserve a room successfully without login', ()=> {
//     const hotel = PageFactory.exampleHotel();
// });