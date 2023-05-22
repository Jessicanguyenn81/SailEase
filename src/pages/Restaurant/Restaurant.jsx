import { useEffect, useState } from 'react';
import * as restaurantsAPI from '../../utilities/restaurants-api';
import './Restaurant.css';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import italian from '../../assets/carousel/dining/italian.png';
import HamburgerMenu from '../../assets/icons/hamburgermenu.png'
import BackButton from '../../assets/icons/backbutton.png'
import AccessibilityButton from '../../assets/icons/accessibilitybutton.png'
import Logo from '../../assets/icons/tinylogo.png'
import Search from '../../components/Search'

export default function Restaurants() {
  
  const location = useLocation();
  const restaurants = location.state;
  let navigate = useNavigate()

  return (
    <>
      <div className='page-nav'>
        <button onClick={() => navigate(-1)} ><img src={BackButton} alt="" className='back-button'></img></button>
        <img src={Logo} alt="" className='logo'></img>
        <div className='menus'>
          <button> <img src={AccessibilityButton} alt="" className='accessibility-button'></img></button>
          <button> <img src={HamburgerMenu} alt="" className='hamburger-menu'></img></button>
        </div>
      </div>

      <h1>Restaurants</h1>  
      {/* <img className='carousel-dining-img' src={italian} alt="" /> */}
      {/* <Search /> */}
      {
        restaurants.map((restaurant, idx) => (
          <div key={idx}>            
            <h2>{restaurant.name}</h2>
            <Link to="/goldenspoon">
            <img className='restaurant-image' src={`${restaurant.picture}`} alt="an-restaurant"/>
            </Link>
            <div>{restaurant.restaurantType}</div>
          </div>
        ))
      }
    </>

  )
}