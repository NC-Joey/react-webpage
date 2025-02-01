import React, { Fragment } from 'react'

const Hero = () => {
  return (
    <Fragment>
        <section className='hero'>
            <div className='hero-content'>
                <h2 data-aos='fade-down' data-aos-duration='1000' data-aos-delay='500'>Build. Share. Inspire.</h2>
                <button data-aos='fade-up' data-aos-duration='1000' data-aos-delay='1000'>Get Started</button>
            </div>
        </section>
    </Fragment>
  )
}

export default Hero
