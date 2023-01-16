import { Ticket } from './types'

export const SET_TICKETS = 'SET_TICKETS'
export const ADD_TICKET = 'ADD_TICKET'
export const UPDATE_TICKET = 'UPDATE_TICKET'

export type ActionTypes =
  | { type: typeof SET_TICKETS; payload: Ticket[] }
  | { type: typeof ADD_TICKET; payload: Ticket }
  | { type: typeof UPDATE_TICKET; payload: Ticket }
