import BasePage from "../BasePage";

export default class DemoBlazeCatalogPage extends BasePage {
    open() { return cy.visit('https://www.demoblaze.com'); }

    //Enlaces de categoria (Phone, laptop, monitors)
    category(name) { return cy.contains('a.list-group-item', name); }

    //Contenedor de tarjetas de productos
    cards() { return cy.get('#tbodyid .card'); }

    //Busca una card por texto de titulo
    cardByTitle(title) { return cy.contains('#tbodyid .card-title', title).parents('.card'); }

    openProductByTitle(title) {
        cy.contains('#tbodyid .card-title', title).click();
    }

    //Boton Add to cart en la pagina de detalles
    addToCartButton() { return cy.contains('a', /^add to cart$/i); }

    //Link al carrito en la nav bar
    cartLink() { return cy.get('#cartur'); }
}