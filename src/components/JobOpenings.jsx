import { GoSortDesc } from "react-icons/go";
import { FiMapPin } from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";
import { LiaBriefcaseSolid } from "react-icons/lia";
import { PiGraduationCap } from "react-icons/pi";
import { PiBriefcaseLight } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import React, { useState, useRef, useEffect } from "react";
import Categories from "./Categories";
import DropdownMenu from "./DropdownMenu";
import DepartmentDropdownMenu from "./DepartmentDropDown";

export default function JobOpenings() {
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [departmentOpen, setDepartmentOpen] = useState(false);

  const dropdownRef = useRef();
  const departmentDropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDownOpen(false);
      }
      if (departmentDropdownRef.current && !departmentDropdownRef.current.contains(event.target)) {
        setDepartmentOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownClick = () => {
    setDepartmentOpen(false);
    setDropDownOpen(!dropDownOpen);
  };

  const handleDepartmentClick = () => {
    setDropDownOpen(false);
    setDepartmentOpen(!departmentOpen);
  };
  return (
    <div className="bg-white font-sans mt-9">
      <h1 className="mt-0 mb-6 font-semibold text-3xl">Job Openings</h1>
      <div className="mt-0 w-full flex flex-wrap gap-3 mb-15 font-sans">
        <button className="flex font-light text-sm py-2.5 px-3.5 rounded-lg border border-gray-300 bg-white cursor-pointer hover:bg-gray-200" onClick={handleDropdownClick}><GoSortDesc className="text-gray-400 text-lg mr-1.5"/> Sort</button>
        <button className="flex font-light text-sm py-2.5 px-3.5 rounded-lg border border-gray-300 bg-white cursor-pointer hover:bg-gray-200" onClick={handleDropdownClick}><FiMapPin className="text-gray-400 text-lg mr-1.5"/> State</button>
        <button className="flex font-light text-sm py-2.5 px-3.5 rounded-lg border border-gray-300 bg-white cursor-pointer hover:bg-gray-200" onClick={handleDepartmentClick}><BsBuilding className="text-gray-400 text-lg mr-1.5"/> Department</button>
        <button className="flex font-light text-sm py-2.5 px-3.5 rounded-lg border border-gray-300 bg-white cursor-pointer hover:bg-gray-200"><LiaBriefcaseSolid className="text-gray-400 text-xl mr-1.5"/> Job type</button>
        <button className="flex font-light text-sm py-2.5 px-3.5 rounded-lg border border-gray-300 bg-white cursor-pointer hover:bg-gray-200"><PiGraduationCap className="text-gray-400 text-xl mr-1.5"/> Education level</button>
        <button className="flex font-light text-sm py-2.5 px-3.5 rounded-lg border border-gray-300 bg-white cursor-pointer hover:bg-gray-200"><PiBriefcaseLight className="text-gray-400 text-xl mr-1.5"/>Experience</button>
        <button className="flex font-light text-sm py-2.5 px-3.5 rounded-lg border border-gray-300 bg-white cursor-pointer hover:bg-gray-200"><BsPeople className="text-gray-400 text-lg mr-1.5"/>Age</button>
        <button className="flex font-light text-sm py-2.5 px-3.5 rounded-lg border border-gray-300 bg-white cursor-pointer hover:bg-gray-200"><IoNewspaperOutline className="text-gray-400 text-lg mr-1.5"/>Application deadline</button>
      </div>

      {dropDownOpen && <DropdownMenu ref={dropdownRef} />}
      {departmentOpen && <DepartmentDropdownMenu ref={departmentDropdownRef} selectedDepartments={selectedDepartments} setSelectedDepartments={setSelectedDepartments} />}
      <Categories selectedDepartments={selectedDepartments}/>
    </div>
  );
}