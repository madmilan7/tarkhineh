import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000/",
});

const fetchProducts = async () => {
  const { data } = await client.get("/products");
  return data;
};

const getProduct = async (id: number) => {
  const { data } = await client.get(`/products/${id}`);
  return data;
};

export { fetchProducts, getProduct };
