import { useEffect, useState } from 'react';
import * as goldenspoonsAPI from '../../utilities/goldenspoons-api';
import { Link, useNavigate } from 'react-router-dom';
import './Golden.css';
import HamburgerMenu from '../../assets/icons/hamburgermenu.png'
import BackButton from '../../assets/icons/backbutton.png'
import AccessibilityButton from '../../assets/icons/accessibilitybutton.png'
import Logo from '../../assets/icons/tinylogo.png'
import Clock from '../../assets/excursion-activity/clock.png'
import Book from '../../assets/excursion-activity/book.png'
import Calendar from '../../assets/excursion-activity/calendar.png'
import People from '../../assets/excursion-activity/people.png'
import RestaurantPic from '../../assets/restaurant/Group 337.png'

export default function Golden() {
  let navigate = useNavigate()
  const [checked, setChecked] = useState(false)
  const [checked1, setChecked1] =useState(false)
  const handleChange = () => {
    setChecked(!checked)
  }
  const handleChange1 = () => {
    setChecked1(!checked1)
  }
  
    return (
      <>
        {/* <div className='page-nav'>
        <button onClick={() => navigate(-1)} ><img src={BackButton} alt="" className='back-button'></img></button>
        <img src={Logo} alt="" className='logo'></img>
        <div className='menus'>
          <button> <img src={AccessibilityButton} alt="" className='accessibility-button'></img></button>
          <button> <img src={HamburgerMenu} alt="" className='hamburger-menu'></img></button>
        </div> */}
      {/* </div> */}
      <div className='main'>
      <h1>Chops Grill</h1>
        <img src={RestaurantPic} className='restaurant-img'></img>
        <h2>Classic American Steakhouse</h2>
        <p>For more than a decade, the chefs of Chops Grill have proudly presented quality, hand cut steaks at this hallmark Royal Caribbean restaurant. Now, they give you a fresh twist on a favorite, with a revamped menu that brings contemporary flair to traditional steakhouse offerings. Most intriguing: our exceptional prime meat. This prime beef is joined by Maine lobster, grilled branzino and other succulent dishes paired with addictive sides and irresistible desserts.</p>
        <h2>Menu Highlights</h2>
        <p>The best way to begin a meal at Chops Grill is with the charred beef carpaccio, sliced thin and served rare with fresh arugula, Parmesan cheese, and truffle mustard dressing.</p>
        <div>
        <h3>Select</h3>
        <div class='restaurant-form'>
          <div>
          <img src={Clock} alt='' className='detail-icons'></img>
          <p>Time</p>
          </div>
          <div>
          <img src={Calendar} alt='' className='detail-icons'></img>
          <p>Date</p>
          </div>
          <div>
          <img src={People} alt='' className='detail-icons'></img>
          <p>Guest</p>
          </div>
          <div>
          <img src={Book} alt='' className='detail-icons'></img>
          <p>Menu</p>
          </div>
        </div>
        </div>
        <div className='boxes'>
        <label className='checkbox'>
          <input type="checkbox" checked={checked} onChange={handleChange}/>
          <p>Do you have any allergies?</p>
        </label>
        <label className='checkbox'>
          <input type="checkbox" checked1={checked1} onChange={handleChange1}/>
          <p>Do you have any dietary restrictions?</p>
        </label>
        </div>
        <div className='flex-ctr-ctr'>
          <Link to='/table'>
            <button className="black-btn">Continue</button>
          </Link>
        </div>
        
      </div>
      </>
  
    )
  }