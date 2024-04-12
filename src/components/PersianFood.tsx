import React from "react";
import useAllProducts from "../hooks/useAllProducts";

// Components
import Card from "../ui/Card";
// Icons
import cart from "../assets/icons/shopping-cart.svg";

const PersianFood = () => {
  const { data } = useAllProducts();

  return (
    <div className="py-3 lg:py-6">
      <div className="flex items-center justify-between lg:mt-8 pb-3 lg:pb-6">
        <h3 className="text-lg lg:text-2xl text-gray_8 font-semibold pr-1">
          غذاهای ایرانی
        </h3>
        <button className="flex items-center gap-2 text-primary border border-primary rounded 
                           text-sm lg:text-lg px-2 lg:px-8 py-1.5">
          <img src={cart} alt="سبد خرید" className="w-5 lg:w-7" />
          تکمیل خرید
        </button>
      </div>
      <div className="flex justify-center flex-wrap gap-6">
        {data
          ?.filter((item) => item.category === "غذای ایرانی")
          .map((food) => (
            <Card key={food.id} data={food} />
          ))}
      </div>
    </div>
  );
};

export default PersianFood;
