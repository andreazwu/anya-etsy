import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { login } from '../../../store/session';
import SignUpForm from '../SignupFormModal/SignUpForm';

const LoginForm = () => {
  // console.log("LOGINFORM COMPONENT STARTS:")
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false);

  const onLogin = async (e) => {
    e.preventDefault();
    console.log("LOGINFORM BEFORE DISPATCH EMAIL PW:", email, password)
    const data = await dispatch(login(email, password));
    if (data) {
      // console.log("LOGINFORM AFTER DISPATCH, DATA:", data)
      setErrors(data);
    }
  };

  const DemoUser = (e) => {
    e.preventDefault();
    setErrors([]);
    const demoEmail = "demo@gmail.com";
    const demoPassword = "demo_user";
    return dispatch(login(demoEmail, demoPassword)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      })
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = (e) => {
    setShowSignup(true)
  }


  return (
    <>
      {showSignup ? <SignUpForm/>
      :
      <>
      <div className='login-register-button' onClick={() => handleSignup()}><button>Register</button></div>
      <form onSubmit={onLogin}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
          <button type='submit'>Login</button>
          <button onClick={DemoUser}>Demo User</button>
        </div>
      </form></>
      }
    </>
  );
};

export default LoginForm;
