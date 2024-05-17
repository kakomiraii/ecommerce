// src/components/CartIcon.js
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa"; 
import { selectCartItemCount } from "../redux/selectors"; 

const CartIcon = () => {
  const cartItemCount = useSelector(selectCartItemCount); 

  return (
    <Link to="/cart" className="fixed top-4 right-4">
      <FaShoppingCart />
      <span className="cart-item-count">{cartItemCount}</span>
    </Link>
  );
};

export default CartIcon;
