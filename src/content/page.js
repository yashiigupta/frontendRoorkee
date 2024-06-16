import { FaArrowLeft, FaShare } from "react-icons/fa";

const Apply = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Back Button */}
      <div className="text-black ">
        <button className="relative top-4 left-4 text-black py-2 px-4 rounded flex items-center transition duration-300 ease-in-out hover:font-bold">
          <FaArrowLeft className="h-5 w-5 mr-2 " />
          Back
        </button>
      </div>

      <div className="pt-20 text-black mr-[110px] mr-[10px] ml-[110px]">
        {/* Div one with share scheme */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="mr-4 font-bold">
              Adi Dravidar and Tribal Welfare Department
            </h1>
            <p className="py-0.1 px-2 bg-gray-200 text-black rounded">
              Last updates on 14.06.2024
            </p>
          </div>
          <button className="flex items-center py-2 px-4 rounded transition duration-300 ease-in-out hover:font-bold">
            <FaShare className="h-5 w-5 mr-2" />
            Share scheme
          </button>
        </div>

        {/* Div two */}

        <div className="mt-8">
          <div className="space-y-4">
            <hr />
            <div className="flex items-start">
              <h1 className="text-lg font-semibold w-36">Department:</h1>
              <p className="ml-2">Department Name Here</p>
            </div>
            <hr />
            <div className="flex items-start">
              <h1 className="text-lg font-semibold w-36">Title:</h1>
              <p className="ml-2">Title Here</p>
            </div>
            <hr />
            <div className="flex items-start">
              <h1 className="text-lg font-semibold w-36">District:</h1>
              <p className="ml-2">District Name Here</p>
            </div>
            <hr />
            <div className="flex items-start">
              <h1 className="text-lg font-semibold w-36">
                Eligibility Criteria:
              </h1>
              <p className="ml-2">Eligibility Criteria Here</p>
            </div>
            <hr />
            <div className="flex items-start">
              <h1 className="text-lg font-semibold w-36">Uploaded File:</h1>
              <p className="ml-2">File Name Here</p>
            </div>
            <hr />
          </div>
        </div>

        {/* Apply button */}
        <div className="mt-4 flex justify-center">
          <button className="py-1 px-6 bg-black text-white rounded-[5px] transition duration-300 ease-in-out hover:bg-red-500 hover:text-black-500">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apply;