describe('back to main button works correctly ', () => {
  it('test', () => {
    cy.visit('/reservation')
    cy.get('#back').click()
    cy.url().should('include', '/')
    cy.get('.header')
      .should('contain.text', 'Hello, this is my simple Angular application.')
  });
})
