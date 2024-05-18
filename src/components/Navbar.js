import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl">Shopping Cart</h1>
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
