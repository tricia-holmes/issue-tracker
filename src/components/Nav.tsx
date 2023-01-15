import { useSelector } from 'react-redux'
import logo from '../assets/gradient.png'
import { Store } from '../store/types'

export default function Nav() {
  const showMeState = useSelector((state: Store) => state)
  console.log("STATE", showMeState)
  return (
    <nav className='navbar has-shadow is-primary'>
      <div className='navbar-brand'>
        <a className='navbar-item'>
          <img src={logo} alt='placeholder-icon' style={{ maxHeight: '70px' }} className='py-2 px-2' />
        </a>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-end'>
          <a className='navbar-item'>Project</a>
          <a className='navbar-item'>Dashboard</a>
        </div>
      </div>
    </nav>
  )
}
