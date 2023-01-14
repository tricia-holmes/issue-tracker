import logo from '../assets/gradient.png'

export default function Nav() {
  return (
    <nav className='navbar has-shadow is-warning'>
      <div className='navbar-brand'>
        <img src={logo} alt='placeholder-icon' style={{ maxHeight: '70px' }} className='py-2 px-2' />
      </div>
    </nav>
  )
}
