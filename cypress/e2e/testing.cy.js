describe('testing', () => {
    it('toTestInput', () => {
        cy.visit("https://www.flipkart.com/")
       // cy.get("[name='q']").type("electronic gadgets")
       //cls
       // cy.get('button[type="submit"]').click();
        cy.get('a._1TOQfO[title="Login"]').should('be.visible').click();
        //cy.get('a._2ARnXM[href="/pages/terms"]').click();
       // cy.get('input._2IX_2-').type('');
        cy.get('button._2KpZ6l').click();
        cy.contains('Please enter valid Email ID/Mobile number').should('be.visible');





        
    })
})