import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { addTicket } from '../features/tickets/ticketsSlice'
import { AppDispatch } from '../store/store'
import { APP_ROUTES } from '../utilis/constants'

export default function AddModal() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleTitleChange = (e: any) => {
    const { value } = e.target
    setTitle(value)
  }

  const handleDescChange = (e: any) => {
    const { value } = e.target
    setDescription(value)
  }

  const add = () => {
    dispatch(addTicket({ title, description }))
    navigate(APP_ROUTES.PROJECT)
  }

  return (
    <div className='modal'>
      <div className='modal-background'></div>
      <div className='modal-center'>
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>Add Ticket</p>
            <button className='delete' aria-label='close' onClick={() => navigate(APP_ROUTES.PROJECT)}></button>
          </header>
          <section className='modal-card-body'>
            <div className='field'>
              <label className='label'>Title</label>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  name='addTitle'
                  value={title}
                  placeholder='add the ticket title here!'
                  required
                  onChange={handleTitleChange}
                />
              </div>
            </div>

            <div className='field'>
              <label className='label'>Description</label>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  name='addDescription'
                  value={description}
                  placeholder='add the ticket description here!'
                  required
                  onChange={handleDescChange}
                />
              </div>
            </div>
          </section>
          <footer className='modal-card-foot'>
            <button className='button is-success' onClick={() => add()}>
              Save
            </button>
          </footer>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
