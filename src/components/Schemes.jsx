import { IoArrowBackOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { TbBuilding } from "react-icons/tb";
import { TfiBag } from "react-icons/tfi";
import { BsGenderFemale } from "react-icons/bs";
import { MdCurrencyRupee } from "react-icons/md";
import styles from '../styles/schemes.module.css';
import Categories from "./Categories";
import DropdownMenu from "./DropdownMenu";
import DepartmentDropdownMenu from "./DepartmentDropDown";
import React, { useState, useRef, useEffect } from "react";

export default function Schemes() {
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
    if (departmentOpen) {
      setDepartmentOpen(false);
    }
    setDropDownOpen(!dropDownOpen);
  };

  const handleDepartmentClick = () => {
    if (dropDownOpen) {
      setDropDownOpen(false);
    }
    setDepartmentOpen(!departmentOpen);
  };

  return (
    <div className={styles.schemesContainer}>
      <button className = {styles.backBtn}><IoArrowBackOutline className = {styles.backArrow}/> Back</button>
      <div className={styles.schemesSection}>
        <h1 className={styles.heading}>Schemes</h1>
        <div>
          <button className={styles.langBtn}>Regional Language</button>
          <button className={styles.engBtn}>English</button>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.checkBtn} onClick={handleDropdownClick}><FiMapPin className={styles.checkIcons}/> State</button>
        <button className={styles.checkBtn} onClick={handleDepartmentClick}><TbBuilding className={styles.checkIcons}/> Department</button>
        <button className={styles.checkBtn}><TfiBag className={styles.checkIcons}/> Occupation</button>
        <button className={styles.checkBtn}><BsGenderFemale className={styles.checkIcons}/> Gender</button>
        <button className={styles.checkBtn}><MdCurrencyRupee className={styles.checkIcons}/> Income</button>
      </div>

      {dropDownOpen && <DropdownMenu ref={dropdownRef} />}
      {departmentOpen && <DepartmentDropdownMenu ref={departmentDropdownRef} selectedDepartments = {selectedDepartments} setSelectedDepartments = {setSelectedDepartments} />}
      <Categories selectedDepartments = {selectedDepartments}/>
    </div>
  );
}


