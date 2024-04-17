describe('Home page is visible', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('link to array is active', () => {
    cy.get('#index').contains('Array')
    cy.get('#index').click()
    cy.url().should('include', '/index')
    cy.get('#header')
      .should('contain.text', 'Create my SUPER array from numbers from -10 to 10')
  })
  it('link to reservation is active', () => {
    cy.get('#reservation').contains('Reservation')
    cy.get('#reservation').click()
    cy.url().should('include', '/reservation')
    cy.get('#title')
      .should('contain.text', 'Check and make your reservation')
  })
})
