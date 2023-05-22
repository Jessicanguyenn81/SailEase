import { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import HomeWelcomeImg from '../../assets/home-imgs/Intro.png'
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [loginToggle, setLoginToggle] = useState(false);
  const [signUpToggle, setSignUpToggle] = useState(false);

  const handleLoginToggle = () => {
    setLoginToggle(!loginToggle);
  };
  const handleSignUpToggle = () => {
    setSignUpToggle(!signUpToggle);
  };

    return (
      <div className='authpage-main-div'>
        { loginToggle === false && signUpToggle === false ? 
            <div>
              <button onClick={ handleLoginToggle }>
                <img src={HomeWelcomeImg} alt="home-welcome" className='welcome-sail-img'></img>
              </button>
             </div> : 
              loginToggle === true ? 
              <div>                
                <Login setUser={setUser} />
              </div>
              : 
              <div>
                <SignUp setUser={setUser} />
              </div>
        }
      </div>
    )
}