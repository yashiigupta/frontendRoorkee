import dummyData from '../dummyData.json';
import styles from '../styles/dropdown.module.css';
import React, { useState, useEffect } from 'react';

const categories = dummyData.map(item => item.category);
const uniqueCategories = [...new Set(categories)];

const DepartmentDropdownMenu = React.forwardRef(({ selectedDepartments, setSelectedDepartments }, ref) => {

  const handleOptionChange = (event) => {
    const { checked, value } = event.target;
    setSelectedDepartments(prevOptions => {
      if (checked) {
        return [...prevOptions, value];
      } else {
        return prevOptions.filter(option => option !== value);
      }
    });
  };

  useEffect(() => {
    console.log(selectedDepartments);
  }, [selectedDepartments]);

  return (
    <div className={styles.dropDown} ref={ref}>
      <ul className={styles.list}>
        {uniqueCategories.map(item => (
          <li key={item} className={styles.item}>
            <input 
              type="checkbox" 
              value={item} 
              onChange={handleOptionChange}
              checked={selectedDepartments.includes(item)} // Set checked property
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default DepartmentDropdownMenu;