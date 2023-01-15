export type TicketProps = {
  id: number
  title: string
  description: string
  status: string
}

export type SwimlaneProps = {
  type: string
  tickets: TicketProps[]
  color: string
}
