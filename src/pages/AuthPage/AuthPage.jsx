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
            <main>
            <h2>Welcome to</h2>
            <h1>SailEase</h1>
            <img src={HomeWelcomeImg} alt="home-welcome" className='home-welcome'></img>
            {/* <h1>Login</h1> */}
            {/* <SignUpForm setUser={setUser} />
            <LoginForm setUser={setUser} /> */}
             </main>
             <div className='flex-ctr-ctr flex-col authpage-bottom-div'>
               <button className='black-btn' onClick={ handleLoginToggle }>Login</button>
               <button className='white-btn' onClick={ handleSignUpToggle }>Create an account</button>
               {/* <Link to="/login" className='black-btn'>Login</Link> */}
               {/* <Link to="/signUp" className='white-btn'>Create an account</Link> */}
               <a href="" className='underline-link'>Don't have a cruise? Let's find one!</a>
             </div>
             </div> : 
              loginToggle === true ? 
              <div>
                {/* <LoginForm setUser={setUser} />  */}
                <Login setUser={setUser} />
              </div>
              : 
              <div>
                {/* <SignUpForm setUser={setUser} /> */}
                <SignUp setUser={setUser} />
              </div>
        }
      </div>
    )
}