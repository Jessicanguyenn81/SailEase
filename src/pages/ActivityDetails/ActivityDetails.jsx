import { useLocation, Link } from 'react-router-dom';
import './ActivityDetails.css';

export default function ActivityDetails() {
  const location = useLocation();
  const activity = location.state;

  return (
    <div className='main-details-div'>
      <h1>{activity.name}</h1>
      <img className='details-img' src={`${activity.picture}`} alt="" />
      <div className='details-price'>
        <h2>${activity.price}</h2>
        <span>per person</span>
      </div>
      <div>
        <Link to="/assistance" className="assist-btn" state={activity}>I need special assistance</Link>
      </div>
      <h1>Description</h1>
      <p>{activity.description}</p>
      <Link to="/reviewActivityReserve" className="black-btn" state={activity}>Review Reservation</Link>
    </div>

  )
}

