export type CreateTicket = {
  title: string
  description: string
}

export type Ticket =  {
  id: number
  title: string
  description: string
  status: 'backlog' | 'inProgress' | 'codeReview' | 'done'
}