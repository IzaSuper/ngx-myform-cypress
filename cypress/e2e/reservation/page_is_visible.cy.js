describe('page is visible', () => {
  beforeEach(() => {
    cy.visit('/reservation')
  })
  it('page is visible', () => {
    cy.get('#title').contains('Check and make your reservation')
  });
  it('2 buttons and 2 anchors are visible',() => {
    cy.get('button').should(($button) => {
      expect($button).to.have.length(2)
      expect($button.eq(0)).to.contain('Check total cost')
      expect($button.eq(1)).to.contain('Clear parameters')
    })
    cy.get('a').should(($a) => {
      expect($a).to.have.length(2)
      expect($a.eq(0)).to.contain('Back to main')
      expect($a.eq(1)).to.contain('Check selected hotel')
    })
  })
})
