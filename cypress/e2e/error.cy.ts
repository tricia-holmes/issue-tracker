describe('Show user an error if a response is not ok', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:8000/tickets', { fixture: 'tickets_data.json' })

    cy.visit('localhost:5173/')
  })

  it('Should show a user an error if something goes wrong on page load', () => {
    cy.intercept('GET', 'http://localhost:8000/tickets', { statusCode: 500 })
    cy.get('.message-header').should('contain', 'ERROR')
    cy.get('.error').should('contain', 'Something went wrong, please try again later!')
  })

  it('Should show a user an error if something goes wrong when adding a new ticket', () => {
    cy.intercept('POST', 'http://localhost:8000/tickets', { statusCode: 500 })

    cy.get('.button.rose-color').click().get('input[name="addTitle"]').type('Error message displayed when attempting to submit form')
    cy.get('input[name="addDescription"]')
      .type('This issue is preventing users from successfully submitting the form and needs to be resolved as soon as possible.')
      .get('.button.is-success')
      .click()
    cy.get('.message-header').should('contain', 'ERROR')
    cy.get('.error').should('contain', 'Something went wrong, please try again later!')
  })

  it('Should show a user an error if something goes wrong when updating a ticket', () => {
    cy.intercept('PUT', 'http://localhost:8000/tickets/1', { statusCode: 500 })

    cy.get('.columns >:nth-child(1)')
      .find('.ticket')
      .find('button')
      .click()
      .get('input[name="title"]')
      .clear()
      .type('CHANGE TITLE')
      .get('.button.is-success')
      .click()
    cy.get('.message-header').should('contain', 'ERROR')
    cy.get('.error').should('contain', 'Something went wrong, please try again later!')
  })
})
