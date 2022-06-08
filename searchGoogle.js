///<reference types = "Cypress"/>



describe('First test suite', () => {
    it('Visits the google site,\'Jhonny Deep\'', () =>{
  
      cy.visit('http://google.com')
      cy.get('input.gLFyf').type('Jhonny Deep')
      cy.contains('Buscar con Google').click()
      
  
  
    })
  })
  

