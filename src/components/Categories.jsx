import { useRouter } from 'next/router';
import data from '../dummyData.json'; // Assuming your data is in a file named yourData.json
// import dummyData from '../dummyData.json';

export default function Categories () {
  const router = useRouter();

  const handleClick = (scheme_id) => {
    const scheme = data.find(item => item.scheme_id === scheme_id);
    if (scheme) {
      console.log('Department:', scheme.department);
      console.log('Title:', scheme.scheme_name);
      console.log('Beneficiary Scheme Name:', scheme.scheme_beneficiary);
      console.log('Eligibility Criteria:', scheme.how_to_avail);
      console.log('introduced_date:', scheme.introduced_on);
      console.log('schemeLink:', scheme.scheme_link);

      router.push({
        pathname: '/content',
        query: {
          department: scheme.department,
          title: scheme.scheme_name,
          beneficiary_scheme_name: scheme.scheme_beneficiary,
          eligibility_criteria: scheme.how_to_avail,
          introduced_date: scheme.introduced_on,
          scheme_link: scheme.scheme_link
          
        },
      });
    }
  };

  // Extract unique scheme_ids from data
  const uniqueCategories = [...new Set(data.map(item => item.scheme_id))];

  return (
    <div>
      {uniqueCategories.map(item => {
        const scheme = data.find(dataItem => dataItem.scheme_id === item);
        return (
          <div key={item}>
            <p
              className="mt-5 mb-5 text-base cursor-pointer"
              onClick={() => handleClick(item)}
              role="button"
              tabIndex="0"
            >
              {scheme.scheme_name}
            </p>
            <hr className="h-px bg-gray-300 mb-5" />
          </div>
        );
      })}
    </div>
  );
}
