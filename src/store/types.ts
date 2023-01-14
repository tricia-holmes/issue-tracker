export interface createdTicket {
  title: string
  description: string
  status: string
}

export interface Ticket {
  id: number
  title: string
  description: string
  status: string
}

export interface Store {
  backlog: Ticket[]
  inProgress: Ticket[]
  codeReview: Ticket[]
  done: Ticket[]
  newTicket: any
  // ticket: any
}
