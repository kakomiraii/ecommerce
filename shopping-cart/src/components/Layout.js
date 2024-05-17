// src/components/Layout.js
import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon"; // Import CartIcon component

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <CartIcon /> {/* Render CartIcon component */}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
