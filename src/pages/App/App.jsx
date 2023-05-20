import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import Dining from '../Dining/Dining'
import Home from '../Home/Home'
import NavBar from '../../components/NavBar/NavBar'
import Excursions from '../Excursions/Excursions';
import Restaurant from '../Restaurant/Restaurant';
import Goldenspoon from '../Goldenspoon/Golden';
import Activities from '../Activities/Activities';
import Table from '../Table/Table';
import ActivityDetails from '../ActivityDetails/ActivityDetails';
import Assistance from '../Assistance/Assistance';
import ReviewOrder from '../ReviewOrder/ReviewOrder';
import Confirmation from '../Confirmation/Confirmation';
import ReviewReservationActivity from '../ReviewReservationActivity/ReviewReservationActivity';
import ConfirmActivity from '../ConfirmActivity/ConfirmActivity';


export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ? 
        <div>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/dining" element={<Dining />} />
            <Route path='/excursions' element={<Excursions />} />            
            <Route path='/restaurants' element={<Restaurant />} />
            <Route path='/goldenspoon' element={<Goldenspoon />} />
            <Route path='/activities' element={<Activities />} />
            <Route path='/activityDetails' element={<ActivityDetails />} />
            <Route path='/assistance' element={<Assistance />} />
            <Route path='/table' element={<Table />} />
            <Route path='/revieworder' element={<ReviewOrder />} />
            <Route path='/confirmation' element={<Confirmation />} />
            <Route path='/reviewActivityReserve' element={<ReviewReservationActivity />} />
            <Route path='/confirmActivity' element={<ConfirmActivity />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

