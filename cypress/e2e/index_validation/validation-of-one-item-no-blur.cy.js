
describe("check options - validation of one item - no blur", () => {
  beforeEach(() => {
    cy.visit('/index')
  });
  it('input only second item', () => {
    cy.get('#num2').type('10')
    cy.smallsValidation()
    cy.validationEqual()
    cy.get('#num2').then($el => $el[0].checkValidity()).should('be.true')
    cy.get('#num1').then($el => $el[0].checkValidity()).should('be.false')
  });
  it('input only first item', () => {
    cy.get('#num1').type('4')
    cy.smallsValidation()
    cy.validationEqual()
    cy.get('#num2').then($el => $el[0].checkValidity()).should('be.false')
    cy.get('#num1').then($el => $el[0].checkValidity()).should('be.true')
  });
  it('input no item', () => {
    cy.smallsValidation()
    cy.validationEqual()
    cy.get('#num1').then($el => $el[0].checkValidity()).should('be.false')
    cy.get('#num2').then($el => $el[0].checkValidity()).should('be.false')
  });
})
