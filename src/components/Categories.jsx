import { useRouter } from "next/router";
import dummyData from "../dummyData.json"; 
import { useEffect, useState } from "react";

export default function Categories(props) {
  const router = useRouter();

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


  const handleClick = (scheme_id) => {
    const scheme = dummyData.find((item) => item.id === scheme_id);
    if (scheme) {
      console.log("Department:", scheme.department);
      console.log("Title:", scheme.scheme_name);
      console.log("Beneficiary Scheme Name:", scheme.scheme_beneficiary);
      console.log("Eligibility Criteria:", scheme.how_to_avail);
      console.log("introduced_date:", scheme.introduced_on);
      console.log("schemeLink:", scheme.scheme_link);

      router.push({
        pathname: "/content",
        query: {
          department: scheme.category,
          title: scheme.scheme_name,
          beneficiary_scheme_name: scheme.beneficiary_category,
          eligibility_criteria: scheme.how_to_avail,
          introduced_date: scheme.introduced_on,
          scheme_link: scheme.scheme_link,
        },
      });
    }
  };

  // Extract unique scheme_ids from data
  const uniqueCategories = [...new Set(dummyData.map((item) => item.scheme_id))];

  return (
    <div>
      {filteredData.length > 0 ? (
        filteredData.map(item => (
          <div className="relative border-[1px] border-blue-100 rounded-lg mb-2 p-3 my-6" key={item}>
          <div className="absolute top-0 right-2 bg-blue-300 text-blue-900 p-2 px-2 py-[2px] rounded">
            <h1>New Update</h1>
          </div>
          <div>
            <div className="-mt-3 p-2">
              <h1
                className="mt-6 text-base cursor-pointer mb-2 font-semi-bold"
                onClick={() => handleClick(item.id)}
                role="button"
                tabIndex="0"
              >
                {item.scheme_name}
              </h1>
            </div>
            {/* <div className="mb-2">
              <span className="text-gray-600 font-semi-bold ">Job Description :</span> 
              <span className="text-gray-500 ">{" "} {item.description}</span>
            </div> */}

            {/* <div className="">
              <span className="text-red-500 ">Introduced On :</span>
              <span className="text-red-500 ">{''} {item.introduced_on}</span>
            </div> */}
          </div>
        </div>
        ))
      ) : (
        <p className = "mt-[30px] text-medium ">No schemes found</p>
      )}
    </div>
  );
}