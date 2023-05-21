import * as userService from '../../utilities/users-service'
import { getUser } from '../../utilities/users-service'
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Restaurants from '../Restaurant/Restaurant';
import Excursions from '../Excursions/Excursions';
import * as restaurantsAPI from '../../utilities/restaurants-api';


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
                            <img className='restaurant-img' src="" alt="" />
                        </Link>
                    </div>
                    <div className=''> 
                        <Link to="/excursions" state={ excursions }>
                            <img id="home" className='excursions-image' src="" alt="" />
                        </Link>    
                    </div>
                    <div className=''> 
                        <img id="home" className='entertainment' src='' />
                    </div>
                    <div className=''>   
                        <img id="home" className='shops' src='' /> 
                    </div>
                    <div className='activities'>   
                        <img id="home" className='Activities' src='' /> 
                    </div>
                    <div className='spa'>   
                        <img id="home" className='Spa' src='' /> 
                    </div>
                {/* <button onClick={handleCheckToken}></button> */}
                </div>
    </>       
    )
}