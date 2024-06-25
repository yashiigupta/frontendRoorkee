import React, { useEffect, useState } from 'react';

const states = ["Jammu and Kashmir", "Maharashtra", "Meghalaya", "Puducherry", "Tamil Nadu"];

const DropdownMenu = React.forwardRef((props, ref) => {
  const [selectedStates, setSelectedStates] = useState([]);
  const stateTop = document.getElementById('stateBtn').getBoundingClientRect().top + window.scrollY;
  const stateLeft = document.getElementById('stateBtn').getBoundingClientRect().left + window.scrollX;
  function handleState(e) {
    const { checked, value } = e.target;
    setSelectedStates(prev => {
      if (checked) return [...prev, value];
      else return prev.filter(item => item !== value);
    });
  }

  useEffect(() => {
    console.log(selectedStates);
  }, [selectedStates]);
  
  return (
    <div style={{ top: `${stateTop + 42}px`, left:  `${stateLeft}px`}} className="absolute bg-[rgb(251,251,251)] rounded-lg w-auto max-w-[600px] flex flex-col whitespace-wrap z-50" ref={ref}>
      <ul className="flex flex-col font-sans list-none p-0 px-[23px] text-xs">
        {states.map(item => (
          <li key={item} className="my-[12px] flex items-center">
            <input type="checkbox" value={item} onChange={handleState} className="relative top-[1.5px] mr-[7px]"/>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default DropdownMenu;