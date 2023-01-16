import { useDrop } from 'react-dnd'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { ItemTypes, SwimlaneProps } from '../types/types'
import Ticket from './Ticket'

export default function Swimlane({ type, color }: SwimlaneProps) {
  const tickets = useSelector((state: RootState) => state.tickets[type])
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.TICKET,
    drop: () => ({ name: `${type}` }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const isActive = canDrop && isOver
  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }

  const swimlaneTickets = tickets.map((ticket) => (
    <Ticket key={`ticket ${ticket.id}`} id={ticket.id} title={ticket.title} description={ticket.description} status={ticket.status} />
  ))

  return (
    <div ref={drop} style={{ backgroundColor }}>
      <section className='column is-narrow width'>
        <article className={`message is-${color} width`}>
          <div className='message-header width'>
            <p>{type}</p>
          </div>
          <div className='message-body width'>{swimlaneTickets}</div>
        </article>
      </section>
    </div>
  )
}
