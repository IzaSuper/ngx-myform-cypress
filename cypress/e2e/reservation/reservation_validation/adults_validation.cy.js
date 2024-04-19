describe('adults validation', () => {
  beforeEach(() => {
    cy.visit('/reservation')
  })
  it('default number of adults is visible', () => {
    cy.get('#adults').should('have.value', '1')
  });
  it('number of adults is correct', () => {
    cy.get('#adults').focus().type('1')
    cy.get('small').should('not.exist')
    cy.get('#adults').focus().type('40')
    cy.get('small').should('not.exist')
  });
  it('number of adults is incorrect', () => {
    cy.get('#adults').focus().type('-1')
    cy.get('small').should('exist').and('be.visible')
    cy.get('small').should('contain.text', 'Between 1 and 40 required.')
    cy.get('#adults').focus().type('41')
    cy.get('small').should('exist').and('be.visible')
    cy.get('small').should('contain.text', 'Between 1 and 40 required.')
  });
  it('validation works after blur', () => {
    cy.get('#adults').focus().blur()
    cy.get('small').should('exist').and('be.visible')
    cy.get('small').should('contain.text', 'Between 1 and 40 required.')
  });
  it('unable to type 0', () => {
    cy.get('#adults').focus().type('0')
    cy.get('#adults').should('be.empty')
  })
  it('number of adults is resetting correctly', () => {
    cy.get('#adults').focus().type('10')
    cy.get('#clear').click()
    cy.get('#adults').should('have.value', '1')
  });
})
