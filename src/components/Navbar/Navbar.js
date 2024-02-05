import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1>E-commerce Store</h1>

      <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active-tab' : ''}>Dashboard</Link>
      <Link to="/products" className={location.pathname === '/products' ? 'active-tab' : ''}>Products</Link>
      <Link to="/orders" className={location.pathname === '/orders' ? 'active-tab' : ''}>Orders</Link>
      <Link to="/customers" className={location.pathname === '/customers' ? 'active-tab' : ''}>Customers</Link>
    </nav>
  );
};

export default Navbar;
