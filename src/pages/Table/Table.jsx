import { useEffect, useState } from 'react';
import * as tablesAPI from '../../utilities/tables-api';
import { Link, useNavigate } from 'react-router-dom';
import SeatingImg from '../../assets/icons/Group 329.png';
import './Table.css';
import HamburgerMenu from '../../assets/icons/hamburgermenu.png'
import BackButton from '../../assets/icons/backbutton.png'
import AccessibilityButton from '../../assets/icons/accessibilitybutton.png'
import Logo from '../../assets/icons/tinylogo.png'

export default function Table() {

  let navigate = useNavigate()

  return(
    <>
    {/* <div className='page-nav'>
        <button onClick={() => navigate(-1)} ><img src={BackButton} alt="" className='back-button'></img></button>
        <img src={Logo} alt="" className='logo'></img>
        <div className='menus'>
          <button> <img src={AccessibilityButton} alt="" className='accessibility-button'></img></button>
          <button> <img src={HamburgerMenu} alt="" className='hamburger-menu'></img></button>
        </div>
      </div> */}

    <h1> Choose Your Table </h1> 
    <div className='seating-image'>
        <img id='seating' src={SeatingImg} alt='seating-image'></img>
    </div>
    <div className='flex-ctr-ctr'>
    <Link to='/revieworder'>
    <button className="black-btn">Continue</button>
    </Link>
    </div>
    </>
  )
  
}