import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,.4)]">
      <div className="absolute top-0 right-0 bottom-0 left-0 m-auto  w-[30rem] h-[34rem] flex flex-col items-center justify-between">
        <form className="bg-white w-full h-[88%]">hello</form>
        <button
          onClick={() => navigate(-1)}
          className="w-[10rem] h-[3rem]  bg-blue-500 hover:bg-green-600 text-white "
        >
          Close
        </button>
      </div>
    </div>
  );
};
