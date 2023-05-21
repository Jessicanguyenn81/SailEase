import { useEffect, useState } from 'react';
import * as tablesAPI from '../../utilities/tables-api';
import { Link } from 'react-router-dom';
import SeatingImg from '../../assets/icons/Group 329.png';
import './Table.css';

export default function Table() {
  return(
    <>
    <h1> Choose Your Table </h1> 
    <div className='seating-image'>
        <img id='seating' src={SeatingImg} alt='seating-image'></img>
    </div>
    <div>
    <Link to='/revieworder'>
    <button>Continue</button>
    </Link>
    </div>
    </>
  )
  
}