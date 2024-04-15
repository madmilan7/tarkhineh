import React, { useContext } from "react";
import { Rating } from "@mui/material";

// Icons
import heart from "../assets/icons/Heart.svg";
// Functions
import { toPersian } from "../utils/toPersian";
// Context
import { CartContext } from "../context/CartProvider";
// Types
import { dataType } from "../@types/assets/types";

interface PropsType {
  data: dataType;
}

const Card: React.FC<PropsType> = ({ data }) => {
  const { title, image, description, price, discount } = data;

  const { cart, setCart } = useContext(CartContext);

  const addToCart = () => {
    if (!cart?.find((item) => item.id === data.id)) {
      setCart([...cart, { ...data, quantity: 1 }]);
    }
  };

  const newPrice: number = price - price * (discount / 100);

  return (
    <div
      className="flex border border-gray_4 rounded-lg overflow-hidden w-card h-28 lg:h-card
                    lg:hover:shadow-md group"
    >
      <div className="shrink-0">
        <img
          className="lg:h-card h-28 w-24 md:w-full object-cover"
          src={image}
          alt="خوشمزه س"
        />
      </div>
      <div className="flex flex-col justify-between px-2 lg:pl-4 pb-1.5 pt-3 lg:pr-8 w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-base lg:text-xl lg:font-semibold text-gray_8">
            {title}
          </h3>
          <img
            src={heart}
            alt="heart"
            className="invisible lg:group-hover:visible"
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <p
            className="text-xs md:text-sm lg:text-base text-gray_8 overflow-hidden text-ellipsis 
                        whitespace-nowrap md:whitespace-normal w-36 md:w-full"
          >
            {description}
          </p>
          {/* price & discount */}
          <div>
            {discount > 0 && (
              <div className="flex items-center justify-end gap-3">
                <p className="text-xs md:text-sm lg:text-base text-gray_5 line-through">
                  {price.toLocaleString("fa-IR")}
                </p>
                <p className="text-xs md:text-sm text-error font-semibold bg-error_extralight rounded-lg px-1">
                  %{toPersian(discount)}
                </p>
              </div>
            )}
            <p className="text-gray_8 text-xs md:text-sm lg:text-lg font-semibold whitespace-nowrap pt-2">
              {newPrice.toLocaleString("fa-IR")} تومان
            </p>
          </div>
        </div>
        {/* button & rate */}
        <div className="flex items-center justify-between">
          <img src={heart} alt="heart" className="lg:hidden w-5" />
          <div className="md:hidden">
            <Rating
              name="half-rating"
              defaultValue={5}
              precision={0.5}
              dir="ltr"
              size="small"
            />
          </div>
          <div className="hidden md:flex">
            <Rating
              name="half-rating"
              defaultValue={5}
              precision={0.5}
              dir="ltr"
            />
          </div>
          <button
            className="bg-primary text-xs md:text-sm lg:text-base text-white px-4 lg:px-14 py-2 rounded"
            onClick={addToCart}
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
