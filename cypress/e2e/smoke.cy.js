/// <reference types="cypress" />
// Testear el runner y si las aserciones funcionan

describe('Smoke basico',()=>{
        it('verdadero es verdadero', ()=>{
            expect(true).to.equal(true);
        });

        it ('sumar 2 +2 = 4 (sin UI)', ()=>{
            const resultado = 2 + 2;
            expect(resultado).to.equal(4); 
        });

    });