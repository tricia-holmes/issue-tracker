const API_URL = import.meta.env.VITE_API_URL

export const API_ROUTES = {
  GET_TICKETS: `${API_URL}/tickets`,
  GET_SINGLE_TICKET: `${API_URL}/tickets`,
  ADD_TICKET: `${API_URL}/tickets`,
  UPDATE_TICKET: `${API_URL}/tickets/`,
}

export const APP_ROUTES = {
  PROJECT: '/',
  DASH: '/dashboard',
  ADD: '/tickets',
  UPDATE: '/tickets/:id'
}
