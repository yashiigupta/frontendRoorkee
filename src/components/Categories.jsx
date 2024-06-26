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
        <div className = "flex flex-col items-center justify-center gap-[16px] mt-[120px]">
        <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.2075 7.2925L15.2075 0.2925C15.1146 0.199666 15.0042 0.126052 14.8829 0.0758639C14.7615 0.0256758 14.6314 -0.000102986 14.5 3.09198e-07H2.5C1.96957 3.09198e-07 1.46086 0.210714 1.08579 0.585787C0.710714 0.960859 0.5 1.46957 0.5 2V24C0.5 24.5304 0.710714 25.0391 1.08579 25.4142C1.46086 25.7893 1.96957 26 2.5 26H20.5C21.0304 26 21.5391 25.7893 21.9142 25.4142C22.2893 25.0391 22.5 24.5304 22.5 24V8C22.5001 7.86864 22.4743 7.73855 22.4241 7.61715C22.3739 7.49576 22.3003 7.38544 22.2075 7.2925ZM15.5 3.41375L19.0863 7H15.5V3.41375ZM20.5 24H2.5V2H13.5V8C13.5 8.26522 13.6054 8.51957 13.7929 8.70711C13.9804 8.89464 14.2348 9 14.5 9H20.5V24ZM14.8075 17.8937C15.3977 16.956 15.6216 15.8336 15.4366 14.7411C15.2516 13.6486 14.6705 12.6626 13.8044 11.9715C12.9384 11.2803 11.848 10.9325 10.7417 10.9944C9.63543 11.0564 8.59072 11.5237 7.80722 12.3072C7.02372 13.0907 6.55635 14.1354 6.49442 15.2417C6.43248 16.348 6.78032 17.4384 7.47147 18.3044C8.16263 19.1705 9.14864 19.7516 10.2411 19.9366C11.3336 20.1216 12.456 19.8977 13.3937 19.3075L14.7925 20.7075C14.8854 20.8004 14.9957 20.8741 15.1171 20.9244C15.2385 20.9747 15.3686 21.0006 15.5 21.0006C15.6314 21.0006 15.7615 20.9747 15.8829 20.9244C16.0043 20.8741 16.1146 20.8004 16.2075 20.7075C16.3004 20.6146 16.3741 20.5043 16.4244 20.3829C16.4747 20.2615 16.5006 20.1314 16.5006 20C16.5006 19.8686 16.4747 19.7385 16.4244 19.6171C16.3741 19.4957 16.3004 19.3854 16.2075 19.2925L14.8075 17.8937ZM8.5 15.5C8.5 15.0055 8.64662 14.5222 8.92133 14.1111C9.19603 13.7 9.58648 13.3795 10.0433 13.1903C10.5001 13.0011 11.0028 12.9516 11.4877 13.048C11.9727 13.1445 12.4181 13.3826 12.7678 13.7322C13.1174 14.0819 13.3555 14.5273 13.452 15.0123C13.5484 15.4972 13.4989 15.9999 13.3097 16.4567C13.1205 16.9135 12.8 17.304 12.3889 17.5787C11.9778 17.8534 11.4945 18 11 18C10.337 18 9.70107 17.7366 9.23223 17.2678C8.76339 16.7989 8.5 16.163 8.5 15.5Z" fill="#E0E0E0"/>
        </svg>
        <p className = "text-gray-600">No results found</p>
      </div>
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