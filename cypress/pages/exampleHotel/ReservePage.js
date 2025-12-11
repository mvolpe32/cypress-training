import BasePage from "../BasePage";

export default class ReservePage extends BasePage {
    checkInDate() { return this.byId('date'); }
    stayNights() { return this.byId('term'); }
    guests() { return this.byId('head-count'); }
    breakfast () { return this.byId('breakfast'); }
    earlyCheckIn() { return this.byId('early-check-in'); }
    sightseeing() { return this.byId('sightseeing'); }
    username() { return this.byId('username'); }
    //confirmation() { return this.byId('contact'); }
    specialRequests() { return this.byId('comment'); }
    submitButton() { return this.byId('submit-button'); }
    submitReserveButton() { return cy.contains('button', 'Submit Reservation'); }
    
    //Funciones auxiliares
    getFutureDate(days) {
        const date = new Date();
        date.setDate(date.getDate() + days);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    confirmationSelect(value) {
        this.byId('contact')
        .select(value)
        .should('have.value', value.toLowerCase());
    }
} 

