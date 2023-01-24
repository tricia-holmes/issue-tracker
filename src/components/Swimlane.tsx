import { useEffect } from 'react'
import { useDrop } from 'react-dnd'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { RootState } from '../store/store'
import { ItemTypes, SwimlaneProps } from '../types/types'
import { APP_ROUTES } from '../utilis/constants'
import Ticket from './Ticket'

export default function Swimlane({ type, color }: SwimlaneProps) {
  const tickets = useSelector((state: RootState) => state.tickets[type])
  const navigate = useNavigate()
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.TICKET,
    drop: () => ({ name: `${type}` }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const swimlaneTickets = tickets?.map((ticket) => (
    <Ticket key={`ticket ${ticket.id}`} id={ticket.id} title={ticket.title} description={ticket.description} status={ticket.status} />
  ))

  useEffect(() => {
    if (!swimlaneTickets || !tickets) {
      navigate(APP_ROUTES.ERROR)
    }
  }, [swimlaneTickets, tickets])

  const updateTypeName = (type: string) => {
    if (type === 'inProgress') {
      return 'In Progress'
    }

    if (type === 'codeReview') {
      return 'Code Review'
    }

    return type.charAt(0).toUpperCase() + type.slice(1)
  }

  const isActive = canDrop && isOver
  let backgroundColor = 'transparent'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }

  return (
    <div ref={drop} style={{ backgroundColor }}>
      <section className='column is-narrow width'>
        <article className={`message is-${color} width`}>
          <div className='message-header width'>
            <p>{updateTypeName(type)}</p>
          </div>
          <div className='message-body width'>{swimlaneTickets}</div>
        </article>
      </section>
    </div>
  )
}
