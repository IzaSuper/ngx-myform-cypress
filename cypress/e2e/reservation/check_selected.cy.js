describe('check selected hotel', () => {
  beforeEach(() => {
    cy.visit('/reservation')
  })
  it('check button is disabled by default', () => {
    cy.get('#check').should('have.class', 'disabled')
  })
  it('link to Jumeirah works correctly', () => {
    cy.get('#check').should('have.attr', 'href', '');
    cy.get('#hotels').select('Jumeirah');
    cy.get('#check').should('have.attr', 'href',
      '//www.booking.com/hotel/ae/sky-villa-penthouse-five-jvc.en-gb.html');
    cy.get('#check').should('not.have.class', 'disabled')
  });
  it('link to TRYP works correctly', () => {
    cy.get('#check').should('have.attr', 'href', '');
    cy.get('#hotels').select('TRYP');
    cy.get('#check').should('have.attr', 'href',
      '//www.booking.com/hotel/ae/tryp-by-wyndham-dubai.en-gb.html');
    cy.get('#check').should('not.have.class', 'disabled')
  })
  it('check button is disabled and href has no value after reset data', () => {
    cy.get('#hotels').select('TRYP')
    cy.get('#check').should('not.have.class', 'disabled')
    cy.get('#clear').click()
    cy.get('#check').should('have.class', 'disabled')
    cy.get('#check').should('have.attr', 'href', '');
  })
})


