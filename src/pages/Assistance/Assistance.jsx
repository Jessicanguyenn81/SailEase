import { useLocation, Link } from 'react-router-dom';
import './Assistance.css';
import assistImg from '../../assets/accessibility/accessible2.png';

export default function Assistance() {
  const location = useLocation();
  const activity = location.state.activity;
  const excursions = location.state.excursions;

  return (
    <div className='flex-ctr-ctr flex-col assist-div'>
      <div className='width-396 cities-div flex flex-col'>
      <Link to="/activityDetails" state={{ excursions, activity }} className='flex-start-header'>
        <img src="https://cdn-icons-png.flaticon.com/512/9312/9312237.png" alt="" className='icon-btn back-btn' />
      </Link>

      <h1>Special Assistance</h1>
      <img src={assistImg} alt="" className='assist-icon' />
      <p>I travel with a mobility aid or require use of a wheelchair.</p>
      <form action="" className='assist-form'>
        <div className='flex-ctr-ctr'>
          <input type="radio" name="accessibility" id="" />
          <label htmlFor="needWheelchair">I need a wheelchair</label>
        </div>

        <div className='flex-ctr-ctr'>
        <input type="radio" name="accessibility" id="" />
        <label htmlFor="needWheelchair">I travel with my own wheeled mobility device (wheelchair, rollator)</label>
        </div>

        <div className='flex-ctr-ctr'>
        <input type="radio" name="accessibility" id="" />
        <label htmlFor="needWheelchair">I travel with my own mobility aid (cane, walker, crutches)</label>
        </div>
      </form>
      <Link to="/activityDetails" className="black-btn" state={{activity, excursions}}>Continue</Link>
      </div>
    </div>
  )
}

