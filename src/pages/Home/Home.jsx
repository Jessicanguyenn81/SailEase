import * as userService from '../../utilities/users-service'
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




export default function HomePage({ user, setUser}) {
    const [restaurants, setRestaurants] = useState([]);
    const [excursions, setExcursions] = useState([]);
    const location = useLocation();

    async function handleCheckToken() {
        const expDate = await userService.checkToken()
        console.log(expDate)
    }

    return (
        <>
            <header className="header">
                <h1>Welcome, {}</h1>
                <h2> 70° </h2>
                <h3>What do you want to do today?</h3>
            </header>
                <div className="home-container">
                    <div className='' alt="Dining"> 
                        <Link to="/dining" state={ restaurants }>
                            <img src={Dining} className='restaurant-img' alt="" />
                        </Link>
                    </div>
                    <div className=''> 
                        <Link to="/excursions" state={ excursions }>
                            <img src={ExcursionsImg} id="home" className='excursions-image'  alt="" />
                        </Link>    
                    </div>
                    <div className='entertain'> 
                        <img src={Entertain} id="home" className='entertainment' />
                    </div>
                    <div className='shops'>   
                        <img src={Shops} id="home" className='shops' /> 
                    </div>
                    <div className='activities'>   
                        <img src={Activites} id="home" className='Activities'  /> 
                    </div>
                    <div className='spa'>   
                        <img src={Spas} id="home" className='Spa' /> 
                    </div>
                    <div className='fitness'>   
                        <img src={Fitness} id="home" className='Fitness' /> 
                    </div>
                    <div className='services'>   
                        <img src={Services} id="home" className='Services' /> 
                    </div>
                {/* <button onClick={handleCheckToken}></button> */}
                </div>
    </>       
    )
}