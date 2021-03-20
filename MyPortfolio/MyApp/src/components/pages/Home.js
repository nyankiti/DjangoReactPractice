import React from 'react';
import '../App.css'
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import About from '../About';

const Home = () => {
  return ( 
    <>
      <HeroSection/>
      <div id='home' className='home_container'>
        <h1>Check out these EPIC Destinations!</h1>
        <About/>
        <Cards/>
      </div>
      <Footer/>
    </>
  )
}

export default Home;