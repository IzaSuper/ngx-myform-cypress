describe('children validation', () => {
  beforeEach(() => {
    cy.visit('/reservation')
  })
  it('default number of children is visible', () => {
    cy.get('#children').should('have.value', '0')
  });
  it('number of children is correct', () => {
    cy.get('#children').focus().type('1')
    cy.get('small').should('not.exist')
    cy.get('#adults').focus().type('40')
    cy.get('small').should('not.exist')
  });
  it('number of children is incorrect', () => {
    cy.get('#children').focus().type('-1')
    cy.get('small').should('exist').and('be.visible')
    cy.get('small').should('contain.text', 'Between 1 and 40 required.')
    cy.get('#children').focus().type('41')
    cy.get('small').should('exist').and('be.visible')
    cy.get('small').should('contain.text', 'Between 1 and 40 required.')
  });
  it('validation works after blur - number of children not required', () => {
    cy.get('#children').focus().blur()
    cy.get('small').should('not.exist')
  });
  it('unable to type 0', () => {
    cy.get('#children').focus().type('0')
    cy.get('#children').should('be.empty')
  })
  it('number of children is resetting correctly', () => {
    cy.get('#children').focus().type('10')
    cy.get('#clear').click()
    cy.get('#children').should('have.value', '0')
  });
})
