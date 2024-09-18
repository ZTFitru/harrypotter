describe('template spec', () => {
  beforeEach(()=> {
    cy.intercept('GET', `https://harry-potter-api-gray.vercel.app/api/v1/characters`, {
      statusCode: 200,
      fixture: 'characters'
    }).as('getAll')

    cy.intercept('GET', 'https://harry-potter-api-gray.vercel.app/api/v1/characters/ca3827f0-375a-4891-aaa5-f5e8a5bad225', {
      statusCode: 200,
      fixture: 'singleCharTest'
    }).as('squid')

    cy.intercept('GET', 'https://harry-potter-api-gray.vercel.app/api/v1/characters/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8', {
      statusCode: 200,
      fixture: 'singleCharacter'
    }).as('getSponge')

    cy.visit('http://localhost:3000/')
  })

  it('passes', () => {
    cy.get('[href="#/character/ca3827f0-375a-4891-aaa5-f5e8a5bad225"] > img').click()
    cy.get('button').should('be.visible')
    cy.get('button').click()
    cy.get('.nav-a').click()
    cy.url().should('include', '#/mylist')
    cy.get('li.army-list').should('have.length', 1)
    cy.get('[href="#/"] > img').click()
    cy.get('[href="#/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8"] > img').click()
    cy.get('button').click()
    cy.get('.nav-a').click()
    cy.get('li.army-list').should('have.length', 2)
    cy.get(':nth-child(1) > button').click()
    cy.get('li.army-list').should('have.length', 1)
    cy.get('[href="#/"] > img').click()
    cy.get('.char-list').should('be.visible')
  })
})