describe('Error spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://harry-potter-api-gray.vercel.app/api/v1/characters', {
      statusCode: 404
    });

    cy.visit('http://localhost:3000/asdf')
  });

  it('should display error handling message ', ()=> {
    cy.get('.error-message').should('be.visible')
  });

})