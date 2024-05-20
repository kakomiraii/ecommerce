import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { removeFromCart, updateCartItemQuantity } from "../redux/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const totalAmount = useSelector((state) =>
    state.cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    )
  );

  const formattedTotalAmount = totalAmount.toFixed(2);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.product.id));
  };

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch(removeFromCart(item.product.id));
    } else {
      dispatch(updateCartItemQuantity(item.product.id, newQuantity));
    }
  };

  return (
    <div className="flex flex-col h-screen justify-between rounded-md">
      <header className="flex justify-between items-center bg-yellow-200 p-4 mb-4 rounded-lg">
        <h1 className="text-2xl font-semibold">Your Cart</h1>
        <Link
          to="/"
          className="text-gray-600 hover:text-gray-800 flex items-center"
        >
          <FaShoppingCart className="mr-1" />
          Continue Shopping
        </Link>
      </header>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div
            key={item.product.id}
            className="flex items-center justify-between border-b border-gray-200 py-4"
          >
            <div className="flex items-center p-3">
              <img
                src={item.product.image}
                alt={item.product.title}
                className="w-16 h-16 object-cover mr-4 rounded-md"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.product.title}</h2>
                <p className="text-gray-600">
                  ${item.product.price} x {item.quantity}
                </p>
                <div className="flex items-center">
                  <button
                    className="text-white hover:text-white rounded-md border bg-blue-800 px-2 py-1 mr-2"
                    onClick={() =>
                      handleQuantityChange(item, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item, parseInt(e.target.value))
                    }
                    className="w-12 text-center border border-gray-300 rounded-md"
                  />
                  <button
                    className="text-white hover:text-white rounded-md border bg-blue-800 px-2 py-1 ml-2"
                    onClick={() =>
                      handleQuantityChange(item, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button
                className="text-red-400 hover:text-red-600 p-4"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>No items in your cart.</div>
      )}
      <header className="flex justify-between items-center bg-yellow-200 p-4 mb-4 rounded-lg ">
        <div className="mt-4">
          <h2 className="text-xl font-semibold">
            Total Amount: ${formattedTotalAmount}
          </h2>
        </div>
      </header>
    </div>
  );
};

export default Cart;
