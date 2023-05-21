import { useEffect, useState } from 'react';
import * as goldenspoonsAPI from '../../utilities/goldenspoons-api';
import { Link } from 'react-router-dom';
import './Golden.css';

export default function Golden() {
  
  
    return (
      <>
        <h1>Chops Grill Page</h1>
        <img src='https://s3-media0.fl.yelpcdn.com/bphoto/Qm2FBhz3md0dyzQbDQWNVA/l.jpg'></img>
        <h2>Classic American Steakhouse</h2>
        <p>For more than a decade, the chefs of Chops Grill have proudly presented quality, hand cut steaks at this hallmark Royal Caribbean restaurant. Now, they give you a fresh twist on a favorite, with a revamped menu that brings contemporary flair to traditional steakhouse offerings. Most intriguing: our exceptional prime meat. This prime beef is joined by Maine lobster, grilled branzino and other succulent dishes paired with addictive sides and irresistible desserts.</p>
        <h2>Menu Highlights</h2>
        <p>The best way to begin a meal at Chops Grill is with the charred beef carpaccio, sliced thin and served rare with fresh arugula, Parmesan cheese, and truffle mustard dressing.</p>
        <h3>Make a Reservation</h3>
        <div class='restaurant-form'>
        <form>
          <label for='appt'>Choose a Time: </label>
          <input type='time' id='appt' name='appt' min='9:00' max='23:00' required></input>
          <label for='start'>Choose a Date: </label>
          <input type='date' id='start' name='trip-start' value='2023-05-19' min='2023-01-01' max='2023-12-31'></input>
          <label for='guest'>Number of Guests:</label>
          <input type='number' id='guest' name='guest' value='1' min='1' max='15' required></input>
          <div>
            <input type='checkbox' id='allergy' name='allergy'></input>
            <label for='allergy'>Do you have allergies?</label>
            <input type='checkbox' id='restrictions' name='restrictions'></input>
            <label for='restrictions'>Do you have any dietary restrictions?</label>
          </div>
          <Link to='/table'>
          <button id='reservation'>Submit Reservation</button>
          </Link>
        </form>
        </div>
      </>
  
    )
  }