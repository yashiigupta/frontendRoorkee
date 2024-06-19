import React, { useState, useEffect, useRef } from 'react';
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
import useOutsideClick from './OutsideClick';

export default function Schemes() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCloseModal = () => {
    setSelectedCategory(null); // Reset selected category when closing modal
  };

  const handleFilterClick = () => {
    setSelectedCategory('filter');
  };

  const [isDesktop, setIsDesktop] = useState(true); // Assume desktop mode by default

  // Refs for each dropdown
  const stateDropdownRef = useRef(null);
  const departmentDropdownRef = useRef(null);
  const occupationDropdownRef = useRef(null);
  const beneficiariesDropdownRef = useRef(null);
  const genderDropdownRef = useRef(null);
  const ageDropdownRef = useRef(null);
  const incomeDropdownRef = useRef(null);
  const sponshershipDropdownRef = useRef(null);
  const sortingDropdownRef = useRef(null);

  // State variables to control dropdown visibility
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

  // Hook for handling outside clicks to close dropdowns
  useOutsideClick(stateDropdownRef, () => setShowStateDropdown(false));
  useOutsideClick(departmentDropdownRef, () => setShowDepartmentDropdown(false));
  useOutsideClick(occupationDropdownRef, () => setShowOccupationDropdown(false));
  useOutsideClick(beneficiariesDropdownRef, () => setShowBeneficiariesDropdown(false));
  useOutsideClick(genderDropdownRef, () => setShowGenderDropdown(false));
  useOutsideClick(ageDropdownRef, () => setShowAgeDropdown(false));
  useOutsideClick(incomeDropdownRef, () => setShowIncomeDropdown(false));
  useOutsideClick(sponshershipDropdownRef, () => setShowSponshershipDropdown(false));
  useOutsideClick(sortingDropdownRef, () => setShowDropdownShort(false));

  // Toggle functions for each dropdown
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
    // Close other dropdowns if open
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
            <button ref={sortingDropdownRef} onClick={toggleSortingDropdown} className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center justify-center">
                <FaSortAmountDown className="text-gray-600 mr-1" /> Sort
              </span>
            </button>

            <button ref={stateDropdownRef} onClick={toggleStateDropdown} className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <FaMapMarkerAlt className="text-gray-600 mr-1" /> State
              </span>
            </button>

            <button ref={departmentDropdownRef} onClick={toggleDepartmentDropdown} className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <FaBuilding className="text-gray-600 mr-1" /> Department
              </span>
            </button>

            <button ref={occupationDropdownRef} onClick={toggleOccupationDropdown} className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <FaUserTie className="text-gray-600 mr-1" /> Occupation
              </span>
            </button>

            <button ref={beneficiariesDropdownRef} onClick={toggleBeneficiariesDropdown} className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <FaNetworkWired className="text-gray-600 mr-1" /> Beneficiaries
              </span>
            </button>

            <button ref={genderDropdownRef} onClick={toggleGenderDropdown} className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <FaVenusMars className="text-gray-600 mr-1" /> Gender
              </span>
            </button>

            <button ref={ageDropdownRef} onClick={toggleAgeDropdown} className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <FaCalendarAlt className="text-gray-600 mr-1" /> Age
              </span>
            </button>

            <button ref={incomeDropdownRef} onClick={toggleIncomeDropdown} className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
              <span className="flex items-center">
                <MdCurrencyRupee className="text-gray-600 text-lg mr-1" /> Income
              </span>
            </button>

            <button ref={sponshershipDropdownRef} onClick={toggleSponshershipDropdown} className="mb-2 mr-2 p-1 rounded-[13px] border border-gray-300 bg-white hover:bg-gray-100">
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
        {showStateDropdown && <DropdownStates ref={stateDropdownRef} />}
        {showDepartmentDropdown && <DepartmentDropdownMenu ref={departmentDropdownRef} />}
        {showOccupationDropdown && <DropdownOccupation ref={occupationDropdownRef} />}
        {showBeneficiariesDropdown && <DropdownBenefecries ref={beneficiariesDropdownRef} />}
        {showGenderDropdown && <DropdownGender ref={genderDropdownRef} />}
        {showAgeDropdown && <DropdownAge ref={ageDropdownRef} />}
        {showIncomeDropdown && <DropdownIncome ref={incomeDropdownRef} />}
        {showSponshershipDropdown && <DropdownSponshership ref={sponshershipDropdownRef} />}
        {showDropdownShort && <DropdownShort ref={sortingDropdownRef} />}

        <div>
          <Categories />
        </div>
      </div>
      <Model isVisible={selectedCategory !== null} category={selectedCategory} onClose={handleCloseModal}/>
    </>
  );
}
