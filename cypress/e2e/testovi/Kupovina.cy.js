// Test case 4 - Provera funkcionalnosti kupovine
import userData from '../../fixtures/userData.json'

describe('Test Case 4 - Kupovina proizvoda', () => {
    
    it('Provera funkcionalnosti kupovine proizvoda', () => {  
      cy.visit('https://www.saucedemo.com/');  
  
      cy.get('#user-name').type(userData.validUser.username);

      cy.get('#password').type(userData.validUser.password);
    
      cy.get('#login-button').click();
    
      cy.url().should('equals', 'https://www.saucedemo.com/inventory.html');
     
      cy.get('#add-to-cart-sauce-labs-backpack').click();
  
      cy.get('.shopping_cart_link').click();

      cy.get('.inventory_item_name').should('include.text', 'Sauce Labs Backpack')
    
      cy.get('#checkout').click();
  
      cy.get('#first-name').type(userData.customer.name);

      cy.get('#last-name').type(userData.customer.lastname);

      cy.get('#postal-code').type(userData.customer.postalcode);

      cy.get('#continue').click();
  
      cy.get('#finish').click();
  
      cy.get('.complete-header').should('include.text', 'Thank you for your order!');
    });
  });
  