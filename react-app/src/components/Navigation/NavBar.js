import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar';
import ProfileButton from './ProfileButton';
// import { Modal } from '../../context/Modal';
import LoginFormModal from '../auth/LoginFormModal';
import logo from '../images/logo.jpg';
import myShop from '../images/myShop.svg'
import shoppingCart from '../images/shoppingCart.svg';
import './NavBar.css';

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [showSignIn, setShowSignIn] = useState(false);




  return (
    <nav>
      <div className='navBar-main'>
        <div className='navBar-outer'>
          <div className='navBar-link'>
            <NavLink exact to="/" activeClassName='active'>
              <div className='navBar-home'>
                <img src={logo} alt="logo" className="logo"/>
              </div>
            </NavLink>
          </div>
          <SearchBar />
          {user ?
            <>
              <div className='navBar-link-icon'>
                <NavLink to='/store-manager' exact={true} activeClassName='active'>
                  <img src={myShop} alt='shop'></img>
                </NavLink>
              </div>
              <div className='navBar-link-profile'>
                <ProfileButton user={user} />
              </div>
            </>
            :
            <>
              <div className='navBar-link sign-in'>
                <LoginFormModal/>
                <div onClick={() => setShowSignIn(true)}>
                </div>
                {/* {showSignIn && (
                  <Modal onClose={() => setShowSignIn(false)}>
                    <LoginForm setShowSignIn={setShowSignIn} />
                  </Modal>
                )} */}
              </div>
            </>
          }
          {/* <div className='navBar-link sign-in'>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </div> */}
          <div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
