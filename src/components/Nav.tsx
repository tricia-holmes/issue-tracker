import { Link } from 'react-router-dom'
import tracker from '../assets/tracker.png'
import { APP_ROUTES } from '../utilis/constants'

export default function Nav() {
  return (
    <nav className='navbar blue-color'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          <img
            src={tracker}
            alt='a gradient green icon that shows a list with checkmarks'
            style={{ maxHeight: '70px' }}
            className='py-2 px-2'
          />
        </Link>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-end'>
          <Link className='navbar-item' to={APP_ROUTES.PROJECT}>
            Project
          </Link>
          <Link to={APP_ROUTES.DASH} className='navbar-item'>
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  )
}
