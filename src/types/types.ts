export type TicketProps = {
  id: number
  title: string
  description: string
  status: string
}

export type SwimlaneProps = {
  type: 'backlog' | 'inProgress' | 'codeReview' | 'done'
  color: string
}

export type newTicket = {
  title: string
  description: string
}
