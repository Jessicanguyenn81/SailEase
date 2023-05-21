// LoginForm.jsx
import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import './LoginForm.css';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      window.location.reload();
    } catch {
      setError('Log In Failed - Try Again');
      window.location.reload();

    }
  }

  return (
    <div>
      <div className="form-container login-form">
        <form autoComplete="off" onSubmit={handleSubmit} className='login-inner-form flex-ctr-ctr flex-col'>
          <div>
            <label>Email</label>
            <input className='email-form' type="text" name="email" value={credentials.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          </div>
          <button type="submit" className='black-btn'>Login</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
