import { useEffect, useState } from 'react';
import * as excursionsAPI from '../../utilities/excursions-api';
import { Link, useNavigate } from 'react-router-dom';
import './Excursions.css';
import Search from '../../components/Search/Search';
import FlorenceImg from '../../assets/cities/florence.png'
import NaplesImg from '../../assets/cities/naples.png'
import ProvenceImg from '../../assets/cities/provence.png'
import RomeImg from '../../assets/cities/rome.png'
import SicilyImg from '../../assets/cities/sicily.png'
import HamburgerMenu from '../../assets/icons/hamburgermenu.png'
import BackButton from '../../assets/icons/backbutton.png'
import AccessibilityButton from '../../assets/icons/accessibilitybutton.png'
import Logo from '../../assets/icons/tinylogo.png'

export default function Excursions() {
  const [excursions, setExcursions] = useState([]);
  let navigate = useNavigate()

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
      <div className='page-nav'>
        <button onClick={() => navigate(-1)} ><img src={BackButton} alt="" className='back-button'></img></button>
        <img src={Logo} alt="" className='logo'></img>
        <div className='menus'>
          <button> <img src={AccessibilityButton} alt="" className='accessibility-button'></img></button>
          <button> <img src={HamburgerMenu} alt="" className='hamburger-menu'></img></button>
        </div>
      </div>
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