import { useEffect, useState } from 'react';
import * as tablesAPI from '../../utilities/tables-api';
import { Link } from 'react-router-dom';
import ReviewDining from '../../assets/icons/Group 331.png';
import './ReviewOrder.css';

export default function ReviewOrder() {
  return(
    <>
    <h1> Review Reservation </h1> 
    <div className='review-dining'>
        <img id='review-dining' src={ReviewDining} alt='review-dining'></img>
    </div>

    {/* <div>
    <h3>Restaurant</h3>
    <p>Restaurant Name</p>
    <button>edit icon img</button>
    </div>

    <div>
    <h3>Time</h3>
    <p>Time Stamp</p>
    <button>edit icon img</button>
    </div>

    <div>
    <h3>Accesible</h3>
    <p>Yes</p>
    <button>edit icon img</button>
    </div>

    <div>
    <h3>Guests</h3>
    <p>Number of guests</p>
    <button>edit icon img</button>
    </div> */}

    <div>
    <Link to='/confirmation'>
    <button>Make Reservation</button>
    </Link>
    </div>
    
    </>
  )
  
}