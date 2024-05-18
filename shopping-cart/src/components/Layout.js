import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { IoHome } from "react-icons/io5";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/" className="fixed top-4 left-4 flex items-center">
                <IoHome
                  className="text-gray-700 pr-2"
                  style={{ fontSize: "2.5rem" }}
                />
              </Link>
            </li>
          </ul>
        </nav>
        <CartIcon />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
