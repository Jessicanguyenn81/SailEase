import { useLocation, Link } from 'react-router-dom';
import './ActivityDetails.css';

export default function Activities() {
  const location = useLocation();
  const activity = location.state;

  return (
    <div>
      <h3>{activity.name}</h3>
      <img src={`${activity.picture}`} alt="" />
      <div>
        <h4>${activity.price}</h4>
        <span>per person</span>
      </div>
      
    </div>

  )
}

