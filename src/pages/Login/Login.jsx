import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUp from '../SignUp/SignUp';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login({ setUser }) {
  const [signUpToggle, setSignUpToggle] = useState(false);

  const handleSignUpToggle = () => {
    setSignUpToggle(!signUpToggle);
  };

    return (
      <div className='login-main-div'>
        {signUpToggle === false ? 
        <div>
        <main>
            <h1>Login</h1>
            <LoginForm setUser={setUser} />
        </main>
        <div className='flex-ctr-ctr flex-col login-bottom-div'>
        <button onClick={ handleSignUpToggle } className='white-btn'>Sign Up</button>
        <a href="" className='underline-link'>Don't have a cruise? Let's find one!</a>
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