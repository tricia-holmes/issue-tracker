import Ticket from './Ticket'

export default function Swimlane() {
  const tickets = [
    {
      id: 1,
      title: 'Error message displayed when trying to submit form',
      description:
        'Users are reporting an issue when trying to submit a form on the website. Upon clicking the submit button, an error message appears reading "An error has occurred, please try again later." This issue is affecting a number of users and is preventing them from submitting the form successfully.',
      status: 'Backlog',
    },
    {
      id: 2,
      title: 'Website not responsive on mobile devices',
      description:
        'Users are reporting an issue when trying to submit a form on the website. Upon clicking the submit button, an error message appears reading "An error has occurred, please try again later." This issue is affecting a number of users and is preventing them from submitting the form successfully.',
      status: 'Backlog',
    },
    {
      id: 3,
      title: 'Broken links found on the contact page',
      description:
        'Users are reporting an issue when trying to submit a form on the website. Upon clicking the submit button, an error message appears reading "An error has occurred, please try again later." This issue is affecting a number of users and is preventing them from submitting the form successfully.',
      status: 'Backlog',
    },
  ]

  const swimlaneTickets = tickets.map((ticket, index) => (
    <Ticket key={`ticket ${index}`}id={ticket.id} title={ticket.title} description={ticket.description} status={ticket.status} />
  ))

  return (
    <section className='column is-narrow'>
      <article className='message is-warning'>
        <div className='message-header'>
          <p>Backlog</p>
        </div>
        <div className='message-body'>{swimlaneTickets}</div>
      </article>
    </section>
  )
}
