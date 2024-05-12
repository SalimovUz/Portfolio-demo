import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'

const Header = () => {
  return (
    <div className='w-full h-screen px-12'> 
      <Navbar/>
      <Hero/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Header