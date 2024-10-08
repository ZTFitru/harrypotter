describe('Sorted house spec', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'https://harry-potter-api-gray.vercel.app/api/v1/characters', {
      statusCode: 200,
      fixture: 'characters'
    }).as('getCharacters')

    cy.intercept('GET', `https://harry-potter-api-gray.vercel.app/api/v1/characters/house/gryffindor`, {
      statusCode: 200,
      fixture: 'gryiffindorHouse'
    }).as('getGryiffindorHouse')

    cy.intercept('GET', `https://harry-potter-api-gray.vercel.app/api/v1/characters/house/hufflepuff`, {
      statusCode: 200,
      fixture: 'singleCharTest'
    }).as('getSquid')

    cy.visit('http://localhost:3000/')
  })
  
  it('should check for characters in houses', () => {
    cy.get('.nav-g').click()
    cy.wait('@getGryiffindorHouse')
    cy.get('h1').contains('h1', 'GRYFFINDOR')
    cy.get('.house-container').should('contain', 'SpongeBob')
  })

  it('should check for character that are not in the house', ()=> {
    cy.get('.nav-g').click()
    cy.wait('@getGryiffindorHouse')
    cy.get('h1').contains('h1', 'GRYFFINDOR')
    cy.get('h1').should('not.contain', 'HUFFLEPUFF')
    cy.get('.house-container').should('not.contain', 'Squidward')
  })


})