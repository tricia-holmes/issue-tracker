import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useDrag } from 'react-dnd'
import { useDispatch } from 'react-redux'
import { getTickets, updateTicket } from '../features/tickets/ticketsSlice'
import { AppDispatch } from '../store/store'
import { ItemTypes, TicketProps } from '../types/types'
import EditForm from './EditForm'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

export default function Ticket({ id, title, description, status }: TicketProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TICKET,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult() as any
      if (item && dropResult) {
        const name = dropResult.name
        dispatch(updateTicket({ id, title, description, status: name, prevStatus: status }))
        console.log(dropResult)
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {isOpen && <EditForm close={toggle} id={id} title={title} description={description} status={status} />}
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: 'bold',
          cursor: 'move',
        }}
      >
        <div className='ticket'>
          <div className='ticket-content'>
            <button data-id='pencil' className='icon position' onClick={toggle}>
            <FontAwesomeIcon icon={faPencil} />
            </button>
            <span>{title}</span>
          </div>
        </div>
      </div>
    </>
  )
}
