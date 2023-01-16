import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { SwimlaneProps } from '../types/types'
import Ticket from './Ticket'

export default function Swimlane({ type, color }: SwimlaneProps) {
  const tickets = useSelector((state: RootState) => state.tickets[type])

  const swimlaneTickets = tickets.map((ticket, index) => (
    <Ticket key={`ticket ${index}`} id={ticket.id} title={ticket.title} description={ticket.description} status={ticket.status} />
  ))

  return (
    <section className='column is-narrow width'>
      <article className={`message is-${color} width`}>
        <div className='message-header width'>
          <p>{type}</p>
        </div>
        <div className='message-body width'>{swimlaneTickets}</div>
      </article>
    </section>
  )
}
