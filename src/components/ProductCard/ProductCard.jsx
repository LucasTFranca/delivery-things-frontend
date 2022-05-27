import PropTypes from 'prop-types';
import React from 'react';

import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <span className="product-value">{`R$: ${product.value}`}</span>
      <span>{product.title}</span>
      <span className="product-description">{product.description}</span>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
