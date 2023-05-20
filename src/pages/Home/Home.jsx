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
                    <div className='text-block' alt="Dining"> 
                        <h4>Dining</h4>
                        <Link to="/dining" state={ restaurants }>
                            <img className='restaurant-img' src="https://s3-media0.fl.yelpcdn.com/bphoto/Qm2FBhz3md0dyzQbDQWNVA/l.jpg" alt="" />
                        </Link>
                    </div>
                    <div className=''> 
                        <Link to="/excursions" state={ excursions }>
                            <img id="home" className='excursions-image' src="https://media.timeout.com/images/105211673/image.jpg" alt="Rome" />
                        </Link>    
                    </div>
                    <div className=''> 
                        <img id="home" className='entertainment' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgQf2yZmRT07VLRl0BS4Ip0KgJVqwmsWv9zw&usqp=CAU' />
                    </div>
                    <div className=''>   
                        <img id="home" className='shops' src='https://widgety-assets.s3.amazonaws.com/2022/12/18/06/57/57/21fedf00-f17d-4cb2-9587-a95237cd3a4d/NCL%20The%20Tides.jpeg' /> 
                    </div>
                    <div className='activities'>   
                        <img id="home" className='Activities' src='https://www.carnival.com/awaywego/wp-content/uploads/2017/11/senior-couple-on-the-waterslide.jpg' /> 
                    </div>
                    <div className='spa'>   
                        <img id="home" className='Spa' src='https://i.insider.com/56bb94916e97c61d008b66cf?width=1000&format=jpeg&auto=webp' /> 
                    </div>
                {/* <button onClick={handleCheckToken}></button> */}
                </div>
    </>       
    )
}