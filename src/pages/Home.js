import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, changeQuantity } from "../Redux/store";
import { products } from "../data";

const Home = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleIncrement = (product) => {
    dispatch(changeQuantity({ id: product.id, amount: 1 }));
  };

  const handleDecrement = (product) => {
    dispatch(changeQuantity({ id: product.id, amount: -1 }));
  };

  const isInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <h3 className="text-xl mt-2">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-gray-800">₹{product.price}</p>
            {isInCart(product) ? (
              <div className="flex items-center mt-2">
                <button
                  className="bg-gray-300 text-gray-700 px-2 py-1"
                  onClick={() => handleDecrement(product)}
                >
                  -
                </button>
                <span className="mx-2">
                  {cart.find((item) => item.id === product.id)?.quantity}
                </span>
                <button
                  className="bg-gray-300 text-gray-700 px-2 py-1"
                  onClick={() => handleIncrement(product)}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                className="bg-blue-500 text-white px-4 py-2 mt-2"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
