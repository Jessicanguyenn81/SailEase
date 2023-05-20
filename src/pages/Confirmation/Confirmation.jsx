import { useEffect, useState } from 'react';
import * as tablesAPI from '../../utilities/tables-api';
import { Link } from 'react-router-dom';
import './Confirmation.css';

export default function Confirmation() {
  return(
    <div>
      <h1>Confirmed!</h1>
      <p>Thank you for your reservation</p>
      <p>Reservation number: 43456</p>
      {/* Image of restaurant? */}
      <div>
        <Link to='/'>
        <button>Go Back Home</button>
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