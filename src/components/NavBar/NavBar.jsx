import './NavBar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as userService from '../../utilities/users-service'
import AccImg from '../../assets/nav-icons/Acc.png'
import DeckMapsImg from '../../assets/nav-icons/DeckMaps.png'
import MyPlansImg from '../../assets/nav-icons/MyPlans.png'
import MyProfileImg from '../../assets/nav-icons/MyProfile.png'
import SettingImg from '../../assets/nav-icons/Setting.png'
import ShipActivitiesImg from '../../assets/nav-icons/ShipActivites.png'
import TechnicalImg from '../../assets/nav-icons/Technical.png'
import AccessibleImg from '../../assets/accessibility/accessible2.png';
import BiggerImg from '../../assets/accessibility/Bigger.png';
import ContrastImg from '../../assets/accessibility/Contrast.png';
import ZoomInImg from '../../assets/accessibility/Zoom.png';
import SaturationImg from '../../assets/accessibility/Saturation.png';
import VoiceImg from '../../assets/accessibility/VoiceAssist.png';
import MobilityImg from '../../assets/accessibility/Mobility.png';
import ClosedCapImg from '../../assets/accessibility/ClosedCap.png';
import AccessibilityButton from '../../assets/icons/accessibilitybutton.png'


export default function NavBar({ user, setUser }) {
const [menuOpen, setMenuOpen] = useState(false);
const [accessibilityMenuOpen, setAccessibilityMenuOpen] = useState(false);

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    function handleMenuToggle() {
        setMenuOpen(!menuOpen);
        console.log("clicked")
    }

    function handleMenuItemClick() {
        setMenuOpen(false);
    }

    function handleAccessibilityMenuToggle() {
        setAccessibilityMenuOpen(!accessibilityMenuOpen);
        console.log('accessibility clicked')
    }

    return (
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <div className='accessibility-hamburger' onClick={handleAccessibilityMenuToggle}>
            <img src={AccessibilityButton} alt=""  />
            <div className={`accessibility-menu ${accessibilityMenuOpen ? 'open' : ''}`}>
                <div>
                    <img src={BiggerImg} alt="" className='accessibility-item'/>
                </div>
                <div>
                    <img src={ContrastImg} alt="" className='accessibility-item'/>
                </div>
                <div>
                    <img src={ZoomInImg} alt="" className='accessibility-item'/>
                </div>
                <div>
                    <img src={SaturationImg} alt="" className='accessibility-item'/>
                </div>
                <div>
                    <img src={VoiceImg} alt="" className='accessibility-item'/>
                </div>
                <div>
                    <img src={MobilityImg} alt="" className='accessibility-item'/>
                </div>
                <div>
                    <img src={ClosedCapImg} alt="" className='accessibility-item'/>
                </div>
            </div>

        </div>
        <div className="hamburger" onClick={handleMenuToggle}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>

        <div className={`menu ${menuOpen ? 'open' : ''}`} onClick={handleMenuItemClick}>
            
            <div className='hamburger-div'>
                <div className='img-div'>
                    <img src={MyProfileImg} alt='' className='button-img'></img>
                </div>
                <div className='img-div'>
                    <img src={MyPlansImg} alt='' className='button-img'></img>
                </div>
                <div className='img-div'>
                    <img src={ShipActivitiesImg} alt='' className='button-img'></img>
                </div>
                <div className='img-div'>
                    <img src={DeckMapsImg} alt='' className='button-img'></img>
                </div>
                <div className='img-div'>
                    <img src={AccImg} alt='' className='button-img'></img>
                </div>
                <div className='img-div'>
                    <img src={TechnicalImg} alt='' className='button-img'></img>
                </div>
                <div className='img-div'>
                    <img src={SettingImg} alt='' className='button-img'></img>
                </div>
            </div>
            
            <Link to="/dining">Dining</Link>
            &nbsp; | &nbsp;
            <Link to="/excursions">Excursions</Link>
            &nbsp; | &nbsp;
            <Link to="/">Home</Link>
            &nbsp; | &nbsp;
            {/* Welcome, {user.name} */}
            {/* {Math.floor((temperature)-273.15)}&deg;C */}
            {/* &nbsp; | &nbsp; */}
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </div>
        </nav>
    )
}