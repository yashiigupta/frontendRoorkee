import styles from '../styles/schemes.module.css';
import dummyData from '../dummyData.json';

const categories = dummyData.map(item => item.category);
const uniqueCategories = [...new Set(categories)];

export default function Categories()
{
  return (
    <div>
      {uniqueCategories.map(item => {
        return (
          <div> 
            <p className={styles.item}>{item}</p>
            <hr className={styles.horizontalRule}></hr>
          </div>
        );
      })}
    </div>
  )
}
