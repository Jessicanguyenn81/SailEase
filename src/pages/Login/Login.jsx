import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUp from '../SignUp/SignUp';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/icons/Group 150.png';
import accessButtonImg from '../../assets/icons/accessibilitybutton.png';


export default function Login({ setUser }) {
  const [signUpToggle, setSignUpToggle] = useState(false);

  const handleSignUpToggle = () => {
    setSignUpToggle(!signUpToggle);
  };

    return (
      <div className='login-main-div'>
        {signUpToggle === false ? 
        <div>
          <h1>Log in</h1>
          <img src={logo} alt="" className='sail-logo-login' />
            <LoginForm setUser={setUser} />
          <div className='flex-ctr-ctr flex-col login-bottom-div'>
            <button onClick={ handleSignUpToggle } className='peach-outline-btn'>Create account</button>
            <a href="" className='underline-link'>Don't have a cruise? Let's find one!</a>
            <img src={ accessButtonImg } alt="" className='access-btn-small' />
          </div>
      </div>
         : 
        <div>
          <SignUp setUser={setUser} />
        </div>
        }
      </div>
    )
}