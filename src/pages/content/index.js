import React, { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShare } from "react-icons/fa";
import ShareModal from "./shareModel";

const ApplyModal = ({ isOpen, onRequestClose, scheme }) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onRequestClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onRequestClose]);

  if (!isOpen) return null;

  const toggleShareModal = () => {
    setIsShareModalOpen(!isShareModalOpen);
  };

  return (
    <div className="fixed inset-0 z-50 pr-8 pl-8 ">
      <div className="absolute right-0">
        <div
          ref={modalRef}
          className="bg-white w-full max-w-2xl p-8 rounded-lg relative border border-gray-200 shadow-lg shadow-black-400"
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 p-2 text-lg transition duration-300 ease-in-out hover:text-red-500"
            onClick={onRequestClose}
          >
            <IoMdClose className="w-6 h-6" />
          </button>

          <div className="flex flex-col items-center min-h-screen bg-white overflow-y-auto max-h-[calc(100vh-8rem)]">
            {/* Scheme name */}
            <div className="pt-2 w-full sm:max-w-3xl flex justify-between items-center">
              <h1 className="mr-4 font-bold">
                {scheme.scheme_name || "Data is not available"}
              </h1>
            </div>
            {/* Last update date */}
            <div className="w-full sm:max-w-3xl">
              <div className="inline-block bg-purple-100 rounded-full mt-2">
                <p className="py-0.5 px-2 text-black text-sm">
                  Last updates on 12.09.2024
                  {/* {scheme.introduced_on && `Last updates on ${scheme.introduced_on}`} */}
                </p>
              </div>
            </div>

            {/* Main data section */}
            <div className="mt-8 space-y-4 w-full sm:max-w-3xl p-4">
              <div className="flex items-start pb-2">
                <h1 className="text-lg font-semi-bold w-36">Department </h1>
                <p className="ml-2 flex-1">
                  {scheme.department || "Data is not available"}
                </p>
              </div>
              <hr />

              <div className="flex items-start pb-2 pt-2">
                <h1 className="text-lg font-semi-bold w-36">Title</h1>
                <p className="ml-2 flex-1">
                  {scheme.scheme_name || "Data is not available"}
                </p>
              </div>
              <hr />

              <div className="flex items-start pb-2 pt-2">
                <h1 className="text-lg font-semi-bold w-36">Who can apply</h1>
                <p className="ml-2 flex-1">
                  {scheme.beneficiary_category || "Data is not available"}
                </p>
              </div>
              <hr />

              <div className="flex items-start pb-2 pt-2">
                <h1 className="text-lg font-semi-bold w-36">
                  Eligibility criteria
                </h1>
                <p className="ml-2 flex-1">
                  {scheme.how_to_avail || "Data is not available"}
                </p>
              </div>
              <hr />

              <div className="flex items-start pb-2 pt-2">
                <h1 className="text-lg font-semi-bold w-36">Uploaded file</h1>
                <p className="ml-2 flex-1">
                  {scheme.how_to_avail || "File not available"}
                </p>
              </div>
              <hr />
            </div>

            {/* Apply button */}
            <div>
              <div className="absolute z-50 bottom-8 right-8 w-100 mb-[70px]">
                {scheme.url && (
                  <a
                    href={scheme.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-12 bg-blue-800 text-white font-semibold rounded-[10px] transition hover:bg-red-500"
                  >
                    Apply
                  </a>
                )}
              </div>
            </div>

            {/* Share button */}
            {/* <div>
              <button
                className="flex items-center py-2 px-4 rounded transition duration-300 ease-in-out hover:text-red-500"
                onClick={toggleShareModal}
              >
                <FaShare className="h-5 w-5 mr-2" />
                Share scheme
              </button>
            </div> */}

            {/* Share Modal */}
            <ShareModal
              isOpen={isShareModalOpen}
              onRequestClose={toggleShareModal}
              shareUrl={
                typeof window !== "undefined" ? window.location.href : ""
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;
