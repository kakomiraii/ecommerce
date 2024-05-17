// src/components/CartIcon.js
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingBag } from "react-icons/fa";
import { selectCartItemCount } from "../redux/selectors";

const CartIcon = () => {
  const cartItemCount = useSelector(selectCartItemCount);

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
