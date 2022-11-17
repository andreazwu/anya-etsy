import React from 'react';
import { useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../auth/LoginFormModal';
import logo from '../images/logo.jpg';
import myShop from '../images/myShop.svg'
import shoppingCart from '../images/shoppingCart.svg';
import './NavBar.css';

const NavBar = () => {
  const user = useSelector(state => state.session.user);

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
                  <img src={myShop} alt='myShop'></img>
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
              </div>
            </>
          }
          <div className='navBar-link-icon'>
            <NavLink to='/cart' exact={true} activeClassName='active'>
              <img src={shoppingCart} alt='cart'></img>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
