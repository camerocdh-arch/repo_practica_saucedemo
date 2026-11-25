describe('MOD-01 | Login - User Authentication (SauceDemo)', () => {
  const baseUrl = 'https://www.saucedemo.com/';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  // AC-LOGIN-01: Login with valid credentials
  it('AC-LOGIN-01: The user can log in with valid credentials', () => {
    cy.get('#user-name').should('be.visible').type('standard_user');
    cy.get('#password').should('be.visible').type('secret_sauce');
    cy.get('#login-button').should('be.visible').click();
    cy.url().should('include', '/inventory.html');

  })
  // AC-LOGIN-04:Submission without username
  it.only('AC-LOGIN-04: The system validates form submission without a username', () => {
    cy.get('#user-name').should('be.visible');
    cy.get('#password').should('be.visible').type('secret_sauce');
     cy.get('#login-button').should('be.visible').click();
     cy.get('.error-message-container').should('be.visible')
     cy.url().should('eq', baseUrl);
    cy.get('[data-test="error"]').should('be.visible').and('have.text', 'Epic sadface: Username is required');

  })
})