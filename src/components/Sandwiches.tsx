import React from "react";
import useAllProducts from "../hooks/useAllProducts";

// Components
import Card from "../ui/Card";

const Sandwiches = () => {
  const { data } = useAllProducts();

  return (
    <div>
      <h3 className="text-2xl text-gray_8 font-semibold py-6 pr-1">ساندویچ‌ها</h3>
      <div className="flex justify-center flex-wrap gap-6 mb-10">
        {data
          ?.filter((item) => item.category === "ساندویچ")
          .map((food) => (
            <Card key={food.id} data={food} />
          ))}
      </div>
    </div>
  );
};

export default Sandwiches;
