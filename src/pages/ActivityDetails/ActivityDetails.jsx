import { useLocation, Link } from 'react-router-dom';
import './ActivityDetails.css';
import calendarImg from '../../assets/excursion-activity/calendar.png';
import clockImg from '../../assets/excursion-activity/clock.png';
import peopleImg from '../../assets/excursion-activity/people.png';

export default function ActivityDetails() {
  const location = useLocation();
  const activity = location.state.activity;
  const excursions = location.state.excursions;

  return (
    <div className='main-details-div'>
      <div className='width-396 cities-div flex flex-col'>
        <Link to="/activities" state={excursions}>
          <img src="https://cdn-icons-png.flaticon.com/512/9312/9312237.png" alt="" className='icon-btn back-btn' />
        </Link>
      </div>
      <h1>{activity.name}</h1>
      <img className='details-img' src={`${activity.picture}`} alt="" />
      <div className='details-price'>
        <h2>${activity.price}</h2>
        <span>per person</span>
      </div>
      <div className='assist-btn'>
        <input type="checkbox" id="assistance-checkbox" />
        <Link to="/assistance" className="" state={{activity, excursions}}>I need special assistance</Link>
      </div>
      <div className='width-396 details-div flex flex-col'>
        <h1>Description</h1>
        <p>{activity.description}</p>
      </div>
      <div className='width-396 flex flex-col activity-div'>
        <h1>Select</h1>
        <div className='flex-ctr-ctr activity-icon-area'>
          <div className='flex-ctr-ctr flex-col'>
            <img src={ clockImg } alt="" className='detail-icons' />
            <p>Time</p>
          </div>
          <div className='flex-ctr-ctr flex-col'>
            <img src={ calendarImg } alt="" className='detail-icons' />
            <p>Date</p> 
          </div>
          <div className='flex-ctr-ctr flex-col'>
            <img src={ peopleImg } alt="" className='detail-icons' />
            <p>Guest</p> 
          </div>          
        </div>        
      </div>
        <Link to="/reviewActivityReserve" className="black-btn" state={{activity, excursions}}>Continue</Link>
    </div>

  )
}

