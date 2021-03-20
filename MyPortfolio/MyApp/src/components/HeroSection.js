import React from 'react';
import Button from './Button';
import './HeroSection.css';
import './App.css'

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <video src='http://127.0.0.1:8000/static/Myapp/videos/Basketball.mp4' autoPlay loop muted />
      <h1>Welcome My Portfolio</h1>
      <p>soda kentaro, a Japanese university student</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}
export default HeroSection
