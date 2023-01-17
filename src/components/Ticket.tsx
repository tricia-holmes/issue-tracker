import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useDrag } from 'react-dnd'
import { useDispatch } from 'react-redux'
import { updateTicket } from '../features/tickets/ticketsSlice'
import store, { AppDispatch } from '../store/store'
import { ItemTypes, TicketProps } from '../types/types'
import EditForm from './Edit'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'
import View from './View'

export default function Ticket({ id, title, description, status }: TicketProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showDetails, setshowDetails] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { error } = store.getState().tickets
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

  useEffect(() => {
    if (error !== null) {
      navigate('/error')
    }
  }, [error])

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const toggleDetails = () => {
    setshowDetails(!showDetails)
  }

  return (
    <>
      {isOpen && <EditForm close={toggle} id={id} title={title} description={description} status={status} />}
      {showDetails && <View close={toggleDetails} title={title} description={description} />}
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
            <span className='ticket-hover' onClick={toggleDetails}>
              {title}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
