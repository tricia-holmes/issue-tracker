import { useDispatch } from 'react-redux'
import { updateTicket } from '../features/tickets/ticketsSlice'
import { AppDispatch } from '../store/store'
import { TicketProps } from '../types/types'

export default function Ticket({ id, title, description, status }: TicketProps) {
  const dispatch = useDispatch<AppDispatch>()

  const test = () => {
    dispatch(updateTicket({ id: 1, title: 'hello', description: 'its crazy, how tired i am', status: 'done' }))
  }

  return (
    <div className='ticket'>
      <div className='ticket-content'>
        <button className='icon position' onClick={() => test()}>
          <i className='fa-solid fa-pencil' aria-hidden='true'></i>
        </button>
        <span>{title}</span>
      </div>
    </div>
  )
}
