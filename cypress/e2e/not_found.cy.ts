describe('Show when a user goes to an non-existent url', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:8000/tickets', { fixture: 'tickets_data.json' })
    cy.visit('localhost:5173/')
  })

  it('Should show a user an error if something goes wrong on page load', () => {
    cy.visit('localhost:5173/cats')
    cy.get('.modal-card-title').should('contain', 'Not Found')
    cy.get('.modal-card-body').should('contain', '404 Page Not Found')
  })

  it('Should allow a user to go back to the main project page', () => {
    cy.visit('localhost:5173/cats')
    cy.get('.delete').click()
    cy.get('.columns >:nth-child(4)').should('contain', 'Done')
  })
})
