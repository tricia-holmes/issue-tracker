import { configureStore } from '@reduxjs/toolkit'
import ticketsSlice from '../features/tickets/ticketsSlice'

const store = configureStore({
  reducer: {
    tickets: ticketsSlice,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
