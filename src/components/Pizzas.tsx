import React from "react";
import useAllProducts from "../hooks/useAllProducts";

// Components
import Card from "../ui/Card";

const Pizzas = () => {
  const { data } = useAllProducts();

  return (
    <div>
      <h3 className="text-2xl text-gray_8 font-semibold py-6 pr-1">پیتزاها</h3>
      <div className="flex justify-center flex-wrap gap-6 mb-6">
        {data
          ?.filter((item) => item.category === "پیتزا")
          .map((food) => (
            <Card key={food.id} data={food} />
          ))}
      </div>
    </div>
  );
};

export default Pizzas;
