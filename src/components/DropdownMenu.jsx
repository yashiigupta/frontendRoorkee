import styles from '../styles/dropdown.module.css';
import React from 'react';

const states = [ "Jammu and Kashmir", "Maharashtra", "Meghalaya", "Puducherry", "Tamil Nadu"];

const DropdownMenu = React.forwardRef((props, ref) => {
  return (
    <div className={styles.dropDown} ref={ref}>
      <ul className={styles.list}>
        {states.map(item => (
          <li key={item} className={styles.item}>
            <input type="checkbox" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default DropdownMenu;