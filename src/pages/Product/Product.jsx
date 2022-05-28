import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { addNewProduct } from '../../service';

import './Product.css';

function Product() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [image, setImage] = useState(undefined);
  const [error, setError] = useState('');

  function handleChange({ target }) {
    setError('');

    const inputDictionary = {
      title: () => setTitle(target.value),
      description: () => setDescription(target.value),
      value: () => setValue(target.value),
      image: () => setImage(target.files[0]),
    };

    inputDictionary[target.id]();
  }

  async function addProduct() {
    const product = {
      title,
      description,
      value,
      image,
    };

    const token = localStorage.user;
    const data = await addNewProduct(product, token);

    if (!data.message) setError('Product already exist');
    else {
      setTitle('');
      setDescription('');
      setValue(0);
      alert('Product added');
    }
  }

  function onSubmit() {
    if (title.length < 4) {
      setError('Title must be at least 4 characters!');
    } else if (description.length < 10) {
      setError('Password must be at least 10 characters!');
    } else if (value <= 0) {
      setError('Value must be at least 1!');
    } else if (image === undefined) {
      setError('Select some image!');
    } else {
      addProduct();
    }
  }

  return (
    <div className="product">
      <Header />
      <div className="product-form-container">
        <form className="product-form">
          <label htmlFor="title">
            Title
            <input onChange={handleChange} value={title} type="text" id="title" />
          </label>

          <label htmlFor="description">
            Description
            <textarea maxLength={230} onChange={handleChange} value={description} type="text" id="description" />
          </label>

          <label htmlFor="value">
            Value
            <input min={0} onChange={handleChange} value={value} type="number" id="value" />
          </label>

          <label htmlFor="image">
            image
            <input onChange={handleChange} type="file" id="image" />
          </label>

          <button onClick={onSubmit} type="button">Add</button>
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

export default Product;
