import { useLocation, Link } from 'react-router-dom';
import './ReviewReservationActivity.css';

export default function ReviewReservationActivity() {
  const location = useLocation();
  const activity = location.state;

  return (
    <div className='flex-ctr-ctr flex-col'>
      <h1>Review Reservation</h1>
      <div className='flex-ctr-ctr flex-col'>

        <div className='flex-ctr-ctr reserve-prop-card'>
          <div className='flex-ctr-ctr'>
            <p>icon</p>
            <h3>Place</h3>
          </div>
          <h4>{activity.name}</h4>
          <p>icon</p>
        </div>

        <div className='flex-ctr-ctr reserve-prop-card'>
          <div className='flex-ctr-ctr'>
            <p>icon</p>
            <h3>Time</h3>
          </div>
          <input type="datetime-local" name="" id="" />
          <p>icon</p>
        </div>

        <div className='flex-ctr-ctr reserve-prop-card'>
          <div className='flex-ctr-ctr'>
            <p>icon</p>
            <h3>Accessible</h3>
          </div>
          <p>Yes</p>
          <p>icon</p>
        </div>

        <div className='flex-ctr-ctr reserve-prop-card'>
          <div className='flex-ctr-ctr'>
            <p>icon</p>
            <h3>Guests</h3>
          </div>
          <p>Party of 4</p>
          <p>icon</p>
        </div>


      </div>
      <Link to="/activityDetails" className="black-btn" state={activity}>Confirm Payment</Link>
    </div>
  )
}

