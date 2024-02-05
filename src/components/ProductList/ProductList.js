import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <h1 className="product-list-title">Products</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
