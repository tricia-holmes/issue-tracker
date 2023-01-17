import { ViewProps } from '../types/types'

export default function View({ close, title, description }: ViewProps) {
  return (
    <div className='modal'>
      <div className='modal-background'></div>
      <div className='modal-content details'>
        <article className='message'>
          <div className='message-header'>
            <p>Ticket Details</p>
            <button onClick={close} className='delete' aria-label='delete'></button>
          </div>
          <div className='message-body details-format pb-6'>
            <div className='content is-medium pb-4'>
              <div className='block'>
                <strong>
                  <p>{title}</p>
                </strong>
              </div>
              <div className='block'>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
