import { useEffect, useState } from 'react';
import * as tablesAPI from '../../utilities/tables-api';
import { Link } from 'react-router-dom';
import './Table.css';

export default function Table() {
  return(
    <>
    <h1> Choose Your Table </h1> 
    <p>Image of table chart here</p>
    <div>
    <Link to='/revieworder'>
    <button>Continue</button>
    </Link>
    </div>
    </>
  )
  
}