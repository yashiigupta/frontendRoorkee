import { IoArrowBackOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function Tabs(props) {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust breakpoint as needed
    };

    checkScreenSize(); // Check initial screen size

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <>
      <div className="mt-5 mb-5 pt-2">
        {isDesktop ? (
          // Desktop view buttons
          <div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <button
                  className="text-center font-medium py-2 px-4 rounded-lg bg-gray-50 mr-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  onClick={() => props.setComponent("Schemes")}
                >
                  Schemes
                </button>
                <button
                  className="text-center font-medium py-2 px-4 rounded-lg bg-gray-50 mr-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  onClick={() => props.setComponent("Job Openings")}
                >
                  Job Openings
                </button>
                <button
                  className="text-center font-medium py-2 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  onClick={() => props.setComponent("Scholarships")}
                >
                  Scholarships
                </button>
              </div>
              <div>
                <button className="font-semibold p-2 rounded-lg border border-gray-300 bg-white mr-2">
                  Regional Language
                </button>
                <button className="font-semibold p-2 rounded-lg border border-gray-300 bg-white px-7">
                  English
                </button>
              </div>
            </div>

            {/* Back button for desktop view */}
            <div className="mb-5">
              <button className="flex items-center justify-between p-0 border-none text-base bg-white">
                <IoArrowBackOutline className="mr-1 text-xl" /> Back
              </button>
            </div>
          </div>
        ) : (
          // Mobile view (show menu toggle and potentially a mobile menu)
          <div className="flex justify-between items-center mb-5">
            <button className="flex items-center justify-between p-0 border-none text-base bg-white">
              <IoArrowBackOutline className="mr-1 text-xl" /> Back
            </button>
            <button className="font-semibold p-2 rounded-lg border border-gray-300 bg-white px-7 mr-2">
              English
            </button>
          </div>
        )}
      </div>
    </>
  );
}
