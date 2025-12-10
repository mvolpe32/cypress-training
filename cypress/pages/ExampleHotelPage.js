import BasePage from "./BasePage";

export default class ExampleHotelPage extends BasePage {
    open() {
        this.visit('https://hotel-example-site.takeyaqa.dev/en-US/');
    }
    email() { return this.byId('email'); }    
    password() { return this.byId('password'); }
    loginBtn() { return cy.contains('button', 'Login'); }
    error()    { return this.byDataTest('error'); }

}