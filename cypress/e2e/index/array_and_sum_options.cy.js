describe('Array and sum options', () => {
  beforeEach(() => {
    cy.visit('/index')
    cy.typeCorrectNumbers()
    cy.get('#createArray').click()
    cy.get('#createSum').click()
  })
  it('array and sum is correct', () => {
    cy.get('#array').should('contain.text', '5,6,7')
    cy.get('#sum').should('contain.text', '12')
  })
  it('array and sum change after type another number', () => {
    cy.get('#num1').focus().type('3')
    cy.get('#createArray').click()
    cy.get('#array').should('contain.text', '3,4,5,6,7')
    cy.get('#createSum').click()
    cy.get('#sum').should('contain.text', '10')
    cy.get('#num2').focus().type('-3')
    cy.get('#createArray').click()
    cy.get('#array').should('contain.text', '-3,-2,-1,0,1,2,3')
    cy.get('#createSum').click()
    cy.get('#sum').should('contain.text', '0')
  })
})
