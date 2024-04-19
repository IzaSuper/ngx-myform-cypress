describe("hotels validation", () => {
  beforeEach(() => {
    cy.visit('/reservation')
  })
  it('two options to select are visible', () => {
    cy.get('#hotels').find('option').should($option => {
      expect($option).to.have.length(2)
      expect(($option).eq(0)).to.contain('Five Jumeirah Village')
      expect(($option).eq(0)).to.be.visible
      expect(($option).eq(1)).to.contain('TRYP by Wyndham Dubai')
      expect(($option).eq(1)).to.be.visible
    })
  });
  it('price of Jumeirah is visible', () => {
    cy.get('#hotels').select('Five Jumeirah Village')
    cy.get('#hotels').should('have.value', 'Jumeirah')
    cy.get('#message').should('contain.text', 'adult: 200$/night. child: 100$/night')
  })
  it('price of TRYP is visible', () => {
    cy.get('#hotels').select('TRYP by Wyndham Dubai')
    cy.get('#hotels').should('have.value', 'TRYP')
    cy.get('#message').should('contain.text', 'adult: 150$/night. child: 70$/night')
  })
  it('hotel validation - no blur ', () => {
    cy.checkDisability()
  })
  it('hotel validation - with blur ', () => {
    cy.get('#hotels').focus().blur()
    cy.checkDisability()
  })
  it('select hotel is resetting correctly', () => {
    cy.get('#hotels').select('TRYP by Wyndham Dubai')
    cy.get('#total').should('not.be.disabled')
    cy.get('#check').should('not.be.disabled')
    cy.get('#clear').click()
    cy.checkDisability()
  })
})
