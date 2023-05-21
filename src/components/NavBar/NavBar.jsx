import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav className='nav'>
            
            <Link to="/dining">Dining</Link>
            &nbsp; | &nbsp;
            <Link to="/excursions">Excursions</Link>
            &nbsp; | &nbsp;
            {/* Dummy Links */}
            <Link>Entertainment</Link>
            &nbsp; | &nbsp;
            <Link>Shops</Link>
            &nbsp; | &nbsp;
            <Link>Activities</Link>
            &nbsp; | &nbsp;
            <Link>Spa</Link>
            &nbsp; | &nbsp;
            <Link>Fitness</Link>
            &nbsp; | &nbsp;
            <Link>Services</Link>
            &nbsp; | &nbsp;
            {/* Dummy Links End Here */}
            <Link to="/">Home</Link>
            &nbsp; | &nbsp;
            Welcome, {user.name}
            {/* {Math.floor((temperature)-273.15)}&deg;C */}
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}