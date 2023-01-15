import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ticketsSlice from '../features/tickets/ticketsSlice'
import { ActionTypes, ADD_TICKET, SET_TICKETS, UPDATE_TICKET } from './actions'
import { Ticket, Store } from './types'

// export const updateTicket = (tickets: Ticket[], id: number, status: string): Ticket[] =>
//   tickets.map((ticket) => ({
//     ...ticket,
//     status: ticket.id === id ? status : ticket.status,
//   }))

// function ticketReducer(
//   state: Store = {
//     backlog: [],
//     inProgress: [],
//     codeReview: [],
//     done: [],
//   },
//   action: ActionTypes
// ) {
//   switch (action.type) {
//     case SET_TICKETS:
//       return { ...state, tickets: action.payload }
//     case ADD_TICKET:
//       return { ...state, backlog: [...state.backlog, action.payload] }
//     // case UPDATE_TICKET:
//     //   return { ...state, tickets: updateTicket(state.backlog, state.ticket, action.payload) }
//     default:
//       return state
//   }
// }

const store = configureStore({
  reducer: {
    tickets: ticketsSlice,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
