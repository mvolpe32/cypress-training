import { PageFactory } from "../../pages/PageFactory";

describe('DemoBlaze - Intercept (observacion)', ()=> {
    const cat = PageFactory.demoblaze(); 

    it('espera la carga real del catalogo', ()=> {
        //intercepta la llamada que carga productos
        cy.intercept('GET', '**/entries').as('entries');

        cat.open();
        cy.wait('@entries')
            .its('response.statusCode').should('eq', 200);

        //valida que haya productos renderizados
        cat.cards().should('have.length.greaterThan', 0);
    });
});
