import React, { useState, useEffect } from 'react';
import Model from '@/pages/model';
import { FaBuilding, FaMapMarkerAlt, FaUserTie, FaVenusMars, FaSortAmountDown, FaNetworkWired, FaCalendarAlt } from 'react-icons/fa';
import { MdCurrencyRupee } from "react-icons/md";
import Categories from "./Categories";
import DropdownStates from "./DropdownStates";
import DepartmentDropdownMenu from './DepartmentDropDown';
import DropdownOccupation from './OccupationDropDown';
import DropdownBenefecries from './BeneficiriesDropdown';
import DropdownGender from './GenderDropdown';
import DropdownAge from './AgeDropdown';
import DropdownIncome from './IncomeDropdown';
import DropdownSponshership from './SponshershipDropdown';
import DropdownShort from './SortDropdown';
import { Dropdown } from 'primereact/dropdown';

export default function Schemes() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCloseModal = () => {
    setSelectedCategory(null); // Reset selected category when closing modal
  };
  const handleFilterClick = () => {
    setSelectedCategory('filter');
  };



  const [isDesktop, setIsDesktop] = useState(true); // Assume desktop mode by default
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);
  const [showOccupationDropdown, setShowOccupationDropdown] = useState(false);
  const [showBeneficiariesDropdown, setShowBeneficiariesDropdown] = useState(false);
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  const [showAgeDropdown, setShowAgeDropdown] = useState(false);
  const [showIncomeDropdown, setShowIncomeDropdown] = useState(false);
  const [showSponshershipDropdown, setShowSponshershipDropdown] = useState(false);
  const [showDropdownShort, setShowDropdownShort] = useState(false);

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

  const toggleStateDropdown = () => {
    setShowStateDropdown(!showStateDropdown);
    // Close other dropdowns if open
    setShowDepartmentDropdown(false);
    setShowOccupationDropdown(false);
    setShowBeneficiariesDropdown(false);
    setShowGenderDropdown(false);
    setShowAgeDropdown(false);
    setShowIncomeDropdown(false);
    setShowSponshershipDropdown(false);
    setShowDropdownShort(false);
  };

  const toggleDepartmentDropdown = () => {
    setShowDepartmentDropdown(!showDepartmentDropdown);
    // Close other dropdowns if open
    setShowStateDropdown(false);
    setShowOccupationDropdown(false);
    setShowBeneficiariesDropdown(false);
    setShowGenderDropdown(false);
    setShowAgeDropdown(false);
    setShowIncomeDropdown(false);
    setShowSponshershipDropdown(false);
    setShowDropdownShort(false);
  };

  const toggleOccupationDropdown = () => {
    setShowOccupationDropdown(!showOccupationDropdown);
    // Close other dropdowns if open
    setShowStateDropdown(false);
    setShowDepartmentDropdown(false);
    setShowBeneficiariesDropdown(false);
    setShowGenderDropdown(false);
    setShowAgeDropdown(false);
    setShowIncomeDropdown(false);
    setShowSponshershipDropdown(false);
    setShowDropdownShort(false);
  };

  const toggleBeneficiariesDropdown = () => {
    setShowBeneficiariesDropdown(!showBeneficiariesDropdown);
    // Close other dropdowns if open
    setShowStateDropdown(false);
    setShowDepartmentDropdown(false);
    setShowOccupationDropdown(false);
    setShowGenderDropdown(false);
    setShowAgeDropdown(false);
    setShowIncomeDropdown(false);
    setShowSponshershipDropdown(false);
    setShowDropdownShort(false);
  };

  const toggleGenderDropdown = () => {
    setShowGenderDropdown(!showGenderDropdown);
    // Close other dropdowns if open
    setShowStateDropdown(false);
    setShowDepartmentDropdown(false);
    setShowOccupationDropdown(false);
    setShowBeneficiariesDropdown(false);
    setShowAgeDropdown(false);
    setShowIncomeDropdown(false);
    setShowSponshershipDropdown(false);
    setShowDropdownShort(false);
  };

  const toggleAgeDropdown = () => {
    setShowAgeDropdown(!showAgeDropdown);
    // Close other dropdowns if open
    setShowStateDropdown(false);
    setShowDepartmentDropdown(false);
    setShowOccupationDropdown(false);
    setShowBeneficiariesDropdown(false);
    setShowGenderDropdown(false);
    setShowIncomeDropdown(false);
    setShowSponshershipDropdown(false); 
    setShowDropdownShort(false);
  };

  const toggleIncomeDropdown = () => {
    setShowIncomeDropdown(!showIncomeDropdown);
    // Close other dropdowns if open
    setShowStateDropdown(false);
    setShowDepartmentDropdown(false);
    setShowOccupationDropdown(false);
    setShowBeneficiariesDropdown(false);
    setShowGenderDropdown(false);
    setShowAgeDropdown(false);
    setShowSponshershipDropdown(false);
    setShowDropdownShort(false);
  };

  const toggleSponshershipDropdown = () => {
    setShowSponshershipDropdown(!showSponshershipDropdown);
    // Close other dropdowns if open
    setShowStateDropdown(false);
    setShowDepartmentDropdown(false);
    setShowOccupationDropdown(false);
    setShowBeneficiariesDropdown(false);
    setShowGenderDropdown(false);
    setShowAgeDropdown(false);
    setShowIncomeDropdown(false);
    setShowDropdownShort(false);
  };

  const toggleSortingDropdown = () => {
  setShowDropdownShort(!showDropdownShort); 
  setShowStateDropdown(false);
  setShowDepartmentDropdown(false);
  setShowOccupationDropdown(false);
  setShowBeneficiariesDropdown(false);
  setShowGenderDropdown(false);
  setShowAgeDropdown(false);
  setShowIncomeDropdown(false);
  setShowSponshershipDropdown(false);
};

  return (
    <>
      <div className="bg-white font-sans">
        <div className="mb-4">
          <h1 className="mt-0 mb-4 text-[30px] font-semibold">Schemes</h1>
        </div>

        {isDesktop ? (
          // Desktop Buttons
          <div className="flex flex-wrap justify-start mb-8">
            <button onClick={toggleSortingDropdown} className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center justify-center">
                <FaSortAmountDown className="text-gray-600 mr-1" /> Sort
              </span>
            </button>

            <button onClick={toggleStateDropdown} className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <FaMapMarkerAlt className="text-gray-600 mr-1" /> State
              </span>
            </button>

            <button onClick={toggleDepartmentDropdown} className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <FaBuilding className="text-gray-600 mr-1" /> Department
              </span>
            </button>

            <button onClick={toggleOccupationDropdown} className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <FaUserTie className="text-gray-600 mr-1" /> Occupation
              </span>
            </button>

            <button onClick={toggleBeneficiariesDropdown} className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <FaNetworkWired className="text-gray-600 mr-1" /> Beneficiaries
              </span>
            </button>

            <button onClick={toggleGenderDropdown} className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <FaVenusMars className="text-gray-600 mr-1" /> Gender
              </span>
            </button>

            <button onClick={toggleAgeDropdown} className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <FaCalendarAlt className="text-gray-600 mr-1" /> Age
              </span>
            </button>

            <button onClick={toggleIncomeDropdown} className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <MdCurrencyRupee className="text-gray-600 text-lg mr-1" /> Income
              </span>
            </button>

            <button onClick={toggleSponshershipDropdown} className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <MdCurrencyRupee className="text-gray-600 text-lg mr-1" /> Sponshership
              </span>
            </button>

          </div>
        ) : (
          // Mobile Buttons
          <div className="mb-4 flex justify-around">
            <button onClick={toggleSortingDropdown} className="w-[48%] h-[50px] p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100 text-center">
              <span className="flex items-center justify-center">
                <FaSortAmountDown className="text-gray-600 mr-1" /> Sort
              </span>
            </button>

            <button onClick={handleFilterClick} className="w-[48%] h-[50px] p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100 text-center">
              <span className="flex items-center justify-center">
                <FaSortAmountDown className="text-gray-600 mr-1" /> Filter
              </span>
            </button>
          </div>
        )}

        {/* Render dropdowns based on state */}
        {showStateDropdown && <DropdownStates />}
        {showDepartmentDropdown && <DepartmentDropdownMenu />}
        {showOccupationDropdown && <DropdownOccupation />}
        {showBeneficiariesDropdown && <DropdownBenefecries />}
        {showGenderDropdown && <DropdownGender />}
        {showAgeDropdown && <DropdownAge />}
        {showIncomeDropdown && <DropdownIncome />}
        {showSponshershipDropdown && <DropdownSponshership />}
        {showDropdownShort && <DropdownShort />}

        <div>
          <Categories />
        </div>
      </div>
      <Model isVisible={selectedCategory !== null} category={selectedCategory} onClose={handleCloseModal}/>

    </>
  );
}
