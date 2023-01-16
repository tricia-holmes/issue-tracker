import { useDispatch } from 'react-redux'
import { getTickets, updateTicket } from '../features/tickets/ticketsSlice'
import { AppDispatch } from '../store/store'
import { TicketProps } from '../types/types'

export default function Ticket({ id, title, description, status }: TicketProps) {
  const dispatch = useDispatch<AppDispatch>()

  const test = () => {
    dispatch(updateTicket({ id: 1, title: 'HELLO', description: 'its crazy, how tired i am', status: 'backlog' }))
  }

  return (
    <div className='ticket'>
      <div className='ticket-content'>
        <span>{title}</span>
        <button className='icon' onClick={() => test()}>
          <i className='fa-solid fa-pencil' aria-hidden='true'></i>
        </button>
      </div>
    </div>
  )
}
