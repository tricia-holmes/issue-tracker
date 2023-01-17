import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateTicket } from "../features/tickets/ticketsSlice"
import { AppDispatch } from "../store/store"
import { EditFormProps } from "../types/types"

export default function EditForm({close, id, title, description, status} : EditFormProps) {
    const dispatch = useDispatch<AppDispatch>()
    const [ediTitle, setEdiTitle] = useState(title)
    const [editDescription, setEditDescription] = useState(description)
  
    const handleEditTitleChange = (e: any) => {
      const { value } = e.target
      setEdiTitle(value)
    }
  
    const handleEditDescChange = (e: any) => {
      const { value } = e.target
      setEditDescription(value,)
    }
  
    const update = () => {
      dispatch(updateTicket({ id, title: ediTitle, description: editDescription, status, prevStatus: status}))
  
      setTimeout(() => {
        close()
      })
    }
  
    return (
      <div className='modal'>
        <div className='modal-background'></div>
        <div className='modal-center'>
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>Edit Ticket</p>
            <button className='delete' aria-label='close' onClick={close}></button>
          </header>
          <section className='modal-card-body'>
            <div className='field'>
              <label className='label'>Title</label>
              <div className='control'>
                <input className='input' name='title' type='text' value={ediTitle} required onChange={handleEditTitleChange}/>
              </div>
            </div>
  
            <div className='field'>
              <label className='label'>Description</label>
              <div className='control'>
                <input className='input' name='description' type='text' value={editDescription} required onChange={handleEditDescChange}/>
              </div>
            </div>
          </section>
          <footer className='modal-card-foot'>
            <button className='button is-success' onClick={() => update()}>
              Save
            </button>
          </footer>
        </div>
        </div>
      </div>
  )
}
