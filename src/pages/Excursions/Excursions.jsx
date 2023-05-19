// export default function Excursions() {
//   return <h1>Excursions Page</h1>
// }

import { useEffect, useState } from 'react';
import * as excursionsAPI from '../../utilities/excursions-api';
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
      <h1>Excursions Page</h1>
      {
        excursions.map((excursion, idx) => (
          <div key={idx}>            
            <h2>{excursion.name}</h2>
            <img className='excursion-image' src={`${excursion.picture}`} alt="an excursion" />
          </div>
        ))
      }
    </>

  )
}