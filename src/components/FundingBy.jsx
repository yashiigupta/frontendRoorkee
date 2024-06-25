import React, { useEffect } from 'react';
import dummyData from '../dummyData.json';
const categories = dummyData.map(item => item.funding_by);
const uniqueCategories = [...new Set(categories)];

const FundingByDropdownMenu = React.forwardRef(({ selectedFunders, setSelectedFunders }, ref) => {
  const fundingByTop = document.getElementById('fundingbyBtn').getBoundingClientRect().top + window.scrollY;
  const fundingByLeft = document.getElementById('fundingbyBtn').getBoundingClientRect().left + window.scrollX;

  const handleOptionChange = (e) => {
    const { checked, value } = e.target;
    setSelectedFunders(prevOptions => {
      if (checked) return [...prevOptions, value];
      else return prevOptions.filter(option => option !== value);
    });
  };

  useEffect(() => {
    console.log(selectedFunders);
  }, [selectedFunders]);

  return (
    <div style={{ top: `${fundingByTop + 42}px`, left:  `${fundingByLeft}px`}} className="absolute bg-[rgb(251,251,251)] rounded-lg w-auto max-w-[600px] flex flex-col whitespace-wrap" ref={ref}>
      <ul className="flex flex-col font-sans list-none p-[0px_23px] text-xs">
        {uniqueCategories.map(item => (
          <li key={item} className="my-[12px] flex items-center">
            <input 
              type="checkbox" 
              value={item} 
              onChange={handleOptionChange}
              checked={selectedFunders.includes(item)} // Set checked property
              className="relative top-[1.5px] mr-2"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default FundingByDropdownMenu;