import React, { useContext } from "react";
// Components
import ShoppingCard from "./ShoppingCard";
// Context
import { CartContext } from "../context/CartProvider";

const ShoppingCards:React.FC = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      {cart?.map((item: any) => (
        <ShoppingCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ShoppingCards;
