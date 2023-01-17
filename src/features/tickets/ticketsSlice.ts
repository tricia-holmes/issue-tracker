import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ADD_TICKET, SET_TICKETS, UPDATE_TICKET } from '../../store/actions'
import { ResponseTicket, Ticket, UpdateTicket } from '../../store/types'
import { API_ROUTES } from '../../utilis/constants'
import { newTicket } from '../../types/types'

export type InitialState = {
  backlog: Ticket[]
  inProgress: Ticket[]
  codeReview: Ticket[]
  done: Ticket[]
  loading: string
  error: null | string
}

const initialState: InitialState = {
  backlog: [],
  inProgress: [],
  codeReview: [],
  done: [],
  loading: 'idle',
  error: null,
}

export const getTickets = createAsyncThunk(SET_TICKETS, async () => {
  try {
    const response = await fetch(API_ROUTES.GET_TICKETS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(await response.json())
    }
    const tickets = await response.json()

    return {
      backlog: tickets.filter((t: Ticket) => t.status === 'backlog'),
      inProgress: tickets.filter((t: Ticket) => t.status === 'inProgress'),
      codeReview: tickets.filter((t: Ticket) => t.status === 'codeReview'),
      done: tickets.filter((t: Ticket) => t.status === 'done'),
    }
  } catch (err) {
    console.error
  }
})

export const addTicket = createAsyncThunk(ADD_TICKET, async (newTicket: newTicket) => {
  const { title, description } = newTicket
  const response = await fetch(API_ROUTES.ADD_TICKET, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, description }),
  })

  return await response.json()
})

export const updateTicket = createAsyncThunk(UPDATE_TICKET, async (changeTicket: UpdateTicket) => {
  const { id, title, description, status, prevStatus } = changeTicket
  const response = await fetch(`${API_ROUTES.UPDATE_TICKET}${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, description, status }),
  })

  return { ticket: await response.json(), prevStatus: prevStatus } as ResponseTicket
})

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},

  //get all tickets
  extraReducers: (builder) => {
    builder.addCase(getTickets.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getTickets.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.backlog = action.payload?.backlog
        state.inProgress = action.payload?.inProgress
        state.codeReview = action.payload?.codeReview
        state.done = action.payload?.done
        state.loading = 'idle'
      }
    })
    builder.addCase(getTickets.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
    //add a ticket
    builder.addCase(addTicket.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(addTicket.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.backlog.push(action.payload)
        state.loading = 'idle'
      }
    })
    builder.addCase(addTicket.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
    //update a ticket
    builder.addCase(updateTicket.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(updateTicket.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        if (action.payload) {
          const { ticket, prevStatus } = action.payload
          state[ticket.status].push(action.payload.ticket)
          let foundTicketIndex = state[prevStatus].findIndex((item) => ticket.id === item.id)
          state[prevStatus].splice(foundTicketIndex, 1)
          state.loading = 'idle'
        }
      }
    })
    builder.addCase(updateTicket.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})

export default ticketsSlice.reducer
