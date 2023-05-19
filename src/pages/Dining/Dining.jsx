// export default function Dining() {
//     return <h1>Dining Page</h1>
// }

import { useEffect, useState } from 'react';
import * as restaurantsAPI from '../../utilities/restaurants-api';
import './Dining.css';

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(function() {
    async function getRestaurants() {
      const restaurantsReceived = await restaurantsAPI.getAllRestaurants();
      setRestaurants(restaurantsReceived);
    }
    getRestaurants();
  }, []);

  return (
    <>
      <h1>Dining Page</h1>      
      {
        restaurants.map((restaurant, idx) => (
          <div key={idx}>            
            <h2>{restaurant.name}</h2>
            <img className='restaurant-image' src={`${restaurant.picture}`} alt="an restaurant"/>
            <div>{restaurant.restaurantType}</div>
          </div>
        ))
      }
    </>

  )
}