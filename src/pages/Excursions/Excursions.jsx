import { useEffect, useState } from 'react';
import * as excursionsAPI from '../../utilities/excursions-api';
import { Link } from 'react-router-dom';
import './Excursions.css';
import Search from '../../components/Search/Search';
import FlorenceImg from '../../assets/cities/florence.png'
import NaplesImg from '../../assets/cities/naples.png'
import ProvenceImg from '../../assets/cities/provence.png'
import RomeImg from '../../assets/cities/rome.png'
import SicilyImg from '../../assets/cities/sicily.png'

export default function Excursions() {
  const [excursions, setExcursions] = useState([]);

  useEffect(function() {
    async function getExcursions() {
      const excursionsReceived = await excursionsAPI.getAllExcursions();
      setExcursions(excursionsReceived);
    }
    getExcursions();
  }, []);

  return (
    <div className='flex-ctr-ctr flex-col'>
      <div className='width-396 cities-div flex flex-col'>
      <Link to="/">
        <img src="https://cdn-icons-png.flaticon.com/512/9312/9312237.png" alt="" className='icon-btn back-btn' />
      </Link>
      <div className='page-name'><h1>Cities</h1></div>
      <Search />
      <div className='excursions'>
        <div className='image-div'>
          <Link><img className='card-img' src={SicilyImg} alt="" /></Link>
        </div>
        <div className='image-div'>
          <Link to="/activities" state={ excursions }>
            <img className='card-img' src={RomeImg} alt="Rome" />         
          </Link>
        </div>
        <div className='image-div'>
          <Link><img className='card-img' src={NaplesImg} alt="" /></Link>
        </div>
        <div className='image-div'>
          <Link><img className='card-img' src={FlorenceImg} alt="" /></Link>
        </div>
        <div className='image-div'>
          <Link><img className='card-img' src={ProvenceImg} alt="" /></Link>
        </div>


      </div>
      </div>
    </div>

  )
}