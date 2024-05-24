import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const distinctProductCount = cart.length;

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl">Shopping Cart</h1>
      <div>
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/cart" className="relative">
          Cart
          {distinctProductCount > 0 && (
            <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
              {distinctProductCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
