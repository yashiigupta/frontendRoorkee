import { useState, useEffect } from 'react';
import { FaBuilding, FaMapMarkerAlt, FaUserTie, FaVenusMars, FaSortAmountDown } from 'react-icons/fa';
import { MdCurrencyRupee } from "react-icons/md";
import Categories from "./Categories";
import StateDropdown from "./DropdownStates";

export default function Schemes() {
  const [isDesktop, setIsDesktop] = useState(true); // Assume desktop mode by default

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust breakpoint (768px) as needed for your design
    };

    checkScreenSize(); // Check initial screen size

    window.addEventListener('resize', checkScreenSize); // Listen for screen size changes

    return () => {
      window.removeEventListener('resize', checkScreenSize); // Clean up listener on unmount
    };
  }, []);

  return (
    <>
      <div className="bg-white font-sans">
        <div className="mb-4">
          <h1 className="mt-0 mb-4 text-[30px] font-semibold">Jobs Opening</h1>
        </div>

        {isDesktop ? (
          // Desktop Buttons
          <div className="flex flex-wrap justify-start mb-8">
            <button className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <FaSortAmountDown className="text-gray-600 mr-1" /> Sort
              </span>
            </button>

            <button className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <FaMapMarkerAlt className="text-gray-600 mr-1" /> State
              </span>
            </button>

            <button className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <FaBuilding className="text-gray-600 mr-1" /> Department
              </span>
            </button>

            <button className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <FaUserTie className="text-gray-600 mr-1" /> Occupation
              </span>
            </button>

            <button className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <FaMapMarkerAlt className="text-gray-600 mr-1" /> Beneficiaries
              </span>
            </button>

            <button className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <FaVenusMars className="text-gray-600 mr-1" /> Gender
              </span>
            </button>

            <button className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <FaMapMarkerAlt className="text-gray-600 mr-1" /> Age
              </span>
            </button>

            <button className="mb-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <MdCurrencyRupee className="text-gray-600 text-lg mr-1" /> Income
              </span>
            </button>
          </div>
        ) : (
          // Mobile Buttons
          <div className="mb-4 flex justify-around">
            <button className="w-[48%] h-[50px] p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100 text-center">
              <span className="flex items-center justify-center">
                <FaSortAmountDown className="text-gray-600 mr-1" /> Sort
              </span>
            </button>

            <button className="w-[48%] h-[50px] p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100 text-center">
              <span className="flex items-center justify-center">
                <FaSortAmountDown className="text-gray-600 mr-1" /> Filter
              </span>
            </button>
          </div>
        )}

        <div>
          <Categories />
        </div>
      </div>
    </>
  );
}
