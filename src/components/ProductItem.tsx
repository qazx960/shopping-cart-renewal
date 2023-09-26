import { useProductDetailQuery } from "../hooks/useProductDetailQuery";

export const ProductItem = ({ productId }) => {
  // const productId = 1;
  const {
    isError,
    isLoading,
    data: product,
  } = useProductDetailQuery(productId);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  return (
    <div className="m-3 w-[20rem] h-[20rem] bg-white shadow-lg rounded-lg p-2 flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center h-1/2">
        <img
          src={product.image}
          alt="product image"
          className=" h-[6rem]  object-cover"
        />

        <h3 className="text-[16px] text-center font-semibold">
          {product.title}
        </h3>
      </div>

      <div className="flex flex-col items-center justify-center h-1/2">
        <p className="text-lg font-semibold text-gray-800">${product.price}</p>
        <p className="text-gray-600">
          Reviews {product.rating?.rate} ({product.rating?.count})
        </p>

        <button className="mt-4 bg-blue-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
