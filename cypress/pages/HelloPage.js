import BasePage from './BasePage';

export default class HelloPage extends BasePage {
    saludo() {
        return this.byId('saludo');
    }
    botonSumar() {
        return this.byId('btn');
    }
    resultado() {
        return this.byId('resultado');
    }

    clickSumar() {
        this.botonSumar().click();
    }
}