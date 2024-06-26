import React, { useState, useEffect } from 'react';

const states = ["Jammu and Kashmir", "Maharashtra", "Meghalaya", "Puducherry", "Tamil Nadu"];

const DropdownMenu = React.forwardRef((props, ref) => {
  const [selectedStates, setSelectedStates] = useState([]);
  const [dropdownStyle, setDropdownStyle] = useState({});

  useEffect(() => {
    const updatePosition = () => {
      const stateBtn = document.getElementById('stateBtn');
      if (stateBtn) {
        const { top, left } = stateBtn.getBoundingClientRect();
        setDropdownStyle({
          top: `${top + window.scrollY + 35}px`,
          left: `${left + window.scrollX}px`,
        });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  function handleState(e) {
    const { checked, value } = e.target;
    setSelectedStates(prev => checked ? [...prev, value] : prev.filter(item => item !== value));
  }

  const handleClearAll = () => setSelectedStates([]);

  useEffect(() => {
    console.log(selectedStates);
  }, [selectedStates]);

  return (
    <div style={dropdownStyle} className="absolute text-[13px] text-gray-500 bg-[rgb(255,255,255)] rounded-[8px] w-auto max-w-[600px] flex flex-col whitespace-wrap z-50 pl-[12px] pr-[8px] pt-[16px] pb-[8px] border border-solid border-[#E8EAEE] font-semibold min-w-[280px]" ref={ref}>
      <div className='pl-[8px] pr-[8px] pb-[4px]'><p>STATE</p></div>
      <ul className="flex flex-col font-sans list-none p-0 text-xs m-0 gap-0 pb-[8px]">
      {states.map((item, index) => (
        <li key={item + index} className="flex items-center justify-between hover:bg-gray-100 h-9 pl-[8px] pr-[8px] pt-[16px] pb-[16px] rounded-[8px]">
          {item}
          <input type="checkbox" value={item} onChange={handleState} checked={selectedStates.includes(item)} className="ml-10"/>
        </li>
      ))}
      </ul>
      <hr />
      <div className='flex flex-row justify-between items-center rounded-[8px] pl-[8px] pr-[8px] pt-[8px] font-light text-[12px]'>
        <button onClick={handleClearAll} className="text-gray-950 focus:outline-none">
          Clear all
        </button>
        <button className='bg-[#3431BB] pl-[44px] pr-[44px] pt-[10px] pb-[10px] rounded-[8px] text-white text-[12px]'>
          Apply
        </button>
      </div>
    </div>
  );
});

export default DropdownMenu;