describe('Sorted house spec', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'https://harry-potter-api-gray.vercel.app/api/v1/characters', {
      statusCode: 200,
      fixture: 'characters'
    }).as('getCharacters')

    cy.intercept('GET', `https://harry-potter-api-gray.vercel.app/api/v1/characters/house/gryffindor`, {
      statusCode: 200,
      fixture: 'singleCharacter'
    }).as('getSponge')

    cy.intercept('GET', `https://harry-potter-api-gray.vercel.app/api/v1/characters/house/hufflepuff`, {
      statusCode: 200,
      fixture: 'singleCharTest'
    }).as('getSquid')

    cy.visit('http://localhost:3000/')
  })
  
  it('should check for characters in houses', () => {
    cy.get('.nav-g').click()
    cy.get('h1').contains('h1', 'GRYFFINDOR')
    cy.get('.nav-h').click()
    cy.get('h1').contains('h1', 'HUFFLEPUFF')
    cy.get('[href="#/"] > img').click()
    cy.url().should('include', 'http://localhost:3000/#/')
    cy.get('[href="#/character/4c7e6819-a91a-45b2-a454-f931e4a7cce3"] > p').should('be.visible').and('contain', 'Patrick')
  })
})