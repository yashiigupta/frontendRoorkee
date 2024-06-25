import React, { useState, useEffect } from 'react';
import dummyData from '../dummyData.json';

export default function Categories(props) {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let filtered = dummyData;

    if (props.selectedDepartments && props.selectedDepartments.length > 0) {
      filtered = filtered.filter(item => props.selectedDepartments.includes(item.category));
    } 
    if (props.selectedBeneficiaries && props.selectedBeneficiaries.length > 0) {
      filtered = filtered.filter(item => props.selectedBeneficiaries.includes(item.beneficiary_category));
    } 
    if (props.selectedFunders && props.selectedFunders.length > 0) {
      filtered = filtered.filter(item => props.selectedFunders.includes(item.funding_by));
    } 
    if (props.selectedIncomes && props.selectedIncomes.length > 0) {
      filtered = filtered.filter(item => props.selectedIncomes.includes(item.eligibility_criteria.Income));
    } 
    if (props.selectedAges && props.selectedAges.length > 0) {
      filtered = filtered.filter(item => props.selectedAges.includes(item.eligibility_criteria.Age));
    } 

    setFilteredData(filtered);
  }, [props.selectedDepartments, props.selectedBeneficiaries, props.selectedFunders, props.selectedIncomes, props.selectedAges]);

  return (
    <div>
      {filteredData.length > 0 ? (
        filteredData.map(item => (
          <div key={item.scheme_name}>
            <p className="mt-[30px] text-medium mb-[30px]">{item.scheme_name}</p>
            <hr className="h-0.5px bg-custom-gray border-0" />
          </div>
        ))
      ) : (
        <p className = "mt-[30px] text-medium ">No schemes found</p>
      )}
    </div>
  );
}