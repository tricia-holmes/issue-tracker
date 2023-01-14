import { configureStore } from '@reduxjs/toolkit'
import { ActionTypes, ADD_TICKET, SET_TICKETS, UPDATE_TICKET } from './actions'
import { Ticket, Store, createdTicket } from './types'

export const addTicket = (tickets: Ticket[], title: string, description: string, status: string): createdTicket[] => [
  ...tickets,
  { title, description, status },
]

export const updateTicket = (tickets: Ticket[], id: number, status: string): Ticket[] =>
  tickets.map((ticket) => ({
    ...ticket,
    status: ticket.id === id ? status : ticket.status,
  }))

function ticketReducer(
  state: Store = {
    backlog: [],
    inProgress: [],
    codeReview: [],
    done: [],
    newTicket: { title: '', description: '', status: '' },
    // ticket: {id: null, title: "", description: "", status: ""}
  },
  action: ActionTypes
) {
  switch (action.type) {
    case SET_TICKETS:
      return { ...state, tickets: action.payload }
    case ADD_TICKET:
      return {
        ...state,
        newTicket: {},
        tickets: addTicket(state.backlog, state.newTicket, state.newTicket, state.newTicket),
      }
    // case UPDATE_TICKET:
    //   return { ...state, tickets: updateTicket(state.backlog, state.ticket, action.payload) }
    default:
      return state
  }
}

const store = configureStore({ reducer: ticketReducer })

export default store
