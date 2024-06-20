import { useRouter } from 'next/router';
import dummyData from '../dummyData.json';

const scheme_names = dummyData.map(item => item);
const uniqueSchemeNames = [...new Set(scheme_names)];
export default function Categories()
{
  return (
    <div className={styles.categoriesContainer}>
      {scheme_names.map(item => {
        return (
            <div>
              <p className={styles.item}>{item.scheme_name}</p>
              <hr className={styles.horizontalRule}></hr>
            </div>
          );
      })}
    </div>
  );
}