import styles from '../styles/schemes.module.css';
import dummyData from '../dummyData.json';

export default function Categories(props) {
  if (props.selectedDepartments.length === 0) {
    return (
      <div className={styles.categoriesContainer}>
        {dummyData.map(item => (
          <div key={item.scheme_name}>
            <p className={styles.item}>{item.scheme_name}</p>
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
            <p className={styles.item}>{item.scheme_name}</p>
            <hr className={styles.horizontalRule} />
          </div>
        ))}
      </div>
    );
  }
}