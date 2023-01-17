import { Outlet, useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../utilis/constants'
import Swimlane from './Swimlane'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getTickets } from '../features/tickets/ticketsSlice'
import store, { AppDispatch, RootState } from '../store/store'
import { useSelector } from 'react-redux'

export default function Board() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { error } = useSelector((state: RootState) => state.tickets)

  useEffect(() => {
    dispatch(getTickets()).catch((err) => {
      navigate(APP_ROUTES.ERROR)
    })

    if (error !== null) {
      navigate('/error')
    } else {
      navigate(APP_ROUTES.PROJECT)
    }
  }, [dispatch])

  const toggle = () => {
    if (store.getState().tickets.error !== null) {
      navigate('/error')
    } else {
      navigate(APP_ROUTES.ADD)
    }
  }

  return (
    <>
      <div className='navbar-end buttons are-medium'>
        <button className='button rose-color is-rounded mt-5 mr-6' onClick={toggle}>
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
