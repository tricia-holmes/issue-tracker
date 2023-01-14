import { Ticket } from './types'
export const SET_TICKETS = 'SET_TICKETS'
export const ADD_TICKET = 'ADD_TICKET'
export const UPDATE_TICKET = 'UPDATE_TICKET'
// possibly need a set new ticket

export type ActionTypes =
  | { type: typeof SET_TICKETS; payload: Ticket[] }
  | { type: typeof ADD_TICKET }
  | { type: typeof UPDATE_TICKET; payload: { id: number; status: string } }

export const setTickets = (tickets: Ticket[]): ActionTypes => ({
  type: SET_TICKETS,
  payload: tickets,
})

export const addTicket = (): ActionTypes => ({ type: ADD_TICKET })
export const updateTicket = (id: number, status: string): ActionTypes => ({ type: UPDATE_TICKET, payload: { id, status } })
