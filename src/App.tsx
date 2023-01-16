import { useEffect } from 'react'
import './App.css'
import Board from './components/Board'
import Nav from './components/Nav'
import { addTicket, getTickets } from './features/tickets/ticketsSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store/store'

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const { loading, error } = useSelector((state: RootState) => state.tickets)

  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])

  const test = () => {
    dispatch(addTicket({ title: 'this is a test', description: 'ticket' }))
  }

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
      {content}
      <Board />
      <button onClick={() => test()}>Click me</button>
    </>
  )
}

export default App
