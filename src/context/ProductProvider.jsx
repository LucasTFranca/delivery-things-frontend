import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ProductContext from './ProductContext';
import { getAllProducts } from '../service';

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getAllProducts();

      setProducts(data);
    }

    loadProducts();
  }, [setProducts]);

  const state = useMemo(() => ({ products }), [products]);

  return (
    <ProductContext.Provider value={state}>
      { children }
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default ProductProvider;
