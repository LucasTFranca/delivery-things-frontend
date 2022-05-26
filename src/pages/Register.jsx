import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { registerUser } from '../service';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  function handleChange({ target }) {
    setError('');

    const inputDictionary = {
      email: () => setEmail(target.value),
      password: () => setPassword(target.value),
      name: () => setName(target.value),
    };

    inputDictionary[target.id]();
  }

  function finishRegistration() {
    navigate('/login');
  }

  async function verificationToRegister() {
    const user = {
      name,
      email,
      password,
    };

    const data = await registerUser(user);

    if (data.message) finishRegistration();
    else setError('Email already in use');
  }

  function onSubmit() {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const emailIsValid = emailRegex.test(email);

    if (!emailIsValid) {
      setError('Invalid email!');
    } else if (password.length < 5) {
      setError('Password must be at least 5 characters!');
    } else if (name.length < 4) {
      setError('Name must be at least 4 characters!');
    } else {
      verificationToRegister();
    }
  }

  return (
    <div>
      <Header />
      <form>
        {
          error && (
            <span>{error}</span>
          )
        }

        <label htmlFor="name">
          Name
          <input onChange={handleChange} value={name} type="text" id="name" />
        </label>

        <label htmlFor="email">
          Email
          <input onChange={handleChange} value={email} type="email" id="email" />
        </label>

        <label htmlFor="password">
          Password
          <input onChange={handleChange} value={password} type="password" id="password" />
        </label>

        <button onClick={onSubmit} type="button">Register</button>
      </form>
    </div>
  );
}

export default Register;
