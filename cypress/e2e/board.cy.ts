describe('Test landing page', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:8000/**', { fixture: 'tickets_data.json' })
    cy.visit('localhost:5173/')
  })

  it('Should show a user a page for a project board four swimlanes with varying statuses', () => {
    cy.get('.column').contains('backlog')
    cy.get('.column').contains('inProgress') //need to update after fixing lettering
    cy.get('.column').contains('codeReview') //need to update after fixing lettering
    cy.get('.column').contains('done')
  })

  it('Should show a user all the tickets that are currently created on the project board', () => {
    cy.get('.ticket').should('contain', 'Unable to log in to account')

    cy.get('.ticket').should('contain', 'Spelling errors on contact page')
  })

  it('Should have an edit button', () => {
    cy.get('.ticket').should('contain', 'Unable to log in to account')
  })
})
