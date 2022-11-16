
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import SearchBar from '../SearchBar';
import logo from '../images/logo.jpg';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            <img src={logo} alt="logo" className="logo"/>
          </NavLink>
        </li>
        <SearchBar />
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-reviews' exact={true} activeClassName='active'>
            My Reviews
          </NavLink>
        </li>
        <li>
          <NavLink to='/store-manager' exact={true} activeClassName='active'>
            Store Manager
          </NavLink>
        </li>
        <li>
          <NavLink to='/new-product' exact={true} activeClassName='active'>
            Sell on Anya
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
