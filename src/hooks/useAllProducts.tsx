import { fetchProducts } from "../services/api";
import { useQuery } from "@tanstack/react-query";

// Types 
import { dataType } from "../@types/assets/types";

const useAllProducts = () => {
  return useQuery<dataType[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};

export default useAllProducts;
