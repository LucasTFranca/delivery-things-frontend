import PropTypes from 'prop-types';
import React from 'react';

function ProductCard({ product }) {
  return (
    <div>
      <span>{product.title}</span>
      <span>{product.description}</span>
      <span>{product.value}</span>
      <img src={product.image} alt={product.title} />
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
