import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { signUp } from '../../../store/session';
import LoginFormModal from '../LoginFormModal';
import LoginForm from '../LoginFormModal/LoginForm'

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
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>First Name</label>
        <input
          type='text'
          name='email'
          onChange={updatefirstName}
          value={firstName}
        ></input>
      </div>
      <div>
        <label>Last Name</label>
        <input
          type='text'
          name='email'
          onChange={updatelastName}
          value={lastName}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type='password'
          name='confirm_password'
          onChange={updateconfirmPassword}
          value={confirmPassword}
          required={true}
        ></input>
      </div>
      <span>
        Already have an account?
        <div className='signup-login-button' onClick={() => handleLogin()}>Login In</div>
      </span>
      <button type='submit'>Register</button>
    </form>
    }
    </>
  );
};

export default SignUpForm;
