import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { Link } from 'react-router-dom';
import './SignUp.css';

export default function SignUp({ setUser }) {
  return (
    <div className='signUp-main-div'>
      <main>
          <h1>Let's get started</h1>
          <SignUpForm setUser={setUser} />
      </main>
    </div>
  )
}