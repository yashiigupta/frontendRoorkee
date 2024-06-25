import dummyData from '../dummyData.json';
import React, { useEffect } from 'react';

const categories = dummyData.map(item => item.eligibility_criteria.Age);
const uniqueCategories = [...new Set(categories)];

const AgeDropdownMenu = React.forwardRef(({ selectedAges, setSelectedAges }, ref) => {
  const beneficiariesTop = document.getElementById('ageBtn').getBoundingClientRect().top + window.scrollY;
  const beneficiariesLeft = document.getElementById('ageBtn').getBoundingClientRect().left + window.scrollX;

  const handleOptionChange = (event) => {
    const { checked, value } = event.target;
    setSelectedAges(prevOptions => {
      if (checked) {
        return [...prevOptions, value];
      } else {
        return prevOptions.filter(option => option !== value);
      }
    });
  };

  useEffect(() => {
    console.log(selectedAges);
  }, [selectedAges]);

  return (
    <div  style={{ top: `${beneficiariesTop + 42}px`, left:  `${beneficiariesLeft}px`}} className="absolute bg-[rgb(251,251,251)] rounded-lg w-auto max-w-[600px] flex flex-col whitespace-wrap z-50" ref={ref}>
      <ul className="flex flex-col font-sans list-none p-[0px_23px] text-xs">
        {uniqueCategories.map(item => (
          <li key={item} className="my-[12px] flex items-center">
            <input 
              type="checkbox" 
              value={item} 
              onChange={handleOptionChange}
              checked={selectedAges.includes(item)} // Set checked property
              className="relative top-[1.5px] mr-2"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default AgeDropdownMenu;