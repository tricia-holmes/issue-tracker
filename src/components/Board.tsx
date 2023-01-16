import { Outlet, useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../utilis/constants'
import Swimlane from './Swimlane'

export default function Board() {
  const navigate = useNavigate()

  const toggle = () => {
    navigate(APP_ROUTES.ADD)
  }

  return (
    <>
      <div className='navbar-end'>
        <button className='button rose-color mt-5 mr-6' onClick={toggle}>
          Add Ticket
          <i className='fa-solid fa-plus ml-2'></i>
        </button>
      </div>
      <section className='container cards-container'>
        <div className='level-item'>
          <div className='columns is-mobile is-centered is-multiline board-container'>
            <Swimlane type='backlog' color='warning' />
            <Swimlane type='inProgress' color='info' />
            <Swimlane type='codeReview' color='danger' />
            <Swimlane type='done' color='success' />
          </div>
        </div>
      </section>
      <Outlet />
    </>
  )
}
