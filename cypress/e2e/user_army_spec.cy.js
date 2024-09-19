describe('User List spec', () => {
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

    cy.intercept('GET', `https://harry-potter-api-gray.vercel.app/api/v1/characters/house/gryffindor`, {
      statusCode: 200,
      fixture: 'gryiffindorHouse'
    }).as('getGryiffindorHouse')

    cy.intercept('GET', 'https://harry-potter-api-gray.vercel.app/api/v1/characters/c3b1f9a5-b87b-48bf-b00d-95b093ea6390', {
      statusCode: 200,
      fixture: 'sandy'
    }).as('getSandy')

    cy.visit('http://localhost:3000/')
  })

  it('should be able to check if characters are addedto user list', () => {
    cy.get('.door').click()
    cy.get('[href="#/character/ca3827f0-375a-4891-aaa5-f5e8a5bad225"] > img').click()
    cy.get('button').should('be.visible')
    cy.get('button').click()
    cy.get('.nav-a').click()
    cy.get('li.army-list').should('have.length', 1)
    cy.get('[href="#/"] > img').click()
    cy.get('.door').should('be.visible')
  })

  it('should be able to remove a character from list', ()=> {
    cy.get('.door').click()
    cy.get('[href="#/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8"] > img').click()
    cy.get('button').click()
    cy.get('.nav-a').click()
    cy.get('p').should('contain', 'SpongeBob')
    cy.get('li.army-list').should('have.length', 1)
    cy.get('.nav-g').click()
    cy.get('[href="#/character/c3b1f9a5-b87b-48bf-b00d-95b093ea6390"] > img').click()
    cy.get('button').click()
    cy.get('.nav-a').click()
    cy.get('li.army-list').should('have.length', 2)
    cy.get(':nth-child(2) > .army-list > p').should('not.contain', 'Squidward')
    cy.get(':nth-child(1) > button').click()
    cy.get('li.army-list').should('have.length', 1)
  })
})