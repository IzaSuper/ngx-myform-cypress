describe('back to main button works correctly ', () => {
  it('test', () => {
    cy.visit('/index')
    cy.get('#backMain').click()
    cy.url().should('include', '/')
    cy.get('.header')
      .should('contain.text', 'Hello, this is my simple Angular application.')
  });
})
