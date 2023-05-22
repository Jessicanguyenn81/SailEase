import { useEffect, useState } from 'react';
import * as tablesAPI from '../../utilities/tables-api';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/icons/Group 150.png';
import AccImg from '../../assets/icons/accessibilitybutton.png'
import './Hello.css';


export default function Hello(user, setUser) {
  console.log("user", user);

    return(
      <div className="hello-page flex-ctr-ctr flex-col">
      <div className='sail-image'>
        <img id='sail' src={LogoImg} alt='logo'></img>
      </div>
      <h1> Hello, {user.user.name}! </h1> 
      <div id='plan' className='flex-ctr-ctr'>
        <Link to='/home'>
            <button className='btn flex-ctr-ctr'>Plan your day</button>
        </Link>
            <button className='btn flex-ctr-ctr'>Find my reservation</button>
            <button className='btn flex-ctr-ctr'>Go to my account</button>
      </div>
      <div className='blue-man'>
        <img id='blue' src={AccImg} alt='accimg'></img>
      </div>
      </div>
    )
    
    
  }