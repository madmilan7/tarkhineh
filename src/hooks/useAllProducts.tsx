import { fetchProducts } from "../services/api";
import { useQuery } from "@tanstack/react-query";

export type dataType = {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  price: number;
  discount: number;
};

const useAllProducts = () => {
  return useQuery<dataType[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};

export default useAllProducts;
