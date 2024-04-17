Cypress.Commands.add('getCurrentDate', () => {
  return cy.get('#footer');
})
Cypress.Commands.add('typeCheckInDate', () => {
  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate() + 1)
  const checkIn = currentDate.toISOString().split('T')[0]
  cy.get('#from').type(checkIn)
})
Cypress.Commands.add('typeCheckOutDate', () => {
  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate() + 3)
  const checkOut = currentDate.toISOString().split('T')[0]
  cy.get('#to').type(checkOut)
})

Cypress.Commands.add('typeCorrectNumbers', () => {
  cy.get('#num1').type('5')
  cy.get('#num2').type('7')
})

Cypress.Commands.add('createCorrectValidation', () => {
  cy.get('#num1').type('-10')
  cy.get('.small1').should('not.exist')
  cy.get('#num2').type('10')
  cy.get('.small2').should('not.exist')
})

Cypress.Commands.add('firstLessValidation', () => {
  cy.get('#num1').type('-20')
  cy.get('#noItem1').should('not.exist')
  cy.get('#invalidItem1').should('be.visible')
  cy.get('#invalidItem1').should('contain.text', 'Number1 has to be between -10 and 10.')
  cy.get('#num2').type('10')
  cy.get('.small2').should('not.exist')
})

Cypress.Commands.add('firstGreaterValidation', () => {
  cy.get('#num1').type('30')
  cy.get('#noItem1').should('not.exist')
  cy.get('#invalidItem1').should('be.visible')
  cy.get('#invalidItem1').should('contain.text', 'Number1 has to be between -10 and 10.')
  cy.get('#num2').type('10')
  cy.get('.small2').should('not.exist')
})

Cypress.Commands.add('secondLessValidation', () => {
  cy.get('#num1').type('-9')
  cy.get('.small1').should('not.exist')
  cy.get('#num2').type('-11')
  cy.get('#noItem2').should('not.exist')
  cy.get('#invalidItem2').should('be.visible')
  cy.get('#invalidItem2').should('contain.text', 'Number2 has to be between -10 and 10.')
})

Cypress.Commands.add('secondGreaterValidation', () => {
  cy.get('#num1').type('-9')
  cy.get('.small1').should('not.exist')
  cy.get('#num2').type('30')
  cy.get('#noItem2').should('not.exist')
  cy.get('#invalidItem2').should('be.visible')
  cy.get('#invalidItem2').should('contain.text', 'Number2 has to be between -10 and 10')

})

Cypress.Commands.add('validationEqual', () => {
  cy.get('#createArray').should('be.disabled')
  cy.get('#createSum').should('be.disabled')
})

Cypress.Commands.add('smallsValidation', () => {
  cy.get('.small1').should('not.exist')
  cy.get('.small2').should('not.exist')
})

Cypress.Commands.add('focusAndBlurNumber1', () => {
  cy.get('#num1').focus().blur()
  cy.get('.small1').should('exist')
  cy.get('.small1').should('contain.text', 'Number1 is required' )
})

Cypress.Commands.add('focusAndBlurNumber2', () => {
  cy.get('#num2').focus().blur()
  cy.get('.small2').should('exist')
  cy.get('.small2').should('contain.text', 'Number2 is required' )
})




Cypress.Commands.add('createReservation', () => {
  cy.get('#hotels').select('Jumeirah')
  cy.typeCheckInDate()
  cy.typeCheckOutDate()
  cy.get('#adults').type('2')
  cy.get('#children').type('1')
  cy.get('#total').click()
})
