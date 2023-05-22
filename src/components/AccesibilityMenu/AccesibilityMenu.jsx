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

export default function NavBar({ user, setUser }) {
const [menuOpen, setMenuOpen] = useState(false);

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

    return (
        <div>
            
        </div>
    )
    }