import { IoArrowBackOutline } from "react-icons/io5";
import { GoSortDesc } from "react-icons/go";
import { FiMapPin } from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
// import { LiaBriefcaseSolid } from "react-icons/lia";
import { PiGraduationCap } from "react-icons/pi";
import { MdCurrencyRupee } from "react-icons/md";
// import { PiBriefcaseLight } from "react-icons/pi";
import { CiBank } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import React, { useState, useRef, useEffect } from "react";
import Categories from "./Categories";
import DropdownMenu from "./DropdownMenu";
import DepartmentDropdownMenu from "./DepartmentDropDown";
import BeneficiaryDropdownMenu from "./BeneficiariesDropdown";
import AgeDropdownMenu from "./AgeDropdown";
import IncomeDropdownMenu from "./IncomeDropdown";
import FundingByDropdownMenu from "./FundingBy";

export default function Schemes() {
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedBeneficiaries, setSelectedBeneficiaries] = useState([]);
  const [selectedAges, setSelectedAges] = useState([]);
  const [selectedIncomes, setSelectedIncomes] = useState([]);
  const [selectedFunders, setSelectedFunders] = useState([]);

  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [beneficiaryOpen, setBeneficiaryOpen] = useState(false);
  const [ageOpen, setAgeOpen] = useState(false);
  const [incomeOpen, setIncomeOpen] = useState(false);
  const [fundersOpen, setFundersOpen] = useState(false);

  const dropdownRef = useRef();
  const departmentDropdownRef = useRef();
  const beneficiaryDropdownRef = useRef();
  const ageDropdownRef = useRef();
  const incomeDropdownRef = useRef();
  const funderDropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDownOpen(false);
      }
      if (departmentDropdownRef.current && !departmentDropdownRef.current.contains(event.target)) {
        setDepartmentOpen(false);
      }
      if (beneficiaryDropdownRef.current && !beneficiaryDropdownRef.current.contains(event.target)) {
        setBeneficiaryOpen(false);
      }
      if (ageDropdownRef.current && !ageDropdownRef.current.contains(event.target)) {
        setAgeOpen(false);
      }
      if (incomeDropdownRef.current && !incomeDropdownRef.current.contains(event.target)) {
        setIncomeOpen(false);
      }
      if (funderDropdownRef.current && !funderDropdownRef.current.contains(event.target)) {
        setFundersOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownClick = () => {
    setDropDownOpen(!dropDownOpen);
  };

  const handleDepartmentClick = () => {
    setDepartmentOpen(!departmentOpen);
  };

  const handleBeneficiariesClick = () => {
    setBeneficiaryOpen(!beneficiaryOpen);
  }

  const handleAgeClick = () => {
    setAgeOpen(!ageOpen);
  }

  const handleIncomeClick = () => {
    setIncomeOpen(!incomeOpen);
  }

  const handleFundersClick = () => {
    setFundersOpen(!fundersOpen);
  }

  return (
    <div className="bg-white font-sans mt-9">
      <h1 className="mt-0 mb-6 font-semibold text-3xl">Schemes</h1>
      <div className="mt-0 w-full flex flex-wrap gap-3 mb-15 font-sans">
        <button className="flex font-light text-sm py-2.5 px-3.5 rounded-lg border border-gray-300 bg-white cursor-pointer hover:bg-gray-200"><GoSortDesc className="text-gray-400 text-lg mr-1.5"/> Sort</button>
        <button className="flex font-light text-sm py-2.5 px-3.5 rounded-lg border border-gray-300 bg-white cursor-pointer hover:bg-gray-200" onClick={handleDropdownClick} id = "stateBtn"><FiMapPin className="text-gray-400 text-lg mr-1.5"/> State</button>
        <button className="flex font-light text-sm py-2.5 px-3.5 rounded-lg border border-gray-300 bg-white cursor-pointer hover:bg-gray-200" onClick={handleDepartmentClick} id = "departmentBtn"><BsBuilding className="text-gray-400 text-lg mr-1.5"/> Department</button>
        <button className="flex font-light text-sm py-2.5 px-3.5 rounded-lg border border-gray-300 bg-white cursor-pointer hover:bg-gray-200" onClick = {handleBeneficiariesClick} id = "beneficiaryBtn"><IoIosPeople className="text-gray-400 text-xl mr-1.5"/> Beneficiaries</button>
        <button className="flex font-light text-sm py-2.5 px-3.5 rounded-lg border border-gray-300 bg-white cursor-pointer hover:bg-gray-200" onClick = {handleFundersClick} id = "fundingbyBtn"><CiBank className="text-gray-400 text-xl mr-1.5"/>Funding by</button>
        <button className="flex font-light text-sm py-2.5 px-3.5 rounded-lg border border-gray-300 bg-white cursor-pointer hover:bg-gray-200" onClick = {handleIncomeClick} id = "incomeBtn"><MdCurrencyRupee className="text-gray-400 text-xl mr-1.5"/>Income</button>
        <button className="flex font-light text-sm py-2.5 px-3.5 rounded-lg border border-gray-300 bg-white cursor-pointer hover:bg-gray-200" onClick = {handleAgeClick} id = "ageBtn"><BsPeople className="text-gray-400 text-lg mr-1.5"/>Age</button>
        <button className="flex font-light text-sm py-2.5 px-3.5 rounded-lg border border-gray-300 bg-white cursor-pointer hover:bg-gray-200"><IoNewspaperOutline className="text-gray-400 text-lg mr-1.5"/>Application deadline</button>
      </div>

      {dropDownOpen && <DropdownMenu ref={dropdownRef} />}
      {departmentOpen && <DepartmentDropdownMenu ref={departmentDropdownRef} selectedDepartments={selectedDepartments} setSelectedDepartments={setSelectedDepartments} />}
      {beneficiaryOpen && <BeneficiaryDropdownMenu ref = {beneficiaryDropdownRef} selectedBeneficiaries = {selectedBeneficiaries} setSelectedBeneficiaries = {setSelectedBeneficiaries} />}
      {ageOpen && <AgeDropdownMenu ref = {ageDropdownRef} selectedAges = {selectedAges} setSelectedAges = {setSelectedAges} />}
      {incomeOpen && <IncomeDropdownMenu ref = {incomeDropdownRef} selectedIncomes = {selectedIncomes} setSelectedIncomes = {setSelectedIncomes} />}
      {fundersOpen && <FundingByDropdownMenu ref = {funderDropdownRef} selectedFunders = {selectedFunders} setSelectedFunders = {setSelectedFunders} />}
      <Categories selectedDepartments={selectedDepartments} selectedBeneficiaries = {selectedBeneficiaries} selectedAges = {selectedAges} selectedFunders = {selectedFunders} selectedIncomes = {selectedIncomes}/>
    </div>
  );
}