// Test case 3 - Provera da li funkcionise sortiranje inventara
import userData from '../../fixtures/userData.json'

describe('Test Case 3 - Sortiranje inventara', () => {
    
    it('Sortiranje inventara po nazivu opadajuce', () => {
        cy.visit('https://www.saucedemo.com/');  

        cy.get('#user-name').type(userData.validUser.username);

        cy.get('#password').type(userData.validUser.password);
    
        cy.get('#login-button').click();
    
        cy.url().should('equals', 'https://www.saucedemo.com/inventory.html');  

        cy.get('.product_sort_container').select('za');
  
        cy.get('.inventory_list').first().should('include.text', 'Test.allTheThings() T-Shirt (Red)');
    });
  });
  