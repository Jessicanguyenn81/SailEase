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

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/dining" element={<Dining />} />
            <Route path='/excursions' element={<Excursions />} />            
            <Route path='/restaurants' element={<Restaurant />} />
            <Route path='/goldenspoon' element={<Goldenspoon />} />
            <Route path='/activities' element={<Activities />} />

            <Route path="/" element={<Home />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

//comment 
