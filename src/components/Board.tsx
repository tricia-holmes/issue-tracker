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
      {isOpen && <AddModal close={toggle}/>}
      <div className='navbar-end'>
        <button className='button is-info is-light mt-5 mr-4' onClick={toggle}>
          Add Ticket
        </button>
      </div>
      <section className='container cards-container'>
        <div className='level-item'>
          <div className='columns is-mobile is-centered is-multiline board-container'>
            <Swimlane type='backlog' color='waring' />
            <Swimlane type='inProgress' color='info' />
            <Swimlane type='codeReview' color='danger' />
            <Swimlane type='done' color='success' />
          </div>
        </div>
      </section>
    </>
  )
}
