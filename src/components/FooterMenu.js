import React from 'react'

const FooterMenu = (props) => {
  return (
        <div className='footer-menu'>
            <h4>{props.title}</h4>
            <ul>
                <li>{props.menu1}</li>
                <li>{props.menu2}</li>
            </ul>
        </div>
  )
}

export default FooterMenu
