export type TicketProps = {
  id: number
  title: string
  description: string
  status: 'backlog' | 'inProgress' | 'codeReview' | 'done'
}

export type SwimlaneProps = {
  type: 'backlog' | 'inProgress' | 'codeReview' | 'done' 
  color: string
}

export type newTicket = {
  title: string
  description: string
}

export type AddModalProps = {
  close: () => void
}

export const ItemTypes = {
  TICKET: 'ticket',
}

export type EditFormProps = {
  close: () => void
  id: number
  title: string
  description: string
  status: 'backlog' | 'inProgress' | 'codeReview' | 'done'
}


export type ViewProps = {
  close: () => void
  title: string
  description: string
}
