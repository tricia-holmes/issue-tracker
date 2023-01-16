export type CreateTicket = {
  title: string
  description: string
}

export type Ticket = {
  id: number
  title: string
  description: string
  status: 'backlog' | 'inProgress' | 'codeReview' | 'done'
}

export type UpdateTicket = {
  id: number
  title: string
  description: string
  status: 'backlog' | 'inProgress' | 'codeReview' | 'done'
  prevStatus: string
}

export type ResponseTicket = {
  ticket: Ticket
  prevStatus: 'backlog' | 'inProgress' | 'codeReview' | 'done'
}
