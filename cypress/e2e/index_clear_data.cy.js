describe('clear data', () => {
  beforeEach(() => {
    cy.visit('/index')
    cy.typeCorrectNumbers()
  });
  it('clear data with only array', () => {
    cy.get('#createArray').click()
    cy.get('#array').should('contain.text', '5,6,7')
    cy.get('#sum').should('not.contain.text', '12')
    cy.get('#reset').click()
    cy.get('#array').should('not.contain.text', '5,6,7')
  })
  it('clear data with only sum', () => {
    cy.get('#createSum').click()
    cy.get('#array').should('not.contain.text', '5,6,7')
    cy.get('#sum').should('contain.text', '12')
    cy.get('#reset').click()
    cy.get('#sum').should('not.contain.text', '12')
  })
  it('clear data with array and sum', () => {
    cy.get('#createArray').click()
    cy.get('#createSum').click()
    cy.get('#array').should('contain.text', '5,6,7')
    cy.get('#sum').should('contain.text', '12')
    cy.get('#reset').click()
    cy.get('#array').should('not.contain.text', '5,6,7')
    cy.get('#sum').should('not.contain.text', '12')
  })
})