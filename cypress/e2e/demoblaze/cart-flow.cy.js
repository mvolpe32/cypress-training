import { PageFactory } from "../../pages/PageFactory";

describe('DemoBlaze - flujo: filtrar, ver detalle, agregar al carrito', ()=> {
    const cat = PageFactory.demoblaze();

    it('Laptops - Abrir detalle - Add to cart - Validar en el carrito', ()=> {
        //Sincronizamos con la red
        cy.intercept('GET', '**/entries').as('entries');  //catalogo inicial
        cy.intercept({ method: 'POST', url: '**/bycat' }).as('laptops');
        
        cat.open();
        cy.wait('@entries').its('response.statusCode').should('eq', 200);

        //Filtro por categoria
        cat.category('Laptops').click();
        cy.wait('@laptops').its('response.statusCode').should('eq', 200);

        //Elijo un producto tipico de laptops - Uso regex por si cambia el titulo
        const target = /sony vaio|dell|macbook/i;

        //Abro el primero que coincide
        cy.contains('#tbodyid .card-title', target)
        .first().then( $el => {
            const productName = $el.text().trim();
            cy.wrap($el).click(); //abro detalle del producto
                
            //Intercept de Add to cart (STUB opcional, solo veo si existe)
            cy.intercept('POST', '**/addtocart').as('addToCart');

            //Clickeo en Add to cart y valido el alert del sitio
            //Demoblaze dispara window.alert('Product added') al exito
            cy.window().then(win => {
                cy.stub(win, 'alert').as('alert');
            });  
            
            cat.addToCartButton().click();
            cy.wait('@addToCart', { timeout: 10000 }).its('response.statusCode').should('be.oneOf', [200, 201]);

            cy.get('@alert').should('have.been.called');
            cy.get('@alert').its('firstCall.args.0').should('match', /added/i);

            //Voy al carrito y valido que el producto este ahi
            cat.cartLink().click();
            cy.get('#tbodyid').should('contain.text', productName);
        });
    });
});