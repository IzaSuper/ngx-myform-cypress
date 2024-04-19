describe('Reservation options', () => {
  let initialCheckIn, initialCheckOut, checkOut2;
  beforeEach(() => {
    const today = new Date()
    initialCheckIn = today.toISOString().split('T')[0]
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    initialCheckOut = tomorrow.toISOString().split('T')[0]
    const edit = new Date(today)
    edit.setDate(edit.getDate() + 5)
    checkOut2 = edit.toISOString().split('T')[0]
    cy.visit('/reservation')
    cy.createReservation()
  })
  it('create simple reservation', () => {
    cy.get('#total').should('not.be.disabled')
    cy.get('#total').should('contain.text', 'Total cost is 1000$')
    cy.get('#check').should('not.be.disabled')
  })
  it('price automatically changes after change parameters', () => {
    cy.get('#adults').focus().type('3')
    cy.get('#total').should('contain.text', 'Total cost is 1400$')
    cy.get('#hotels').select('TRYP')
    cy.get('#total').should('contain.text', 'Total cost is 1040$')
    cy.get('#children').focus().type('3')
    cy.get('#total').should('contain.text', 'Total cost is 1320$')
    cy.get('#from').type(initialCheckIn)
    cy.get('#total').should('contain.text', 'Total cost is 660$')
    cy.get('#to').type(checkOut2)
    cy.get('#total').should('contain.text', 'Total cost is 3300$')
  })
})
