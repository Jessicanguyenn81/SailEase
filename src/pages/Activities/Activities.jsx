import { useLocation, Link } from 'react-router-dom';
import './Activities.css';
import Search from '../../components/Search/Search';
import accessible from '../../assets/icons/not accessible.png';
// import Carousel from '../../components/Carousel/Carousel';
import picture from '../../assets/excursion-activity/Group 343.png';
import Carousel from 'react-bootstrap/Carousel';


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

        {
          excursions.map((activity, idx) => (
            <div key={idx}>
              <div 
                className='carousel-card flex-ctr-ctr flex-col'
                style={
                  {
                    backgroundImage: `url(${activity.picture})`,
                    backgroundRepeat: "no-repeat"
                  }
                }
                >
                <h2>{activity.name}</h2>
                <Link to='/activityDetails' className='black-btn-smaller' state={{activity, excursions}}>Make Reservation</Link>
              </div>
              <div className='flex-ctr-ctr flex-col info-div-table'>
                <div className='flex-ctr-ctr first-row-table'>
                  <div className='table-with-bg'>
                    <p>Attire</p>
                  </div>
                  <div className='table-no-bg'>
                    <p>{activity.attire}</p>                            
                  </div>
                </div>

                <div className='flex-ctr-ctr first-row-table'>
                  <div className='table-with-bg'>
                    <p>Insider tip</p>
                  </div>
                  <div className='table-no-bg'>
                    <p>{activity.insiderTip}</p>                            
                  </div>
                </div>

              </div>
            </div>
          ))
        }
          <Carousel items={ excursions } state={excursions} />
        </div>
      </div>
    </div>

  )
}

