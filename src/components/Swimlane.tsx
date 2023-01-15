import { useSelector } from 'react-redux'
import { Store } from '../store/types'
import { SwimlaneProps } from '../types/types'
import Ticket from './Ticket'

export default function Swimlane({type, color} : SwimlaneProps) {
  const tickets = useSelector((state: Store) => state[type])

  const swimlaneTickets = tickets.map((ticket, index) => (
    <Ticket key={`ticket ${index}`}id={ticket.id} title={ticket.title} description={ticket.description} status={ticket.status} />
  ))

  return (
    <section className='column'>
      <article className={`message is-${color}`}>
        <div className='message-header'>
          <p>{type}</p>
        </div>
        <div className='message-body'>{swimlaneTickets}</div>
      </article>
    </section>
  )
}
