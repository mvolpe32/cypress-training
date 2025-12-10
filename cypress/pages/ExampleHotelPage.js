import BasePage from "./BasePage";

export default class ExampleHotelPage extends BasePage {
    open() {
        this.visit('https://hotel-example-site.takeyaqa.dev/en-US/');
    }
    openLogin() { return cy.contains('a', 'Login'); }
    email() { return this.byId('email'); }    
    password() { return this.byId('password'); }
    submitLogin() { return this.byId('login-button'); }
    reserve() { return this.contains('a','Reserve'); }
    error()    { return this.byDataTest('error'); }
}