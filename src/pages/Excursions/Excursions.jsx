// export default function Excursions() {
//   return <h1>Excursions Page</h1>
// }

import { useEffect, useState } from 'react';
import * as excursionsAPI from '../../utilities/excursions-api';
import { Link } from 'react-router-dom';
import './Excursions.css';

export default function Excursions() {
  const [excursions, setExcursions] = useState([]);

  useEffect(function() {
    async function getExcursions() {
      const excursionsReceived = await excursionsAPI.getAllExcursions();
      setExcursions(excursionsReceived);
    }
    getExcursions();
  }, []);

  return (
    <>
      <h1>Cities</h1>
      <div className='flex flex-c'>
        <div className='flex card-preview'>
          <img className='card-preview-image' src="https://images.pexels.com/photos/4064445/pexels-photo-4064445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h3>Sicily</h3>
        </div>
        <Link to="/activities" state={ excursions }>
          <div className='flex card-preview'>            
            <img className='card-preview-image' src="https://media.timeout.com/images/105211673/image.jpg" alt="Rome" />
            <h3>Rome</h3>            
          </div>
        </Link>

        <div className='flex card-preview'>
          <img className='card-preview-image' src="https://images.pexels.com/photos/4064445/pexels-photo-4064445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h3>Naples</h3>
        </div>

        <div className='flex card-preview'>
          <img className='card-preview-image' src="https://images.pexels.com/photos/4064445/pexels-photo-4064445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h3>Florence</h3>
        </div>


      </div>
    </>

  )
}