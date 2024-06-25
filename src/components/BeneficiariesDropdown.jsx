import dummyData from '../dummyData.json';
import React, { useEffect } from 'react';

const categories = dummyData.map(item => item.beneficiary_category);
const uniqueCategories = [...new Set(categories)];

const BeneficiaryDropdownMenu = React.forwardRef(({ selectedBeneficiaries, setSelectedBeneficiaries }, ref) => {
  const beneficiariesTop = document.getElementById('beneficiaryBtn').getBoundingClientRect().top + window.scrollY;
  const beneficiariesLeft = document.getElementById('beneficiaryBtn').getBoundingClientRect().left + window.scrollX;

  const handleOptionChange = (event) => {
    const { checked, value } = event.target;
    setSelectedBeneficiaries(prevOptions => {
      if (checked) {
        return [...prevOptions, value];
      } else {
        return prevOptions.filter(option => option !== value);
      }
    });
  };

  useEffect(() => {
    console.log(selectedBeneficiaries);
  }, [selectedBeneficiaries]);

  return (
    <div  style={{ top: `${beneficiariesTop + 42}px`, left:  `${beneficiariesLeft}px`}} className="absolute bg-[rgb(251,251,251)] rounded-lg w-auto max-w-[600px] flex flex-col whitespace-wrap" ref={ref}>
      <ul className="flex flex-col font-sans list-none p-[0px_23px] text-xs">
        {uniqueCategories.map(item => (
          <li key={item} className="my-[12px] flex items-center">
            <input 
              type="checkbox" 
              value={item} 
              onChange={handleOptionChange}
              checked={selectedBeneficiaries.includes(item)} // Set checked property
              className="relative top-[1.5px] mr-2"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default BeneficiaryDropdownMenu;