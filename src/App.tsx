import React from "react";
import "./css/main.css";
import { Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./components/Cart";
import SuccessfulPayment from "./components/SuccessfulPayment";
// Context
import CartProvider from "./context/CartProvider";

const App = () => {
  return (
    <div>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/successfulPayment" element={<SuccessfulPayment />} />
        </Routes>
      </CartProvider>
    </div>
  );
};

export default App;
