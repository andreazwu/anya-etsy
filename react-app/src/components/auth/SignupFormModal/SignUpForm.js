import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { signUp } from '../../../store/session';
import LoginForm from '../LoginFormModal/LoginForm'
import './SignupForm.css';
const SignUpForm = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [showSignIn, setShowSignIn] = useState(false);

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const data = await dispatch(signUp(firstName, lastName, username, email, password));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(["Please Confirm Password"])
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatefirstName = (e) => {
    setfirstName(e.target.value);
  };

  const updatelastName = (e) => {
    setlastName(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateconfirmPassword = (e) => {
    setconfirmPassword(e.target.value);
  };

  const handleLogin =(e) =>{
    setShowSignIn(true);
  }


  return (
    <>
    {showSignIn ? <LoginForm/>
    :
    <form onSubmit={onSignUp} className="signup-form-main">
       <div className='signup-upper'>
       <div className='signup-header'>Create your account</div>
        <div className='signup-caption'>Registration is easy.</div>
      </div>
      <div className="signup-error-outer">
        {errors.map((error, ind) => (
          <div className="signup-errors" key={ind}>{error}</div>
        ))}
      </div>
      <div className="signup-field-outer">
        <label className="signup-label">User Name *</label>
        <input
          className="signup-input"
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div className="signup-field-outer">
      <label className="signup-label">Email *</label>
        <input
          className="signup-input"
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div className="signup-field-outer">
      <label className="signup-label">First Name *</label>
        <input
          className="signup-input"
          type='text'
          name='email'
          onChange={updatefirstName}
          value={firstName}
        ></input>
      </div>
      <div className="signup-field-outer">
      <label className="signup-label">Last Name *</label>
        <input
          className="signup-input"
          type='text'
          name='email'
          onChange={updatelastName}
          value={lastName}
        ></input>
      </div>
      <div className="signup-field-outer">
      <label className="signup-label">Password *</label>
        <input
          className="signup-input"
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div className="signup-field-outer">
      <label className="signup-label">Confirm Password *</label>
        <input
          className="signup-input"
          type='password'
          name='confirm_password'
          onChange={updateconfirmPassword}
          value={confirmPassword}
          required={true}
        ></input>
      </div>
      <div className='signIn-account-message'>
        Already have an account?
        <span className='signup-login-button' onClick={() => handleLogin()}>  Login In</span>
      </div>
      <div className='signup-buttons-outer'>
      <button className="signup-form-button" type='submit'>Register</button>
      </div>
    </form>
     }
    </>
  );
};

export default SignUpForm;
