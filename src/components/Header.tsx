import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-gray-200 h-[5rem] flex items-center justify-between px-[1.25rem] text-[18px]">
      <div className="flex items-center gap-1.5">
        <FaShoppingBag size={28} />
        <Link to="/" className="text-[22px]">
          ShopHub
        </Link>
      </div>

      <nav className="flex items-center gap-4">
        <Link to="/products">
          <button className="cursor-pointer">Products</button>
        </Link>
        <Link to="/products/add">
          <button className="cursor-pointer">Add Product</button>
        </Link>
        {/* {showAddProductModal && <AddProduct />} */}
        <div className="flex items-center gap-1">
          <Link to="/">
            <FaShoppingCart />
          </Link>
          <span>2</span>
        </div>
      </nav>
    </header>
  );
};
