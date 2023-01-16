import { useEffect } from 'react'
import { getTickets } from './features/tickets/ticketsSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AppDispatch, RootState } from './store/store'
import Board from './components/Board'
import Nav from './components/Nav'
import './App.css'
import { APP_ROUTES } from './utilis/constants'
import AddModal from './components/AddModal'

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
    <Router>
      <Nav />
      <Routes>
        <Route path={APP_ROUTES.PROJECT} element={<Board />}>
          <Route path={APP_ROUTES.ADD} element={<AddModal />} />
        </Route>
        <Route path={APP_ROUTES.DASH} element={<div>TBD</div>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  )
}

export default App
