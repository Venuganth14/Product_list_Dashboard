import React from 'react';
import './ProductCard'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
    <p><strong>ID:</strong> {product.id}</p>
    <p><strong>Name:</strong> {product.name}</p>
    <p><strong>Price:</strong> {product.price}</p>
    <p><strong>Quantity:</strong> {product.quantity}</p>
    <button className="edit">Edit</button>
    <button className="delete">Delete</button>
  </div>
  );
};

export default ProductCard;
