import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='modal'>
      <div className='modal-background'></div>
      <div className='modal-content error'>
        <article className='message is-danger'>
          <div className='message-header'>
            <p>ERROR</p>
            <Link to='/'>
              <button className='delete' aria-label='delete'></button>
            </Link>
          </div>
          <div className='message-body'>
            Something went wrong, please try again later!
          </div>
        </article>
      </div>
    </div>
  )
}
