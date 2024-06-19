import React, { forwardRef, useEffect, useState } from 'react';
import dummyData from '../dummyData.json'; // Importing JSON data

const DepartmentDropdownMenu = forwardRef((props, ref) => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Extracting departments from dummyData
    const uniqueDepartments = [...new Set(dummyData.map(item => item.department))];
    setDepartments(uniqueDepartments);
  }, []); // Empty dependency array ensures this effect runs only once on initial render

  return (
    <div className="absolute ml-[145px] mt-[-30px] bg-[rgb(251,251,251)] rounded-[12px] max-w-[600px] flex flex-col" ref={ref}>
      <div className="max-h-[200px] overflow-y-auto">
        <ul className="flex flex-col font-sans list-none px-[23px] text-[14px]">
          {departments.map((department, index) => (
            <li key={index} className="flex items-center my-[14px]">
              <input type="checkbox" className="relative top-[1.5px] mr-[7px]" />
              <span>{department}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default DepartmentDropdownMenu;
