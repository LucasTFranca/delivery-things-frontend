import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { connectUser } from '../../service';

import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  function handleChange({ target }) {
    setError('');

    const inputDictionary = {
      email: () => setEmail(target.value),
      password: () => setPassword(target.value),
    };

    inputDictionary[target.id]();
  }

  function getIn(token) {
    localStorage.user = token;

    navigate('/product');
  }

  async function verificationToLogin() {
    const user = {
      email,
      password,
    };

    const data = await connectUser(user);

    if (data.token) getIn(data.token);
    else setError('Email or password wrong');
  }

  function onSubmit() {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const emailIsValid = emailRegex.test(email);

    if (!emailIsValid) {
      setError('Invalid email!');
    } else if (password.length < 5) {
      setError('Password must be at least 5 characters!');
    } else {
      verificationToLogin();
    }
  }

  return (
    <div className="login">
      <Header />
      <div className="login-form-container">
        <form className="login-form">

          <label htmlFor="email">
            Email
            <input onChange={handleChange} value={email} type="email" id="email" />
          </label>

          <label htmlFor="password">
            Password
            <input onChange={handleChange} value={password} type="password" id="password" />
          </label>

          <button onClick={onSubmit} type="button">Login</button>
        </form>

        {
          error && (
            <span className="error-span">{error}</span>
          )
        }
      </div>
    </div>
  );
}

export default Login;
