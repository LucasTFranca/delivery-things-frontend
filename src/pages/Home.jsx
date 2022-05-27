import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import ProductContext from '../context/ProductContext';

function Home() {
  const { products, updateProducts } = useContext(ProductContext);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  return (
    <div>
      <Header />
      {
        products.map((product) => <ProductCard key={product.title} product={product} />)
      }
    </div>
  );
}

export default Home;
