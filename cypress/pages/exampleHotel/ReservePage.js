import BasePage from "../BasePage";

export default class ReservePage extends BasePage {
    checkInDate() { return this.byId('date'); }
    stayNights() { return this.byId('term'); }
    guests() { return this.byId('head-count'); }
    breakfast () { return this.byId('breakfast'); }
    earlyCheckIn() { return this.byId('early-check-in'); }
    sightseeing() { return this.byId('sightseeing'); }
    username() { return this.byId('username'); }
    confirmation() { return this.byId('contact'); }
    specialRequests() { return this.byId('comment'); }
    submitButton() { return this.byId('submit-button'); }
}

