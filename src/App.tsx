import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Board from './components/Board'
import Nav from './components/Nav'
import Error from './components/Error'
import './App.css'
import { APP_ROUTES } from './utilis/constants'
import AddModal from './components/Add'
import Notfound from './components/Notfound'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path={APP_ROUTES.PROJECT} element={<Board />}>
          <Route path={APP_ROUTES.ADD} element={<AddModal />} />
        </Route>
        <Route path={APP_ROUTES.DASH} element={<div>TBD</div>} />
        <Route path={APP_ROUTES.ERROR} element={<Error />}></Route>
        <Route path='*' element={<Notfound />} />
      </Routes>
    </Router>
  )
}

export default App
