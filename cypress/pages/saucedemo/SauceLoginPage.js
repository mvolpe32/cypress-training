import BasePage from "../BasePage";

export default class SauceLoginPage extends BasePage {
    username() { return this.byDataTest('username'); }
    password() { return this.byDataTest('password'); }
    loginBtn() { return this.byDataTest('login-button'); }
    error()    { return this.byDataTest('error'); }

    loginAs (user,password) {
        this.username().clear().type(user);
        this.password().clear().type(password);
        this.loginBtn().click();
    }
}