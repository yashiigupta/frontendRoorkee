import React, { forwardRef } from 'react';

const incomeRanges = [
  "Below ₹10,000",
  "₹10,000 - ₹20,000",
  "₹20,000 - ₹30,000",
  "₹30,000 - ₹40,000",
  "Above ₹40,000"
];

const DropdownIncome = forwardRef((props, ref) => {
  return (
    <div className="absolute ml-[680px] mt-[-30px] bg-[rgb(251,251,251)] rounded-[12px] max-w-[600px] flex flex-col" ref={ref}>
        {/* <p>Per month</p> */}
      <ul className="flex flex-col font-sans list-none px-[23px] text-[14px]">
        {incomeRanges.map(item => (
          <li key={item} className="flex items-center my-[14px]">
            <input type="checkbox" className="relative top-[1.5px] mr-[7px]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default DropdownIncome;
