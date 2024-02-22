describe('My First Test', () => {
    it('test no. 1', () => {

        cy.visit("https://document-generator.hestawork.com")
        //cy.title().should('eq','Docukng')
        cy.get('a[href="/auth/login"]').click();//click on login
    
    })

 
})