import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import './App.css'
import Board from './components/Board'
import Nav from './components/Nav'
import { addTicket, setTickets } from './store/actions'
import { Ticket } from './store/types'
import { fetchTickets } from './utilis/apiCalls'

function App() {
  const dispatch = useDispatch()
  const makeTicket = (title: string, description: string) => {
    dispatch(addTicket({ title, description }))
  }
  const displayTickets = (tickets: Ticket[]) => {
    dispatch(setTickets(tickets))
  }

  useEffect(() => {
   
  }, [])

  return (
    <>
      <Nav />
      <Board />
      <button onClick={() => makeTicket('this is my title', 'this is a desc')}>Click me</button>
    </>
  )
}

export default App
