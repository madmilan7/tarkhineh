import React, { ReactNode, createContext, useState } from "react";
import { dataType } from "../@types/assets/types";

interface ContextType {
  cart: dataType[];
  setCart: (product: dataType[]) => void;
}

export const CartContext = createContext<ContextType | undefined>(undefined);

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<dataType[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
