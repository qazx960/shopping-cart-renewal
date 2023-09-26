import { Link } from "react-router-dom";

export const FilterTab = () => {
  return (
    <div className="flex items-center justify-center gap-2 p-4">
      <Link to="/products">
        <button className="px-4 py-2 text-white bg-emerald-500 rounded-lg focus:outline-none focus:bg-sky-600">
          All
        </button>
      </Link>

      <Link to="/products/electronics">
        <button className="px-4 py-2 text-white bg-emerald-500 rounded-lg focus:outline-none focus:bg-sky-600">
          Electronics
        </button>
      </Link>
      <Link to="/products/jewelery">
        <button className="px-4 py-2 text-white bg-emerald-500 rounded-lg focus:outline-none focus:bg-sky-600">
          Jewelry
        </button>
      </Link>
      <Link to="/products/mens">
        <button className="px-4 py-2 text-white bg-emerald-500 rounded-lg focus:outline-none focus:bg-sky-600">
          Men's Clothing
        </button>
      </Link>
      <Link to="/products/womens">
        <button className="px-4 py-2 text-white bg-emerald-500 rounded-lg focus:outline-none focus:bg-sky-600">
          Women's Clothing
        </button>
      </Link>
    </div>
  );
};
