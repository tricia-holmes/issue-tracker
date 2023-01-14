import { TicketProps } from '../types/types'

export default function Ticket({ id, title, description, status }: TicketProps) {
  return (
    <div className='ticket'>
      <div className='ticket-content'>
        <span>{title}</span>
      </div>
    </div>
  )
}
