import React from 'react'
import Navbar from '../Components/Navbar'
import HeroNakrutka from '../Components/HeroNakrutka';
import Footer from '../Components/Footer';

const Nakrutka = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <HeroNakrutka/>
      <Footer/>
    </div>
  );
}

export default Nakrutka