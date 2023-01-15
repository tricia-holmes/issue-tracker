import { createSlice, createAsyncThunk, AsyncThunk, AnyAction, configureStore } from '@reduxjs/toolkit'
import { SET_TICKETS } from '../../store/actions'
import { Ticket } from '../../store/types'
import { API_ROUTES } from '../../utilis/constants'

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
  const response = await fetch(API_ROUTES.GET_TICKETS, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const tickets = await response.json()

  return {
    backlog: tickets.filter((t: Ticket) => t.status === 'backlog'),
    inProgress: tickets.filter((t: Ticket) => t.status === 'inProgress'),
    codeReview: tickets.filter((t: Ticket) => t.status === 'codeReview'),
    done: tickets.filter((t: Ticket) => t.status === 'done'),
  }
})

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTickets.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getTickets.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.backlog = action.payload.backlog
        state.inProgress = action.payload.inProgress
        state.codeReview = action.payload.codeReview
        state.done = action.payload.done
        state.loading = 'idle'
      }
    })
    builder.addCase(getTickets.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})

export default ticketsSlice.reducer
