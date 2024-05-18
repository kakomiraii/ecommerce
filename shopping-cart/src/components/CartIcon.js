import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingBag } from "react-icons/fa";

const CartIcon = () => {
  const cartItemCount = useSelector((state) =>
    state.cart.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
      <Link to="/cart" className="fixed top-4 right-4 flex items-center">
        <FaShoppingBag
          className="text-gray-700 pr-2"
          style={{ fontSize: "2.0rem" }}
        />
        <span className="cart-item-count text-blue-700">{cartItemCount}</span>
      </Link>
  );
};

export default CartIcon;
