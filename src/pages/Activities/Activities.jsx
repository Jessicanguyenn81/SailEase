import { useLocation, Link } from 'react-router-dom';
import './Activities.css';

export default function Activities() {
  const location = useLocation();
  const excursions = location.state;

  return (
    <>
      <h1>Rome Activities</h1>
      <div className='flex flex-c'>

      </div>
    </>

  )
}

