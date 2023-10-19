import { Link } from "react-router-dom";
import { Card } from "../components/Card";

export const Home = () => {
  return (
    <div className="w-[100vw] h-[100vh]  bg-green-200">
      <div className="h-[80%] flex flex-col items-center justify-center gap-4">
        <h1 className=" text-4xl">ShopHub</h1>
        <div className="flex items-center justify-between w-[240px]">
          <Link to="/products" className="bg-white p-3 rounded-xl ">
            Products
          </Link>
          <Link to="/products/add" className="bg-white p-3 rounded-xl ">
            Add Product
          </Link>
        </div>
      </div>
    </div>
  );
};
