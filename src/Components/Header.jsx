import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Contact from './Contact'

const Header = () => {
  return (
    <div className='w-full h-screen'> 
      <Navbar/>
      <Hero/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default Header