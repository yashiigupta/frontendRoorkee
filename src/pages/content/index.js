import { useState } from "react";
import { useRouter } from "next/router";
import { FaArrowLeft, FaShare } from "react-icons/fa";
import ShareModal from "./shareModel";

const Apply = () => {
  const router = useRouter();
  const {
    department,
    title,
    beneficiary_scheme_name,
    eligibility_criteria,
    introduced_date,
    scheme_link,
  } = router.query;

  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const toggleShareModal = () => {
    setIsShareModalOpen(!isShareModalOpen);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Back Button */}
      <div className="text-black mt-4 ml-4 absolute top-0 left-0">
        <button
          className="text-black py-2 px-4 rounded flex items-center transition duration-300 ease-in-out hover:font-bold"
          onClick={() => router.back()}
        >
          <FaArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>
      </div>

      {/* Main content */}
      <div className="pt-20 px-4 w-full sm:max-w-3xl">
        <div className="flex items-center justify-between">
          {/*first row contaioning heading, last update date, share button */}
          <div className="flex items-center">
            <h1 className="mr-4 font-bold">
              {department || "Data is not available"}
            </h1>
            <p className="py-0.5 px-2 bg-gray-200 text-black rounded text-sm">
              {introduced_date && `Last updates on ${introduced_date}`}
            </p>
          </div>
          <button
            className="flex items-center py-2 px-4 rounded transition duration-300 ease-in-out hover:text-red-500"
            onClick={toggleShareModal}
          >
            <FaShare className="h-5 w-5 mr-2" />
            Share scheme
          </button>
        </div>

        {/* Details section */}
        <div className="mt-8 space-y-4 w-full">
          {/* Department */}
          <div className="flex items-start">
            <h1 className="text-lg font-semibold w-36">Department:</h1>
            <p className="ml-2 flex-1">
              {department || "Data is not available"}
            </p>
          </div>
          <hr />

          {/* Title */}
          <div className="flex items-start">
            <h1 className="text-lg font-semibold w-36">Title:</h1>
            <p className="ml-2 flex-1">{title || "Data is not available"}</p>
          </div>
          <hr />

          {/* Who can apply */}
          <div className="flex items-start">
            <h1 className="text-lg font-semibold w-36">Who can apply:</h1>
            <p className="ml-2 flex-1">
              {beneficiary_scheme_name || "Data is not available"}
            </p>
          </div>
          <hr />

          {/* Eligibility criteria */}
          <div className="flex items-start">
            <h1 className="text-lg font-semibold w-36">
              Eligibility criteria:
            </h1>
            <p className="ml-2 flex-1">
              {eligibility_criteria || "Data is not available"}
            </p>
          </div>
          <hr />
        </div>

        {/* Apply button */}
        <div className="mt-4 flex justify-center w-full">
          {scheme_link && (
            <a
              href={scheme_link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[90%] sm:max-w-fit py-2 px-10 bg-black text-white font-semibold rounded-[10px] transition hover:bg-red-500 text-center"
              // className="w-full max-w-[90%] py-2 px-10 bg-black text-white font-semibold rounded-[10px] transition hover:bg-red-500 text-center"
            >
              Apply
            </a>
          )}
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onRequestClose={toggleShareModal}
        shareUrl={typeof window !== "undefined" ? window.location.href : ""}
      />
    </div>
  );
};

export default Apply;
