import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductContext from '../../context/ProductContext';

import './Home.css';

function Home() {
  const { products, updateProducts } = useContext(ProductContext);

  useEffect(() => {
    updateProducts();
  }, []);

  return (
    <div className="home">
      <Header />
      <div className="product-card-container">
        {
          products.map((product) => <ProductCard key={product.title} product={product} />)
        }
      </div>
    </div>
  );
}

export default Home;
