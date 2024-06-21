import React, { forwardRef, useEffect, useState } from 'react';
import dummyData from '../dummyData.json'; // Importing JSON data

const DropdownBeneficiaries = forwardRef((props, ref) => {
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    // Extracting schemes with beneficiaries from dummyData
    const schemesWithBeneficiaries = dummyData.filter(item => item.scheme_beneficiary);
    // Extracting unique beneficiaries from schemes
    const uniqueBeneficiaries = [...new Set(schemesWithBeneficiaries.map(item => item.scheme_beneficiary))];
    setBeneficiaries(uniqueBeneficiaries);
  }, []); // Empty dependency array ensures this effect runs only once on initial render

  return (
    <div className="absolute ml-[390px] mt-[-30px] bg-[rgb(251,251,251)] rounded-[12px] max-w-[600px] flex flex-col" ref={ref}>
      <div className="overflow-y-auto max-h-60"> {/* max-h-60 sets maximum height with scrolling */}
        <ul className="flex flex-col font-sans list-none px-[23px] text-[14px]">
          {beneficiaries.map((beneficiary, index) => (
            <li key={index} className="flex items-center my-[14px]">
              <input type="checkbox" className="relative top-[1.5px] mr-[7px]" />
              <span>{beneficiary}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default DropdownBeneficiaries;
