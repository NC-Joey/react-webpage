import React from 'react'
import FooterMenu from './FooterMenu'

const Footer = () => {
  return (
    <footer>
      {/* <div className='brand'>
        <img src={logo} alt=''/>
      </div> */}
      <FooterMenu title='Resources' menu1='Tutorials' menu2='Library'/>
      <FooterMenu title='Support' menu1='Help Centre' menu2='Community Forum'/>
      <FooterMenu title='About' menu1='Our Story' menu2='Team'/>
      <FooterMenu title='Contact' menu1='Start a Chat' menu2='Send an Email'/>
    </footer>
  )
}

export default Footer
