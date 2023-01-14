import Ticket from './Ticket'

export default function Swimlane() {
  return (
    <section className='column is-narrow'>
      <article className='message is-warning'>
        <div className='message-header'>
          <p>Backlog</p>
        </div>
        <div className='message-body'>
          <Ticket />
        </div>
      </article>
    </section>
  )
}
