import { Ticket } from './types'

export const addTicket = (swimlaneTickets: Ticket[], id: number, title: string, description: string, status: string): Ticket[] => [
  ...swimlaneTickets,
  { id, title, description, status },
]

export const updateTicket = (swimlaneTickets: Ticket[], id: number, status: string): Ticket[] =>
  swimlaneTickets.map((ticket) => ({
    ...ticket,
    status: ticket.id === id ? status : ticket.status,
  }))
