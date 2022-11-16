import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import SearchBar from '../SearchBar';
import logo from '../images/logo.jpg';
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
          <div className='navBar-link sign-in'>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
          </div>
          <div className='navBar-link sign-in'>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </div>
          <div className='navBar-link sign-in'>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </div>
          <div className='navBar-link sign-in'>
            <NavLink to='/my-reviews' exact={true} activeClassName='active'>
              My Reviews
            </NavLink>
          </div>
          <div className='navBar-link sign-in'>
            <NavLink to='/store-manager' exact={true} activeClassName='active'>
              Store Manager
            </NavLink>
          </div>
          <div className='navBar-link sign-in'>
            <NavLink to='/new-product' exact={true} activeClassName='active'>
              Sell on Anya
            </NavLink>
          </div>
          <div className='navBar-link-icon'>
            <NavLink to='/cart' exact={true} activeClassName='active'>
              <img src={shoppingCart} alt='cart'></img>
            </NavLink>
          </div>
          <div>
            <LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
