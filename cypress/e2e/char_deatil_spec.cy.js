describe('Character details spec', () => {
  beforeEach(()=> {
    cy.intercept('GET', `https://harry-potter-api-gray.vercel.app/api/v1/characters`, {
      statusCode: 200,
      fixture: 'characters'
    }).as('getSponge')

    cy.intercept('GET', 'https://harry-potter-api-gray.vercel.app/api/v1/characters/ca3827f0-375a-4891-aaa5-f5e8a5bad225', {
      statusCode: 200,
      fixture: 'singleCharTest'
    }).as('squid')

    cy.visit('http://localhost:3000/')
  })


  it('should display overview of a character', () => {
    cy.get('.door').click()
    cy.get('[href="#/character/ca3827f0-375a-4891-aaa5-f5e8a5bad225"] > img').click()
    cy.get('h1').contains('h1', 'Squidward')
    cy.get('.char-details > :nth-child(1)').should('be.visible')
  })

  it('should be able to return home', ()=> {
    cy.get('.door').click()
    cy.get('.char-list').should('be.visible')
  })
})