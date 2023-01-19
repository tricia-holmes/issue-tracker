describe('Test landing page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:8000/tickets', { fixture: 'tickets_data.json' })
    cy.intercept('POST', 'http://localhost:8000/tickets', { fixture: 'new_ticket_data.json' })

    cy.visit('localhost:5173/')
  })

  it('Should show a user a project board with four swimlanes for varying statuses', () => {
    cy.get('.columns >:nth-child(1)').contains('backlog')
    cy.get('.columns >:nth-child(2)').contains('inProgress') //need to update after fixing lettering
    cy.get('.columns >:nth-child(3)').contains('codeReview') //need to update after fixing lettering
    cy.get('.columns >:nth-child(4)').contains('done')
  })

  it('Should show a user all the tickets that are currently created on the project board', () => {
    cy.get('.columns >:nth-child(1)').find('.ticket').should('contain', 'Unable to log in to account')
    cy.get('.columns >:nth-child(4)').find('.ticket').should('contain', 'Spelling errors on contact page')
  })

  it('Should be able to click the text of a ticket and see more details', () => {
    cy.get('.columns >:nth-child(4)').find('.ticket').should('contain', 'Spelling errors on contact page').click()
    cy.get('.message-body').contains('Spelling errors on contact page')
    cy.get('.message-body').contains('The errors are located on the contact form and in the contact information section.')
    cy.get('.delete').click()
    cy.get('img')
  })

  it('Should be able to click back to home page after viewing the details of a ticket', () => {
    cy.get('.columns >:nth-child(1)').find('.ticket').should('contain', 'Unable to log in to account').click()
    cy.get('.delete').click()
    cy.get('img')
  })

  it('Should have the ability to edit a ticket by clicking a button that ticket', () => {
    cy.intercept('PUT', 'http://localhost:8000/tickets/1', { fixture: 'update_ticket_data.json' })

    cy.get('.columns >:nth-child(1)')
      .find('.ticket')
      .find('button')
      .click()
      .get('input[name="title"]')
      .clear()
      .type('CHANGE TITLE')
      .get('.button.is-success')
      .click()
      .get('.columns >:nth-child(1)')
      .find('.ticket')
      .should('contain', 'CHANGE TITLE')
  })

  it('Should have the option to close the modal without editing a ticket', () => {
    cy.get('.columns >:nth-child(1)')
      .find('.ticket')
      .find('button')
      .click()
      .get('.delete')
      .click()
      .get('.columns >:nth-child(1)')
      .find('.ticket')
      .should('contain', 'Unable to log in to account')
  })

  it('Should have the ability to add a new ticket', () => {
    cy.get('.button.rose-color').click().get('input[name="addTitle"]').type('Error message displayed when attempting to submit form')
    cy.get('input[name="addDescription"]')
      .type('This issue is preventing users from successfully submitting the form and needs to be resolved as soon as possible.')
      .get('.button.is-success')
      .click()
      .get('.columns >:nth-child(1)')
      .find('.ticket')
      .should('contain', 'Error message displayed when attempting to submit form')
  })

  it('Should have the option to close the modal without adding a ticket', () => {
    cy.get('.button.rose-color').click().get('.delete').click().get('.columns')
  })

  it.only('Should have the ability to move a ticket from one swimlane to another', () => {
    cy.intercept('PUT', 'http://localhost:8000/tickets/1', { fixture: 'update_status_data.json' })

    cy.get('.columns >:nth-child(1)').find('.ticket').trigger('dragstart').trigger('dragleave')
    cy.get('.columns >:nth-child(2)').trigger('dragenter').trigger('dragover').trigger('drop').trigger('dragend')
    cy.get('.columns >:nth-child(2)').find('.ticket').should('contain', 'Unable to log in to account')
  })

  it.only('Should have the ability to edit a ticket, update the status by dragging and drop, and have all their informaiton persist', () => {
    cy.intercept('PUT', 'http://localhost:8000/tickets/1', { fixture: 'drag_drop_one.json' })

    cy.get('.columns >:nth-child(1)')
      .find('.ticket')
      .should('contain', 'Unable to log in to account')
      .find('button')
      .click()
      .get('input[name="title"]')
      .clear()
      .type('Fix drag and drop bug')

    cy.get('input[name="description"]')
      .clear()
      .type('Title and description are not persisting if you edit and then drag and drop.')
      .get('.button.is-success')
      .click()

    cy.intercept('PUT', 'http://localhost:8000/tickets/1', { fixture: 'drag_drop_two.json' })
    cy.get('.columns >:nth-child(1)').find('.ticket').trigger('dragstart').trigger('dragleave')
    cy.get('.columns >:nth-child(4)').trigger('dragenter').trigger('dragover').trigger('drop').trigger('dragend')
    cy.get('.columns >:nth-child(4)').find('.ticket').eq(1).should('contain', 'Fix drag and drop bug').click()
    cy.get('.message-body').contains('Fix drag and drop bug')
    cy.get('.message-body').contains('Title and description are not persisting if you edit and then drag and drop.')
    cy.get('.delete').click()
    cy.get('img')
  })
})
