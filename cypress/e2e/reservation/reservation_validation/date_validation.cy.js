describe("date validation", () => {
  let initialCheckIn, initialCheckOut, checkIn, checkOut, edit
  beforeEach(() => {
    cy.visit('/reservation')
    const today = new Date()
    initialCheckIn = today.toISOString().split('T')[0]

    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    initialCheckOut = tomorrow.toISOString().split('T')[0]

    checkIn = initialCheckOut

    edit = new Date(tomorrow)
    edit.setDate(edit.getDate() + 1)
    checkOut = edit.toISOString().split('T')[0]

  })
  it('initial date "from" is correct', () => {
    cy.get('#from').invoke('val').then((val) => {
      expect(val).to.equal(initialCheckIn);
    })
    cy.get('#from').invoke('attr', 'min').then((min) => {
      expect(min).to.equal(initialCheckIn);
    })
  });
  it('initial date "to" is correct', () => {
    cy.get('#to').invoke('val').then((val) => {
      expect(val).to.equal(initialCheckOut);
    })
    cy.get('#to').invoke('attr', 'min').then((min) => {
      expect(min).to.equal(initialCheckOut);
    })
  })
  it('date is changing correctly', () => {
    cy.get('#from').type(checkIn)
    cy.get('#to').invoke('val').then((val) => {
      expect(val).to.equal(checkOut);
    })
    cy.get('#to').invoke('attr', 'min').then((min) => {
      expect(min).to.equal(checkOut);
    })
  })
  it('date is resetting correctly', () => {
    cy.get('#from').type(checkIn)
    cy.get('#to').type(checkOut)
    cy.get('#clear').click()

    cy.get('#from').invoke('val').then((val) => {
      expect(val).to.equal(initialCheckIn);
    })
    cy.get('#from').invoke('attr', 'min').then((min) => {
      expect(min).to.equal(initialCheckIn);
    })

    cy.get('#to').invoke('val').then((val) => {
      expect(val).to.equal(initialCheckOut);
    })
    cy.get('#to').invoke('attr', 'min').then((min) => {
      expect(min).to.equal(initialCheckOut);
    })
  })
})
