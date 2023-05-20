import { useLocation, Link } from 'react-router-dom';
import './Assistance.css';

export default function Assistance() {
  const location = useLocation();
  const activity = location.state;

  return (
    <div className='flex-ctr-ctr flex-col'>

      <h1>Special Assistance</h1>
      <form action="" className='assist-form'>
      <div className='flex-ctr-ctr'>
        <input type="checkbox" name="needWheelchair" id="" />
        <label htmlFor="needWheelchair">I need a wheelchair</label>
        </div>

        <div className='flex-ctr-ctr'>
        <input type="checkbox" name="haveMobilityDevice" id="" />
        <label htmlFor="needWheelchair">I travel with my own wheeled mobility device (wheelchair, rollator)</label>
        </div>

        <div className='flex-ctr-ctr'>
        <input type="checkbox" name="haveMobilityDevice" id="" />
        <label htmlFor="needWheelchair">I travel with my own mobility aid (cane, walker, crutches)</label>
        </div>
      </form>
      <Link to="/activityDetails" className="black-btn" state={activity}>Continue</Link>
    </div>
  )
}

