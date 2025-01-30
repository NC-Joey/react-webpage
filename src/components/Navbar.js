import React, { Fragment } from 'react'
import logo from '../assets/images/code-react.png'

const Navbar = () => {
  return (
    <Fragment>
        <header className='header'>
            <div className='brand'>
                <img src={logo} alt='logo'/>
            </div>

            <nav className='navbar'>
                <ul>
                    <li>Home</li>
                    <li>FAQ</li>
                    <li>About</li>
                </ul>
            </nav>
            <div className='menuBar'><i class='bx bx-menu'></i></div>
        </header>
    </Fragment>
  )
}

export default Navbar
