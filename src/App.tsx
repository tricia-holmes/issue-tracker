import { useEffect } from 'react'
import './App.css'
import Board from './components/Board'
import Nav from './components/Nav'
import { addTicket } from './store/actions'

import { getTickets } from './features/tickets/ticketsSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store/store'
// import { useAppDispatch, useAppSelector } from './hooks/redux/hooks'

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const { loading, error } = useSelector((state: RootState) => state.tickets)
  const makeTicket = (title: string, description: string) => {
    dispatch(addTicket({ title, description }))
  }

  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])

  let content
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
      <button onClick={() => makeTicket('this is my title', 'this is a desc')}>Click me</button>
    </>
  )
}

export default App
