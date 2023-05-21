import { useEffect, useState } from 'react';
import * as tablesAPI from '../../utilities/tables-api';
import { Link } from 'react-router-dom';
import './Hello.css';

export default function Hello() {
    return(
      <>
      <h1> Hello, Tom! </h1> 
      <div>
        <Link to='/home'>
            <button>Plan your day</button>
        </Link>
            <button>Find my reservation</button>
            <button>Go to my account</button>
      </div>
      </>
    )
    
  }