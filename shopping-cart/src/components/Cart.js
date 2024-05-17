// src/components/Cart.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { selectCartItems, selectCartTotal } from "../redux/selectors";
import { removeFromCart, updateCartItemQuantity } from '../redux/actions';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotal);
  const formattedTotalAmount = totalAmount.toFixed(2);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.product.id));
  };

  const handleQuantityChange = (item, newQuantity) => {
    dispatch(updateCartItemQuantity(item.product.id, newQuantity));
  };

  return (
    <div>
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Your Cart</h1>
        <Link to="/" className="text-gray-600 hover:text-gray-800">
          <FaShoppingCart className="inline-block mr-1" />
          View Products
        </Link>
      </header>
      {cartItems.map((item) => (
        <div
          key={item.product.id}
          className="flex items-center justify-between border-b border-gray-200 py-2"
        >
          <div className="flex items-center">
            <img
              src={item.product.image}
              alt={item.product.title}
              className="w-12 h-12 object-cover mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">{item.product.title}</h2>
              <p className="text-gray-600">
                ${item.product.price} x {item.quantity}
              </p>
              <div>
                <button className="mr-2" onClick={() => handleQuantityChange(item, item.quantity - 1)}>-</button>
                <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))} className="w-16" />
                <button className="ml-2" onClick={() => handleQuantityChange(item, item.quantity + 1)}>+</button>
              </div>
            </div>
          </div>
          <div>
            <button className="text-red-500 hover:text-red-600" onClick={() => handleRemoveFromCart(item)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <h2 className="text-xl font-semibold">
          Total Amount: ${formattedTotalAmount}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
