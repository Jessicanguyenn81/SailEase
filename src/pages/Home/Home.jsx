import * as userService from '../../utilities/users-service'
// import axios from 'axios';
import { getUser } from '../../utilities/users-service'
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Restaurants from '../Restaurant/Restaurant';
import Excursions from '../Excursions/Excursions';
import * as restaurantsAPI from '../../utilities/restaurants-api';
import Activites from '../../assets/home-imgs/activities.png';
import Dining from '../../assets/home-imgs/dining.png';
import Entertain from '../../assets/home-imgs/entertain.png';
import ExcursionsImg from '../../assets/home-imgs/excursions.png';
import Fitness  from '../../assets/home-imgs/fitness.png';
import Services  from '../../assets/home-imgs/services.png';
import Shops  from '../../assets/home-imgs/shops.png';
import Spas  from '../../assets/home-imgs/spa.png';
import Logo from '../../assets/icons/Group 150.png';




export default function HomePage({ user, setUser}) {
    const [restaurants, setRestaurants] = useState([]);
    const [excursions, setExcursions] = useState([]);
    const location = useLocation();
    

  

    return (
        <>
            <header className="header">
                <img src={Logo} alt="logo" className='home-logo' />
                <h1>Good Morning, Tom {}</h1>
                <h2> 70° </h2>
                <h3>What do you want to do today?</h3>
            </header>
                <div className="home-container">
                    <div className='left' alt="Dining"> 
                        <Link to="/dining" state={ restaurants }>
                            <img src={Dining} id='home' className='restaurant-img' alt="" />
                        </Link>
                    </div>
                    <div className='right'> 
                        <Link to="/excursions" state={ excursions }>
                            <img src={ExcursionsImg} id="home" className='excursions-image'  alt="" />
                        </Link>    
                    </div>
                    <div className='left'> 
                        <img src={Entertain} id="home" className='entertainment' />
                    </div>
                    <div className='right'>   
                        <img src={Shops} id="home" className='shops' /> 
                    </div>
                    <div className='left'>   
                        <img src={Activites} id="home" className='Activities'  /> 
                    </div>
                    <div className='right'>   
                        <img src={Spas} id="home" className='Spa' /> 
                    </div>
                    <div className='left'>   
                        <img src={Fitness} id="home" className='Fitness' /> 
                    </div>
                    <div className='right'>   
                        <img src={Services} id="home" className='Services' /> 
                    </div>
                {/* <button onClick={handleCheckToken}></button> */}
                </div>
    </>       
    )
}