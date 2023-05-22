import { useEffect, useState } from 'react';
import * as tablesAPI from '../../utilities/tables-api';
import { Link, useNavigate } from 'react-router-dom';
import ReviewDining from '../../assets/icons/Group 331.png';
import './ReviewOrder.css';
import HamburgerMenu from '../../assets/icons/hamburgermenu.png'
import BackButton from '../../assets/icons/backbutton.png'
import AccessibilityButton from '../../assets/icons/accessibilitybutton.png'
import Logo from '../../assets/icons/tinylogo.png'

export default function ReviewOrder() {

  let navigate = useNavigate()

  return(
    <>
    <div className='page-nav'>
        <button onClick={() => navigate(-1)} ><img src={BackButton} alt="" className='back-button'></img></button>
        <img src={Logo} alt="" className='logo'></img>
        <div className='menus'>
          <button> <img src={AccessibilityButton} alt="" className='accessibility-button'></img></button>
          <button> <img src={HamburgerMenu} alt="" className='hamburger-menu'></img></button>
        </div>
      </div>

    <h1> Review Reservation </h1> 
    <div className='review-dining'>
        <img id='review-dining' src={ReviewDining} alt='review-dining'></img>
    </div>
    
    <div className='flex-ctr-ctr'>
      <Link to='/confirmation'>
      <button className="black-btn">Make Reservation</button>
      </Link>
    </div>
    
    </>
  )
  
}