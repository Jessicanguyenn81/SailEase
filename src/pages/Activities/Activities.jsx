import { useLocation, Link } from 'react-router-dom';
import './Activities.css';
import Search from '../../components/Search/Search';
import accessible from '../../assets/icons/accessible.png';
import Carousel from '../../components/Carousel/Carousel';


export default function Activities() {
  const location = useLocation();
  const excursions = location.state;

  return (
    <div className='flex-ctr-ctr flex-col'>
       <div className='width-396 cities-div flex flex-col'>
      <Link to="/excursions">
        <img src="https://cdn-icons-png.flaticon.com/512/9312/9312237.png" alt="" className='icon-btn back-btn' />
      </Link>
      <h1>Rome Activities</h1>
      <Search />
      <div className='flex flex-c'>
      {/* {
        excursions.map((activity, idx) => (
          <div key={idx}></div>
            <div className='carousel-card flex-ctr-ctr flex-col'>
              <h2>{activity.name}</h2>
              <Link to='/activityDetails' className='black-btn-smaller' state={{activity, excursions}}>Make Reservation</Link>
            </div>
            <div className='flex-ctr-ctr flex-col'>
              <p>Attire: Comfortable walking shoes</p>
              <img src={accessible} alt="" className='icon-with-font' />
            </div>
            <Carousel items={activity} />
          </div>
        ))
      } */}
        <Carousel items={ ['hello', 'hi'] } state={excursions} />
      </div>
      </div>
    </div>

  )
}

