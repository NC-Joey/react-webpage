import React, { Fragment } from 'react'
import logo from '../assets/images/code-react.png'

const Navbar = () => {
  return (
    <Fragment>
        <header className='header'>
            <div className='brand'>
                <a href='/'><img src={logo} alt='logo'/></a>
            </div>

            <nav className='navbar'>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/faq'>FAQ</a></li>
                    <li><a href='/about'>About</a></li>
                </ul>
            </nav>
            <div className='menuBar'><i class='bx bx-menu'></i></div>
        </header>
    </Fragment>
  )
}

export default Navbar
