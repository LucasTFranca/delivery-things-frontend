import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="Header">
      <button id="logo" onClick={handleClick} type="button">Delivery Things</button>
      <button id="product" onClick={handleClick} type="button">Product</button>
      {
        user ? <button onClick={removeUserToken} type="button">Logout</button>
          : (
            <div>
              <button onClick={handleClick} id="login" type="button">Login</button>
              <button onClick={handleClick} id="register" type="button">Register</button>
            </div>
          )
      }
    </div>
  );
}

export default Header;
