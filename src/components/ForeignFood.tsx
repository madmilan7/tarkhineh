import React from "react";
import useAllProducts from "../hooks/useAllProducts";

// Components
import Card from "../ui/Card";

const ForeignFood = () => {
  const { data, isPending, isError } = useAllProducts();

  if (isPending) return <h1>درحال دریافت ...</h1>;

  if (isError) return <h3>مشکلی وجود دارد</h3>;

  return (
    <div className="">
      <h3 className="text-lg lg:text-2xl text-gray_8 font-semibold py-3 lg:py-6 pr-1">
        غذاهای غیرایرانی
      </h3>
      <div className="flex justify-center flex-wrap gap-6 pb-3 lg:pb-6">
        {data
          ?.filter((item) => item.category === "غذای غیرایرانی")
          .map((food) => (
            <Card key={food.id} data={food} />
          ))}
      </div>
    </div>
  );
};

export default ForeignFood;
