import React from "react";
import { Rating } from "@mui/material";

// Icons
import heart from "../assets/icons/Heart.svg";
// Functions
import { toPersian } from "../utils/toPersian";

const Card: React.FC<any> = ({ data }) => {
  const { id, title, image, description, category, price, discount } = data;

  const newPrice: number = price - price * (discount / 100);

  return (
    <div
      className="flex border border-gray_4 rounded-lg overflow-hidden w-card h-card
                    hover:shadow-md group"
    >
      <div className="flex-shrink-0">
        <img className="h-card object-cover" src={image} alt="خوشمزه س" />
      </div>
      <div className="flex flex-col justify-between pl-4 pb-1.5 pt-3 pr-8 w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray_8">{title}</h3>
          <img src={heart} alt="heart" className="invisible group-hover:visible" />
        </div>
        <div className="flex items-center justify-between gap-3">
          <p className="text-gray_8">{description}</p>
          {/* price & discount */}
          <div>
            {discount > 0 && (
              <div className="flex items-center justify-end gap-3">
                <p className="text-gray_5 line-through">
                  {price.toLocaleString("fa-IR")}
                </p>
                <p className="text-sm text-error font-semibold bg-error_extralight rounded-lg px-1">
                  %{toPersian(discount)}
                </p>
              </div>
            )}
            <p className="text-gray_8 text-lg font-semibold whitespace-nowrap pt-2">
              {newPrice.toLocaleString("fa-IR")} تومان
            </p>
          </div>
        </div>
        {/* button & rate */}
        <div className="flex items-center justify-between">
          <Rating
            name="half-rating"
            defaultValue={5}
            precision={0.5}
            dir="ltr"
          />
          <button className="bg-primary text-white px-14 py-2 rounded">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
