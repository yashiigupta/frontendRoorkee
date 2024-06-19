import dummyData from '../dummyData.json';
import styles from '../styles/dropdown.module.css';
import React, {useState} from 'react';

const categories = dummyData.map(item => item.category);
const uniqueCategories = [...new Set(categories)];

const DepartmentDropdownMenu = React.forwardRef((props, ref) => {
  return (
    <div className={styles.dropDown} ref={ref}>
      <ul className={styles.list}>
        {uniqueCategories.map(item => (
          <li key={item} className={styles.item}>
            <input type="checkbox"/>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default DepartmentDropdownMenu;