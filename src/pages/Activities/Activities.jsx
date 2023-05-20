import { useLocation, Link } from 'react-router-dom';
import './Activities.css';

export default function Activities() {
  const location = useLocation();
  const excursions = location.state;

  return (
    <>
      <h1>Rome Activities</h1>
      <div className='flex flex-c'>
      {
        excursions.map((activity, idx) => (
          <div key={idx} className='carousel-card'>
            <h2>{activity.name}</h2>
            <Link to='/activityDetails' className='black-btn' state={activity}>Make Reservation</Link>
          </div>
        ))
      }
      </div>
    </>

  )
}

