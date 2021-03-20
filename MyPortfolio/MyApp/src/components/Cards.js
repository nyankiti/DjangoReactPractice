import React from 'react';
import './App.css';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='static/MyApp/images/img-1.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='myapp/services'
            />
            <CardItem
              src='static/MyApp/images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='myapp/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='static/MyApp/images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='myapp/services'
            />
            <CardItem
              src='static/MyApp/images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='myapp/products'
            />
            <CardItem
              src='static/MyApp/images/img-1.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='myapp/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;