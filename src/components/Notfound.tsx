import { Link } from 'react-router-dom'
import { APP_ROUTES } from '../utilis/constants'

export default function Notfound() {
  return (
    <div className='modal'>
      <div className='modal-background'></div>
      <div className='modal-card not-found'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>Not Found</p>
          <Link to={APP_ROUTES.PROJECT}>
            <button className='delete' aria-label='close'></button>
          </Link>
        </header>
        <section className='modal-card-body'>
          <p>404 Page Not Found</p>
        </section>
      </div>
    </div>
  )
}
