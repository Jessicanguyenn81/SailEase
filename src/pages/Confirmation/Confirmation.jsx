import { useEffect, useState } from 'react';
import * as tablesAPI from '../../utilities/tables-api';
import { Link } from 'react-router-dom';
import CheckGreenImg from '../../assets/icons/check icon.png';
import './Confirmation.css';

export default function Confirmation() {
  return(
    <div>
      <h1>Confirmed!</h1>
      <p>Thank you for your reservation</p>
      <p>Reservation number: 43456</p>
      <div className='checkgreen'>
        <img id='check' src={CheckGreenImg} alt='greencheck'></img>
      </div>
      {/* Image of restaurant? */}
      <div>
        <Link to='/'>
        <button className="black-btn">Go Back Home</button>
        </Link>
      </div>
      <div>
        <Link>
        <button>Cancel Reservation</button>
        </Link>
      </div>
    </div>

    
  )
  
}