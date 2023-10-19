import { useNavigate } from "react-router-dom";
import { useAddProductMutation } from "../hooks/useAddProductMutation";
import { useState } from "react";

export const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  // const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const { mutate: addProduct, isError, isLoading } = useAddProductMutation();

  // console.log(addProduct);

  if (isError) {
    return <h1>Error...</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleAddProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      addProduct({ title, price, description, category });
      navigate("/products");
      console.log(addProduct);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,.4)]">
      <div className="absolute top-0 right-0 bottom-0 left-0 m-auto  w-[30rem] h-[34rem] flex flex-col items-center justify-between">
        <form
          onSubmit={handleAddProduct}
          className="bg-white w-full h-[88%] flex flex-col gap-4 items-center justify-center"
        >
          <h1>Add a product</h1>
          <input
            className="p-2 h-[40px] w-[80%] mx-auto bg-gray-200"
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
          <input
            className="p-2 h-[40px] w-[80%] mx-auto bg-gray-200"
            type="number"
            placeholder="price"
            value={price}
            onChange={(e) => {
              setPrice(parseFloat(e.target.value));
            }}
            required
          />
          <input
            className="p-2 h-[40px] w-[80%] mx-auto bg-gray-200"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          />
          {/* <input
            className="p-2 h-[40px] w-[80%] mx-auto bg-gray-200"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            required
          /> */}
          <input
            className="p-2 h-[40px] w-[80%] mx-auto bg-gray-200"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            required
          />
          <button className="w-[8rem] h-[2.25rem] rounded   bg-blue-500 hover:bg-green-600 text-white">
            Submit
          </button>
        </form>
        <button
          onClick={() => navigate(-1)}
          className="w-[10rem] h-[3rem]  bg-red-500 hover:bg-green-600 text-white "
        >
          Close
        </button>
      </div>
    </div>
  );
};
