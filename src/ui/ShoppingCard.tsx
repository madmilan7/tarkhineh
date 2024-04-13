import React, { useContext } from "react";
import { Rating } from "@mui/material";

// Functions
import { toPersian } from "../utils/toPersian";
// Icons
import trash from "../assets/icons/trash.svg";
import { CartContext } from "../context/CartProvider";
// Types
import { dataType } from "../@types/assets/types";

interface PropsType {
  data: dataType;
}

const ShoppingCard: React.FC<PropsType> = ({ data }) => {
  const { cart, setCart } = useContext(CartContext);

  const newPrice: number = data.price - data.price * (data.discount / 100);

  const increase = () => {
    setCart(
      cart?.map((item) => {
        if (item.id === data.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      })
    );
  };
  const decrease = () => {
    setCart(
      cart?.map((item) => {
        if (item.id === data.id && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
    );
  };
  const removeFromCart = () => {
    const newCart: any = cart?.filter((item) => item.id !== data.id);
    setCart([...newCart]);
  };

  return (
    <div
      className="flex border border-gray_4 rounded-lg mx-6 my-4 overflow-hidden"
      dir="rtl"
    >
      {/* right */}
      <div className="flex-shrink-0">
        <img className="h-card object-cover" src={data.image} alt="تصویر" />
      </div>
      {/* left */}
      <div className="flex flex-col justify-between px-8 py-4 w-full">
        {/* title */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-gray_8">{data.title}</h3>
          <img
            src={trash}
            className="cursor-pointer"
            alt="remove"
            onClick={removeFromCart}
          />
        </div>
        {/* desc & price & discount */}
        <div className="flex items-center justify-between">
          <p className="text-gray_8">{data.description}</p>
          <div>
            {data.discount > 0 && (
              <div className="flex items-center justify-end gap-3">
                <p className="text-lg text-gray_5 line-through">
                  {data.price.toLocaleString("fa-IR")}
                </p>
                <p className="text-sm text-error font-semibold bg-error_extralight rounded-lg px-1">
                  %{toPersian(data.discount)}
                </p>
              </div>
            )}
          </div>
        </div>
        {/* rate & buttons & newPrice */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Rating
              name="half-rating"
              defaultValue={5}
              precision={0.5}
              dir="ltr"
            />
            <div className="flex items-center gap-2 bg-tint_1 w-fit px-1.5 py-1 rounded">
              <button
                className="text-primary text-lg cursor-pointer"
                onClick={increase}
              >
                +
              </button>
              <span className="text-primary">{toPersian(data.quantity)}</span>
              <button
                className="text-primary text-lg cursor-pointer"
                onClick={decrease}
              >
                -
              </button>
            </div>
          </div>
          <p className="text-gray_8 text-xl font-semibold whitespace-nowrap">
            {newPrice.toLocaleString("fa-IR")} تومان
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
