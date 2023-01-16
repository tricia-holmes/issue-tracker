import { useState } from 'react'
import AddModal from './AddModal'
import Swimlane from './Swimlane'

export default function Board() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {isOpen && <AddModal close={toggle} />}
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
    </>
  )
}
