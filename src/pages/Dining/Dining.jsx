import { useEffect, useState } from 'react';
import * as restaurantsAPI from '../../utilities/restaurants-api';
import './Dining.css';
import { Link } from 'react-router-dom'
import Search from '../../components/Search/Search'
import RoomServiceImg from '../../assets/dining-options/room-service.png'
import RestaurantsImg from '../../assets/dining-options/restaurants.png'
import MainDiningImg from '../../assets/dining-options/main-dining.png'
import BarsLoungesImg from '../../assets/dining-options/bars-lounge.png'
import CoffeeSnacksImg from '../../assets/dining-options/coffee-snacks.png'
import BeverageStationImg from '../../assets/dining-options/beverage-station.png'


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
      <h1>Dining Options</h1> 
      <Search /> 
      <div class='dining-options'>
        <ul>
          <div id='dining-image'>
            <Link><img src={RoomServiceImg} alt='Room Service'></img></Link>
          </div >
          <div id='dining-image'>
            <Link to="/restaurants" state={ restaurants }><img src={RestaurantsImg} alt='Restaurants'></img></Link>
          </div>
          <div id='dining-image'>
            <Link><img src={MainDiningImg} alt='Main Dining'></img></Link>
          </div>
          <div id='dining-image'>
            <Link><img src={BarsLoungesImg} alt='Bars and Lounges'></img></Link>
          </div>
          <div id='dining-image'>
            <Link><img src={CoffeeSnacksImg} alt='Coffee and Snacks'></img></Link>
          </div>
          <div id='dining-image'>
            <Link><img src={BeverageStationImg} alt='Beverage Station'></img></Link>
          </div>
        </ul>
      </div>    
    </>

  )
}