import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import myShop from '../images/myShop.svg'
import './ProfileButton.css'

const ProfileButton = ({user}) => {
  const [showMenu, setShowMenu] = useState();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true)
  }

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    }

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu])

  return (
    <div className='navbar-profile-container'>
    <div onClick={openMenu} className='navbar-profile-button'>
      <i className="fa-solid fa-user"></i>
      <i className="fa-solid fa-angle-down"></i>
    </div>
    {showMenu && <>
        <div className='profile-dropdown'>
          <div className='dropdown-item-top'>
            <div className='profile-user-img'><i className="fa-solid fa-user"></i></div>
            <div className='profile-name'>{user.firstName}</div>
          </div>
          <NavLink to='/my-reviews' style={{textDecoration: 'none'}}>
            <div className='dropdown-item'>
              <div className='my-reviews-img'><i className="fa-solid fa-list-ul"></i></div>
              <div className='my-reviews'>My Reviews</div>
            </div>
          </NavLink>
          <NavLink to='/new-product' style={{textDecoration: 'none'}}>
            <div className='dropdown-item'>
              <img src={myShop} alt='shop' className='profile-shop-img'></img>
              <div className='my-products'>Sell on Anya</div>
            </div>
          </NavLink>
          {/* <div className='dropdown-item'>
            <div className='sign-out-img'><i className="fa-sharp fa-solid fa-arrow-right-from-bracket"></i></div> */}
            <LogoutButton />
          {/* </div> */}
        </div>
      </>}
    </div >
  )
}

export default ProfileButton;
