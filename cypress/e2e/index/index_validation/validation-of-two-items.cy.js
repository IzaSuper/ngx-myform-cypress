
describe("check options - typing two items", () => {
  beforeEach(() => {
    cy.visit('/index')
  });
  it('input two correct items', () => {
    cy.createCorrectValidation()
    cy.get('#createArray').should('not.be.disabled')
    cy.get('#createArray').click()
    cy.get('#array').should('contain.text', "-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10")
    cy.get('#createSum').should('not.be.disabled')
    cy.get('#createSum').click()
    cy.get('#sum').should('contain.text', 'Sum of two numbers is 0')
  });
  it('input first item less than required', () => {
    cy.firstLessValidation()
    cy.validationEqual()
    cy.get('#num1').invoke('prop', 'validationMessage')
      .should('equal', 'Value must be greater than or equal to -10.')
  });
  it('input first item greater than required', () => {
    cy.firstGreaterValidation()
    cy.validationEqual()
    cy.get('#num1').invoke('prop', 'validationMessage')
      .should('equal', 'Value must be less than or equal to 10.')
  });
  it('input second item less than required', () => {
    cy.secondLessValidation()
    cy.validationEqual()
    cy.get('#num2').invoke('prop', 'validationMessage')
      .should('equal', 'Value must be greater than or equal to -10.')
  });
  it('input second item greater than required', () => {
    cy.secondGreaterValidation()
    cy.validationEqual()
    cy.get('#num2').invoke('prop', 'validationMessage')
      .should('equal', 'Value must be less than or equal to 10.')
  });
})
