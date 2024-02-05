import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from './components/ProductCard/ProductCard';

const product = {
  id: 1,
  name: "Premium Comfort Series Recliner Chair",
  price: 299.99,
  quantity: 25
};

test('renders product card correctly', () => {
  const { getByText } = render(<ProductCard product={product} />);

  expect(getByText('ID:')).toBeInTheDocument();
  expect(getByText('Name:')).toBeInTheDocument();
  expect(getByText('Price:')).toBeInTheDocument();
  expect(getByText('Quantity:')).toBeInTheDocument();


  expect(getByText('1')).toBeInTheDocument(); 
  expect(getByText('Premium Comfort Series Recliner Chair')).toBeInTheDocument();
  expect(getByText('299.99')).toBeInTheDocument();
  expect(getByText('25')).toBeInTheDocument();
  
  
});
