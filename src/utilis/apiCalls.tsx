import { API_ROUTES } from './constants'

export const fetchTickets = async () => {
  const response = await fetch(API_ROUTES.GET_TICKETS, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()

  return data
}
