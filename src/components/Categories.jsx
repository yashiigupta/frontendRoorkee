import { useRouter } from "next/router";
import data from "../dummyData.json"; // Assuming your data is in a file named yourData.json

export default function Categories() {
  const router = useRouter();

  const handleClick = (scheme_id) => {
    const scheme = data.find((item) => item.scheme_id === scheme_id);
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
          department: scheme.department,
          title: scheme.scheme_name,
          beneficiary_scheme_name: scheme.scheme_beneficiary,
          eligibility_criteria: scheme.how_to_avail,
          introduced_date: scheme.introduced_on,
          scheme_link: scheme.scheme_link,
        },
      });
    }
  };

  // Extract unique scheme_ids from data
  const uniqueCategories = [...new Set(data.map((item) => item.scheme_id))];

  return (
    <div>
      {uniqueCategories.map((item) => {
        const scheme = data.find((dataItem) => dataItem.scheme_id === item);
        return (
          <div className="relative border-[1px] border-blue-100 rounded-lg mb-2 p-3" key={item}>
            <div className="absolute top-0 right-2 bg-blue-300 text-blue-900 p-2 px-2 py-[2px] rounded">
              <h1>New Update</h1>
            </div>
            <div>
              <div className="-mt-3">
                <h1
                  className="mt-5 text-base cursor-pointer mb-2 font-semi-bold"
                  onClick={() => handleClick(item)}
                  role="button"
                  tabIndex="0"
                >
                  {scheme.scheme_name}
                </h1>
              </div>
              <div className="mb-2">
                <span className="text-gray-600 font-semi-bold ">Job Description :</span> 
                <span className="text-gray-500 ">{" "} {scheme.description}</span>
              </div>

              <div className="">
                <span className="text-red-500 ">Introduced On :</span>
                <span className="text-red-500 ">{''} {scheme.introduced_on}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}