import React, { forwardRef } from 'react';

// Example age ranges (lower and upper ages)
const ageRanges = [
  { lower: 0, upper: 18 },
  { lower: 19, upper: 30 },
  { lower: 31, upper: 45 },
  { lower: 46, upper: 60 },
  { lower: 61, upper: "above" }, // Example for 61 and above
];

const DropdownAge = forwardRef((props, ref) => {
  return (
    <div className="absolute ml-[610px] mt-[-30px] bg-[rgb(251,251,251)] rounded-[12px] max-w-[600px] flex flex-col" ref={ref}>
      <ul className="flex flex-col font-sans list-none px-[23px] text-[14px]">
        {ageRanges.map((range, index) => (
          <li key={index} className="flex items-center my-[14px]">
            <input type="checkbox" className="relative top-[1.5px] mr-[7px]" />
            {`${range.lower}-${range.upper}`}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default DropdownAge;
