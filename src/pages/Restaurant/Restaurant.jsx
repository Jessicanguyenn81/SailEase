import { useEffect, useState } from 'react';
import * as restaurantsAPI from '../../utilities/restaurants-api';
import './Restaurant.css';
import { useLocation, Link } from 'react-router-dom';
import italian from '../../assets/carousel/dining/italian.png';

export default function Restaurants() {
  
  const location = useLocation();
  const restaurants = location.state;

  return (
    <>
      <h1>Restaurant Page</h1>  
      {/* <img className='carousel-dining-img' src={italian} alt="" /> */}
      {
        restaurants.map((restaurant, idx) => (
          <div key={idx}>            
            <h2>{restaurant.name}</h2>
            <Link to="/goldenspoon">
            <img className='restaurant-image' src={`${restaurant.picture}`} alt="an restaurant"/>
            </Link>
            <div>{restaurant.restaurantType}</div>
          </div>
        ))
      }
    </>

  )
}