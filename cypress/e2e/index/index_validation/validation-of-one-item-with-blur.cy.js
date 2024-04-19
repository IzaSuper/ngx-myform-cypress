
describe("check options - validation of one item with blur", () => {
  beforeEach(() => {
    cy.visit('/index')
  });
  it('input only second item', () => {
    cy.get('#num2').type('10')
    cy.get('.small2').should('not.exist')
    cy.focusAndBlurNumber1()
    cy.validationEqual()
    cy.get('#num2').then($el => $el[0].checkValidity()).should('be.true')
    cy.get('#num1').then($el => $el[0].checkValidity()).should('be.false')
  });
  it('input only first item', () => {
    cy.get('#num1').type('4')
    cy.get('.small1').should('not.exist')
    cy.focusAndBlurNumber2()
    cy.validationEqual()
    cy.get('#num2').then($el => $el[0].checkValidity()).should('be.false')
    cy.get('#num1').then($el => $el[0].checkValidity()).should('be.true')
  });
  it('input no item', () => {
    cy.focusAndBlurNumber1()
    cy.focusAndBlurNumber2()
    cy.validationEqual()
    cy.get('#num1').then($el => $el[0].checkValidity()).should('be.false')
    cy.get('#num2').then($el => $el[0].checkValidity()).should('be.false')
  });
})
