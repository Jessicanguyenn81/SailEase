import { useEffect, useState } from 'react';
import * as restaurantsAPI from '../../utilities/restaurants-api';
import './Dining.css';
import { Link, useNavigate } from 'react-router-dom'
import Search from '../../components/Search/Search'
import RoomServiceImg from '../../assets/dining-options/room-service.png'
import RestaurantsImg from '../../assets/dining-options/restaurants.png'
import MainDiningImg from '../../assets/dining-options/main-dining.png'
import BarsLoungesImg from '../../assets/dining-options/bars-lounge.png'
import CoffeeSnacksImg from '../../assets/dining-options/coffee-snacks.png'
import BeverageStationImg from '../../assets/dining-options/beverage-station.png'
import HamburgerMenu from '../../assets/icons/hamburgermenu.png'
import BackButton from '../../assets/icons/backbutton.png'
import AccessibilityButton from '../../assets/icons/accessibilitybutton.png'
import Logo from '../../assets/icons/tinylogo.png'



export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(function() {
    async function getRestaurants() {
      const restaurantsReceived = await restaurantsAPI.getAllRestaurants();
      setRestaurants(restaurantsReceived);
    }
    getRestaurants();
  }, []);

  let navigate = useNavigate()

  return (
    <div>
      {/* <div className='page-nav'>
        <button onClick={() => navigate(-1)} ><img src={BackButton} alt="" className='back-button'></img></button>
        <img src={Logo} alt="" className='logo'></img>
        <div className='menus'>
          <button> <img src={AccessibilityButton} alt="" className='accessibility-button'></img></button>
          <button> <img src={HamburgerMenu} alt="" className='hamburger-menu'></img></button>
        </div>
      </div> */}
      
      <div className='page-name'>
      <h1>Dining Options</h1> 
      </div>
      <Search /> 
      <div class='dining-options'>
          <div id='image-div'>
            <Link><img src={RoomServiceImg} alt='Room Service' className='card-img'></img></Link>
          </div >
          <div id='image-div'>
            <Link to="/restaurants" state={ restaurants }><img src={RestaurantsImg} alt='Restaurants' className='card-img'></img></Link>
          </div>
          <div id='image-div'>
            <Link><img src={MainDiningImg} alt='Main Dining' className='card-img'></img></Link>
          </div>
          <div id='image-div'>
            <Link><img src={BarsLoungesImg} alt='Bars and Lounges' className='card-img'></img></Link>
          </div>
          <div id='image-div'>
            <Link><img src={CoffeeSnacksImg} alt='Coffee and Snacks' className='card-img'></img></Link>
          </div>
          <div id='image-div'>
            <Link><img src={BeverageStationImg} alt='Beverage Station' className='card-img'></img></Link>
          </div>
      </div>    
    </div>

  )
}