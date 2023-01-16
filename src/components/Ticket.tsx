import { useEffect } from 'react'
import { useDrag } from 'react-dnd'
import { useDispatch } from 'react-redux'
import { getTickets, updateTicket } from '../features/tickets/ticketsSlice'
import { AppDispatch } from '../store/store'
import { ItemTypes, TicketProps } from '../types/types'

export default function Ticket({ id, title, description, status }: TicketProps) {
  const dispatch = useDispatch<AppDispatch>()
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TICKET,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult() as any
      if (item && dropResult) {
        const name = dropResult.name
        dispatch(updateTicket({ id, title, description, status: name }))
        console.log(dropResult)
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])

  const test = () => {
    dispatch(updateTicket({ id, title: 'hello', description: 'its crazy, how tired i am', status }))
  }

  return (
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
          <button className='icon position' onClick={() => test()}>
            <i className='fa-solid fa-pencil' aria-hidden='true'></i>
          </button>
          <span>{title}</span>
        </div>
      </div>
    </div>
  )
}
