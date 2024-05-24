import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, changeQuantity } from "../store";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleIncrement = (product) => {
    dispatch(changeQuantity({ id: product.id, amount: 1 }));
  };

  const handleDecrement = (product) => {
    dispatch(changeQuantity({ id: product.id, amount: -1 }));
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const distinctProductCount = cart.length;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">
        Cart ({totalItems} items, {distinctProductCount} products)
      </h2>
      <div>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="border p-4 mb-2 flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg">{item.name}</h3>
                <p className="text-gray-600">₹{item.price * item.quantity}</p>
              </div>
              <div className="flex items-center">
                <button
                  className="bg-gray-300 text-gray-700 px-2 py-1"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="bg-gray-300 text-gray-700 px-2 py-1"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 ml-4"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
