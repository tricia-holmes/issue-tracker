import { SwimlaneProps } from '../types/types'
import Ticket from './Ticket'

export default function Swimlane({type, tickets, color} : SwimlaneProps) {

  const swimlaneTickets = tickets.map((ticket, index) => (
    <Ticket key={`ticket ${index}`}id={ticket.id} title={ticket.title} description={ticket.description} status={ticket.status} />
  ))

  return (
    <section className='column is-narrow'>
      <article className={`message is-${color}`}>
        <div className='message-header'>
          <p>{type}</p>
        </div>
        <div className='message-body'>{swimlaneTickets}</div>
      </article>
    </section>
  )
}
