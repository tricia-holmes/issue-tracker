import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Swimlane from './components/Swimlane'

function App() {
  return (
    <>
      <Nav />
      <div className='container'>
        <Swimlane />
      </div>
    </>
  )
}

export default App
