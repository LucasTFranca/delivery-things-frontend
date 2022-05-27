import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';

function Header() {
  const { user } = localStorage;
  const navigate = useNavigate();

  function redirectPage(rote) {
    navigate(rote);
  }

  function handleClick({ target }) {
    const { id } = target;

    const linkDictionary = {
      login: '/login',
      register: '/register',
      product: '/product',
      logo: '/',
    };

    redirectPage(linkDictionary[id]);
  }

  function removeUserToken() {
    localStorage.removeItem('user');
    navigate('/');
  }

  return (
    <div className="header">
      <div className="left-button-container">
        <button id="logo" onClick={handleClick} type="button">Delivery Things</button>
        <button id="product" onClick={handleClick} type="button">Product</button>
      </div>
      <div className="right-button-container">
        {
          user ? (
            <div className="right-single-button-container">
              <button onClick={removeUserToken} type="button">Logout</button>
            </div>
          )
            : (
              <div className="right-doble-button-container">
                <button onClick={handleClick} id="login" type="button">Login</button>
                <button onClick={handleClick} id="register" type="button">Register</button>
              </div>
            )
        }
      </div>
    </div>
  );
}

export default Header;
