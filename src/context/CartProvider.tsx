import React, { createContext, useState } from "react";

export const CartContext = createContext<any>([]);

const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<any[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
