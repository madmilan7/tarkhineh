import axios from "axios";

const client = axios.create({
  baseURL: "https://tarkhineh-z7r2.onrender.com",
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
