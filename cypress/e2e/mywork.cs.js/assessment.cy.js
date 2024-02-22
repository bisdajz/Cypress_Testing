describe('Data Verification - Reversals Total Values', () => {
    it('should verify the accuracy of total values', () => {
      // Visit the login page and login
      cy.visit('https://app.tryloop.ai/login/password');
      cy.wait(3000); // 5000 milliseconds = 5 seconds

     cy.get('input[type="text"]').type("ga-engineer-assignment@test.com");  //input[@id=':r1:']
     // cy.get('#:r1:').type('ga-engineer-assignment@test.com');
      //cy.xpath("//input[@id=':r1:']").then($input => {
  // Do something with the input element, for example:
  // Type text into the input field
     // cy.wrap($input).type('ga-engineer-assignment@test.com');
     cy.get('input[type="password"]').type('QApassword123$');
     // cy.get('#:r2:').type('QApassword123$');
      cy.get('button[data-testid="login-button"]').click();
  
      // Wait for login and navigate to the specified URL
      //cy.url().should('include', '/chargebacks/stores/view');
  
      // Wait for the table to load and verify total values
     // cy.get('table').within(() => {
        // Assuming the table structure and classes for rows and columns
      //  cy.contains('tbody tr', 'Grand Total').within(() => {
          // Validate total values for each month and location
        //  cy.get('td').eq(1).should('contain.text', '$0.00');
        //  cy.get('td').eq(2).should('contain.text', '$80.00');
        //  cy.get('td').eq(3).should('contain.text', '$8996.78');
          // Add assertions for other months and locations as needed
        });
      });

  //});
 // });
  