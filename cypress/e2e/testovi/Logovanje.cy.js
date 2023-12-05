// Test case 1 i 2 - Uspesno i neuspesno logovanje
import userData from '../../fixtures/userData.json'

beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
});


describe('Test Case 1 i 2 - Testiranje funkcionalnosti logovanja', () => {

    it('Neuspesno logovanje', () => {
      cy.get('#user-name').type(userData.validUser.username);
  
      cy.get('#password').type(userData.invalidUser.password);
  
      cy.get('#login-button').click();
  
      cy.get('.error-message-container').should('be.visible').and('include.text', 'Epic sadface: Username and password do not match any user in this service');
    });

  
    it('Uspesno logovanje', () => {
      
      cy.get('#user-name').type(userData.validUser.username);

      cy.get('#password').type(userData.validUser.password);
  
      cy.get('#login-button').click();
  
      cy.url().should('equals', 'https://www.saucedemo.com/inventory.html');
    });
});
  
  