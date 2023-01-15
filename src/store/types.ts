export type CreateTicket = {
  title: string
  description: string
}

export type Ticket =  {
  id: number
  title: string
  description: string
  status: string
}

export type Store = {
  backlog: Ticket[]
  inProgress: Ticket[]
  codeReview: Ticket[]
  done: Ticket[]
}
