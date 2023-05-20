import { useLocation, Link } from 'react-router-dom';
import './ReviewReservationActivity.css';

export default function ReviewReservationActivity() {
  const location = useLocation();
  const activity = location.state;

  return (
    <div className='flex-ctr-ctr flex-col'>
      <h1>Review Reservation</h1>
      <div className='flex-ctr-ctr flex-col'>

        <div className='flex-ctr-ctr reserve-prop-card space-between'>
          <div className='flex-ctr-ctr'>
            <p>icon</p>
            <h3>Place</h3>
          </div>
          <h4>{activity.name}</h4>
          <p>icon</p>
        </div>

        <div className='flex-ctr-ctr reserve-prop-card space-between'>
          <div className='flex-ctr-ctr'>
            <p>icon</p>
            <h3>Time</h3>
          </div>
          <input type="datetime-local" name="" id="" />
          <p>icon</p>
        </div>

        <div className='flex-ctr-ctr reserve-prop-card space-between'>
          <div className='flex-ctr-ctr'>
            <p>icon</p>
            <h3>Accessible</h3>
          </div>
          <p>Yes</p>
          <p>icon</p>
        </div>

        <div className='flex-ctr-ctr reserve-prop-card space-between'>
          <div className='flex-ctr-ctr'>
            <p>icon</p>
            <h3>Guests</h3>
          </div>
          <p>Party of 4</p>
          <p>icon</p>
        </div>
        <div>
          <div className='flex-ctr-ctr space-between width-396'>
            <h2>Subtotal</h2>
            <h2>$232.00</h2>
          </div>
          <div className='flex-ctr-ctr space-between width-396'>
            <h2>Tax</h2>
            <h2>$18.60</h2>
          </div>
          <div className='flex-ctr-ctr space-between width-396'>
            <h2>Total</h2>
            <h2>$250.60</h2>
          </div>
        </div>

      </div>
      <Link to="/confirmActivity" className="black-btn width-396" state={activity}>Confirm Payment</Link>
      <h3>This will be charged to your payment method</h3>
    </div>
  )
}

