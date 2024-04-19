describe("date is visible", () => {
  beforeEach(() => {
    cy.visit('/index')
  })
  it('date is correct', () => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const dateNow = new Date().toLocaleDateString('en-US', options)
    cy.get('#footer').should('include.text', dateNow)
  });
  it('time is changing correctly', () => {
    cy.getCurrentDate().then((initialDate) => {
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1000)
      cy.getCurrentDate().then((newDate) => {
        expect(newDate).not.to.equal(initialDate)
      })
    })
  })
})