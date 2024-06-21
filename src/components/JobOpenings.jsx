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

  const handleStateClick = () => {
    setSelectedCategory();
  }

  const handleDepartmentClick = () => {
    setSelectedCategory();
  }

  const handleOccupationClick = () => {
    setSelectedCategory();
  }

  const handleGenderClick = () => {
    setSelectedCategory();
  }

  const handleIncomeClick = () => {
    setSelectedCategory();
  }

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
          <h1 className="mt-0 mb-4 text-[30px] font-semibold">Job Openings</h1>
        </div>
        <div className="max-w-lg w-full flex flex-wrap justify-between mb-14">
          <button className="mb-2 p-2 rounded-[18px] rounded-lg border border-gray-300 bg-white hover:bg-gray-100" onClick={handleStateClick}>
            <span className="flex items-center">
              <FaMapMarkerAlt className="text-gray-600 mr-1" /> State
            </span>
          </button>
          <button className="mb-2 p-2 rounded-[18px] rounded-lg border border-gray-300 bg-white hover:bg-gray-100" onClick={handleDepartmentClick}>
            <span className="flex items-center">
              <FaBuilding className="text-gray-600 mr-1" /> Department
            </span>
          </button>
          <button className="mb-2 p-2 rounded-[18px] rounded-lg border border-gray-300 bg-white hover:bg-gray-100" onClick={handleOccupationClick}>
            <span className="flex items-center">
              <FaUserTie className="text-gray-600 mr-1" /> Occupation
            </span>
          </button>
          <button className="mb-2 p-2 rounded-[18px] mr-[1px] rounded-lg border border-gray-300 bg-white hover:bg-gray-100" onClick={handleGenderClick}>
            <span className="flex items-center">
              <FaVenusMars className="text-gray-600 mr-1" /> Gender
            </span>
          </button>
          <button className="mb-2 p-2 rounded-[18px] border border-gray-300 bg-white hover:bg-gray-100" onClick={handleIncomeClick}>
            <span className="flex items-center">
              <MdCurrencyRupee className="text-gray-600 text-lg mr-1" /> Income
            </span>
          </button>
        </div>
        <Categories />
      </div>
      <Model isVisible={selectedCategory !== null} category={selectedCategory} onClose={handleCloseModal}/>
    </>
  );
}
