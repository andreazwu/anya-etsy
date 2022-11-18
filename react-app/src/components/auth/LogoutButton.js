import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
    <div onClick={onLogout} className='dropdown-item'>
      <div className='sign-out-img'><i className="fa-sharp fa-solid fa-arrow-right-from-bracket"></i></div>
      <div className='sign-out'>Sign Out</div>
    </div>
  )
};

export default LogoutButton;
