import { FaArrowLeftLong } from "react-icons/fa6";

const BackButton = () => {
  return (
    <div className="">
      <button className="text-black py-2  rounded flex items-center transition duration-300 ease-in-out hover:font-bold">
        <FaArrowLeftLong className="h-5 w-5 mr-2" />
        Back
      </button>
    </div>
  );
};

export default BackButton;