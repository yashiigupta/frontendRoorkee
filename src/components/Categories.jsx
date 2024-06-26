import { useRouter } from "next/router";
import dummyData from "../dummyData.json";
import { useEffect, useState } from "react";
import ApplyModal from "../pages/content";

export default function Categories(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedScheme, setSelectedScheme] = useState(null); // State to hold the selected scheme
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

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
      setSelectedScheme(scheme); // Set the selected scheme
      setIsModalOpen(true); // Open the modal
    }
  };

  return (
    <div>
      {filteredData.length > 0 ? (
        filteredData.map(item => (
          <div className="relative border-[1px] border-blue-100 rounded-lg mb-2 p-3 my-6" key={item.id}>
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
            </div>
          </div>
        ))
      ) : (
        <p className="mt-[30px] text-medium">No schemes found</p>
      )}
      {isModalOpen && selectedScheme && (
        <ApplyModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          scheme={selectedScheme}
        />
      )}
    </div>
  );
}