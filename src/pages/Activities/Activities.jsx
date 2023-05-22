import { useLocation, Link } from 'react-router-dom';
import './Activities.css';
import { Carousel } from 'react-bootstrap';
import Search from '../../components/Search/Search';
import accessibleImg from '../../assets/accessibility/accessible.png';
import notAccessibleImg from '../../assets/icons/not accessible.png';
// import Carousel from '../../components/Carousel/Carousel';
import picture from '../../assets/excursion-activity/Group 343.png';
// import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Activities() {
  const location = useLocation();
  const excursions = location.state;

  return (
    <div className='flex-ctr-ctr flex-col'>
       <div className='width-396 cities-div flex flex-col'>
      <Link to="/excursions" className='flex-ctr-ctr flex-start-header'>
        <img src="https://cdn-icons-png.flaticon.com/512/9312/9312237.png" alt="" className='icon-btn back-btn' />
      </Link>
      <h1>Rome Activities</h1>
      <Search />
        <div className='flex flex-c'> 
        <Carousel>
        {
          excursions.map((activity, idx) => (
            
            // <Carousel.Item key={idx}>
            <Carousel.Item key={idx}>
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

              <table className='info-div-table table'>
                <tr className='info-div-table'>
                  <td className='table-with-bg'>Attire</td>
                  <td className='table-no-bg'>{activity.attire}</td>
                </tr>            
                <tr className='info-div-table'>
                  <td className='table-with-bg'>Insider Tip</td>
                  <td className='table-no-bg'>{activity.insiderTip}</td>
                </tr>
              </table>

              {
                activity.accessible ? <img className='accesibility-icons' src={accessibleImg} alt="" /> : <img className='accesibility-icons' src={notAccessibleImg} alt="" />
              }

            </Carousel.Item>
          ))
        }
         </Carousel>
          {/* <Carousel items={ excursions } state={excursions} /> */}
        </div>
      </div>
    </div>

  )
}

