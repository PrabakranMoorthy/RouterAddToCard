import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-300 dark:bg-gray-800">
      <div className="max-w-screen-xl flex justify-between items-center p-4">
        <div className="flex gap-8">
          <img
            className="h-10 w-12 rounded-full"
            src="src/assets/logo.png"
            alt="icon"
          />
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Shopping Cart
          </h1>
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="text-xl text-pink-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className=" text-xl text-red-950">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
