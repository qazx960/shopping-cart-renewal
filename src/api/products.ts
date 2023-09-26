import axios from "axios";

export interface ProductDetailParam {
  productId: number;
}
export interface Category {
  category: string;
}

export const productList = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response;
};
export const productFilteredList = async (category: Category) => {
  const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
  return response;
};

export const productDetail = async (productId: ProductDetailParam) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/${productId}`
  );
  return response.data;
};

export const deleteProduct = async (productId: ProductDetailParam) => {
  const response = await axios.delete(
    `https://fakestoreapi.com/products/${productId}`
  );
  return response;
};

export const productCategory = async (category: Category) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return response;
};
