import styles from '../styles/schemes.module.css';
import dummyData from '../dummyData.json';
import { useRouter } from 'next/router';

export default function Categories(props) {
  const router = useRouter();

  const handleNavigate = (item) => {
    const data = item;
    console.log(item);
    const stringifiedData = encodeURIComponent(JSON.stringify(data));
    router.push({
      pathname: '/about',
      query: { data: stringifiedData },
    });
  };
  if (props.selectedDepartments.length === 0) {
    return (
      <div className={styles.categoriesContainer}>
        {dummyData.map(item => (
          <div key={item.scheme_name}>
            <p className={styles.item} onClick = {() => handleNavigate(item)}>{item.scheme_name}</p>
            <hr className={styles.horizontalRule} />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className={styles.categoriesContainer}>
        {dummyData.filter(item => props.selectedDepartments.includes(item.category)).map(item => (
          <div key={item.scheme_name}>
            <p className={styles.item} onClick = {() => handleNavigate(item)}>{item.scheme_name}</p>
            <hr className={styles.horizontalRule} />
          </div>
        ))}
      </div>
    );
  }
}