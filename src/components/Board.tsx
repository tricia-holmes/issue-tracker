import { Outlet, useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../utilis/constants'
import Swimlane from './Swimlane'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getTickets } from '../features/tickets/ticketsSlice'
import store, { AppDispatch } from '../store/store'

export default function Board() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { error } = store.getState().tickets

  useEffect(() => {
    dispatch(getTickets()).catch((err) => {
      navigate(APP_ROUTES.ERROR)
    })

    if (error !== null) {
      console.log(error)
      navigate('/error')
    } else {
      navigate(APP_ROUTES.PROJECT)
    }
  }, [dispatch])

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
