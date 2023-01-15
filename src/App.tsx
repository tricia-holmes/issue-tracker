import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import Nav from './components/Nav'
import Swimlane from './components/Swimlane'

function App() {
  return (
    <>
      <Nav />
      <div className='container'>
        <Board />
      </div>
    </>
  )
}

export default App
