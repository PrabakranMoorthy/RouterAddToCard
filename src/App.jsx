import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";

const App = () => {
  const [cart, setCart] = useState([]);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCart.map((item) => {
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };
  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
