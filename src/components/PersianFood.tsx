import React from "react";
import useAllProducts from "../hooks/useAllProducts";

// Components
import Card from "../ui/Card";
// Icons
import cart from "../assets/icons/shopping-cart.svg";

const PersianFood = () => {
  const { data } = useAllProducts();

  return (
    <div>
      <div className="flex items-center justify-between mt-8">
        <h3 className="text-2xl text-gray_8 font-semibold py-6 pr-1">
          غذاهای ایرانی
        </h3>
        <button className="flex items-center gap-2 text-primary border border-primary rounded 
                            text-lg px-8 py-1.5">
          <img src={cart} alt="سبد خرید" />
          تکمیل خرید
        </button>
      </div>
      <div className="flex justify-center flex-wrap gap-6 mb-6">
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
