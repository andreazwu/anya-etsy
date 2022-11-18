import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { login } from '../../../store/session';
import SignUpForm from '../SignupFormModal/SignUpForm';
import './LoginForm.css';
const LoginForm = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false);

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
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
    <div>
      {showSignup ? <SignUpForm/>
      :
      <div className='login-form-main'>
      <div className="login-top">
      <div className="login-title">Sign In</div>
      <div className='login-register-button' onClick={() => handleSignup()}>Register</div>
      </div>
      <form onSubmit={onLogin}>
        <div className="login-error">
          {errors.map((error, ind) => (
            <div className="login-errors" key={ind}>{error}</div>
          ))}
        </div>
        <div className="login-field-outer">
          <label className="login-label" htmlFor='email'>Email *</label>
          <input
            className="login-input"
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className="login-field-outer">
          <label className="login-label" htmlFor='password'>Password *</label>
          <input
            className="login-input"
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
          <div className='login-buttons-outer'>
          <button type='submit' className='login-form-button'>Login</button>
          <button className='login-form-demo-button' onClick={DemoUser}>Demo User</button>
          </div>

      </form></div>
      }
    </div>
  );
};

export default LoginForm;
