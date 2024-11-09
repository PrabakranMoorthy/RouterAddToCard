import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductDescription from "../Components/ProductDescription";
import PropTypes from "prop-types";

const Home = ({ addToCart, cart, removeFromCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data));
  }, []);

  const handleCartToggle = (product) => {
      const isInCart = cart.some((item) => item.id === product.id);
      isInCart ? removeFromCart(product.id):addToCart(product)
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="bg-slate-200 p-4 shadow rounded">
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-contain mb-4 mix-blend-multiply"
          />
          <h2 className="text-xl text-gray-700 font-semibold mb-2">
            {product.title}
          </h2>
          <h2 className="font-bold mb-2">${product.price}</h2>
          <ProductDescription description={product.description} />
          <button
            onClick={() => handleCartToggle(product)}
            className={`py-2 px-4 rounded text-white ${
              cart.some((item) => item.id === product.id)
                ? "bg-red-500"
                : "bg-blue-500"
            }`}
          >
            {cart.some((item) => item.id === product.id)
              ? "Remove from Cart"
              : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
};

export default Home;
