///<reference types = "Cypress"/>



describe('First test suite', () => {
  it('Visits the google site', () =>{

    cy.visit('http://google.com')
    cy.title().should('eq', 'Google')


  })
})
