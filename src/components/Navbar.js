import React, { Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/images/code-react.png'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const navStyle = ({isActive}) => {
        return {
            color: isActive? 'red': 'unset',


        }
    }
  return (
    <Fragment>
        <header className='header'>
            <div className='brand'>
                <a href='/'><img src={logo} alt='logo'/></a>
            </div>

            <nav className='navBar d-flex justify-content-end align-items-center'>
                <ul className='m-0'>
                    <li><NavLink style={navStyle} to='/'>Home</NavLink></li>
                    <li><NavLink style={navStyle} to='/faq'>FAQ</NavLink></li>
                    <li><NavLink style={navStyle} to='/about'>About</NavLink></li>
                    <li><NavLink style={navStyle} to='/shop'>Shop</NavLink></li>
                </ul>
            </nav>
            <HiOutlineMenuAlt3 className='menuBar' onClick={()=>handleNav()}/><br></br>
            
        </header>
        {nav && <aside  className='aside'>
            <div className='closeDiv'>
                <MdClose className='closeMenu' onClick={()=>handleNav()} />
            </div>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/faq'>FAQ</Link>
                <Link className='link' to='/about'>About</Link>
                <Link className='link' to='/shop'>Shop</Link>
                
            </aside>}
    </Fragment>
  )
}

export default Navbar
