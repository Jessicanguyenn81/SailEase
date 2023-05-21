import { useEffect, useState } from 'react';
import * as tablesAPI from '../../utilities/tables-api';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/icons/Group 150.png';
import AccImg from '../../assets/icons/accessibilitybutton.png'
import './Hello.css';

export default function Hello() {
    return(
      <>
      <h1> Hello, Tom! </h1> 
      <div className='sail-image'>
        <img id='sail' src={LogoImg} alt='logo'></img>
      </div>
      <div id='plan'>
        <Link to='/home'>
            <button>Plan your day</button>
        </Link>
            <button>Find my reservation</button>
            <button>Go to my account</button>
      </div>
      <div className='blue-man'>
        <img id='blue' src={AccImg} alt='accimg'></img>
      </div>
      </>
    )
    
    
  }