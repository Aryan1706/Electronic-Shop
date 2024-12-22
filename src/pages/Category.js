import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

const Category = () => {
  const { category, brand } = useParams();
  const products = productsData[category]?.[brand] || [];

  return (
    <div className="container">
      <h2>{brand} Products</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-3 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;