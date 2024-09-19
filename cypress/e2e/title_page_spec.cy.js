describe('Title page spec', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'https://harry-potter-api-gray.vercel.app/api/v1/characters', {
      statusCode: 200,
      fixture: 'characters'
    }).as('getCharacters')

    cy.visit('http://localhost:3000/')
  })

  it('Should display the application logo', ()=> {
    cy.get('[href="#/"] > img').should('exist')
    cy.get('.door').should('exist')
    cy.get('.new-door').should('exist')
    cy.get('h1').should('be.visible').and('contain', 'OPEN THE DOOR TO ENTER')
  })

  it('Should be able to search for character', () => {
    cy.get('.door').click()
    cy.get('.search-icon').click()
    cy.get('.input-search').type('SpongeBob')
    cy.get('.char').should('exist')
    cy.get('p').contains('p', 'SpongeBob')

    cy.get('.input-search').clear()
    cy.get('.input-search').type('Plankton')
    cy.get('.no-char-message').should('be.visible').and('contain', "Sorry, can't find that character.")
  })
})