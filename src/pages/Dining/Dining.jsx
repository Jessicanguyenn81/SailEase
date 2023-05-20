// export default function Dining() {
//     return <h1>Dining Page</h1>
// }

import { useEffect, useState } from 'react';
import * as restaurantsAPI from '../../utilities/restaurants-api';
import './Dining.css';
import { Link } from 'react-router-dom'

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
      <div class='dining options'>
        <ul>
          <div id='roomservice'>
            <img src='https://media.cntraveler.com/photos/59272dbe2b0ad1382eadf7b0/16:9/w_2560%2Cc_limit/GettyImages-88997497.jpg'></img>
          <li>Room Service</li>
          </div id=''>
          <Link to="/restaurants" state={ restaurants }>Restaurants</Link>
          <li>Main Dining</li>
          <li>Bars & Lounges</li>
          <li>Coffee & Snacks</li>
          <li>Beverage Station</li>
        </ul>
      </div>    
    </>

  )
}