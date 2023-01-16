import { useEffect } from 'react'
import './App.css'
import Board from './components/Board'
import Nav from './components/Nav'
import {getTickets } from './features/tickets/ticketsSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store/store'

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const { loading, error } = useSelector((state: RootState) => state.tickets)

  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])

  let content // need to add ui for loading or if there is an error
  if (loading === 'pending') {
    content = <div>Loading...</div>
  }

  if (error !== null) {
    content = <div>{error}</div>
  }
  return (
    <>
      <Nav />
      <Board />
    </>
  )
}

export default App
