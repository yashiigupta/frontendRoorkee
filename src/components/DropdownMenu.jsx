import styles from '../styles/dropdown.module.css';
import React, { useEffect, useState } from 'react';

const states = [ "Jammu and Kashmir", "Maharashtra", "Meghalaya", "Puducherry", "Tamil Nadu"];

const DropdownMenu = React.forwardRef((props, ref) => {
  const [selectedStates, setSelectedStates] = useState([]);
  function handleState(e) {
    const {checked, value} = e.target;
    setSelectedStates(prev => {
      if(checked) return [...prev, value];
      else return prev.filter(item => item !== value);
    })
  }

  useEffect(() => {
    console.log(selectedStates);
   },
  [selectedStates]);
  return (
    <div className={styles.dropDown} ref={ref}>
      <ul className={styles.list}>
        {states.map(item => (
          <li key={item} className={styles.item}>
            <input type="checkbox" value = {item} onChange = {handleState}/>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default DropdownMenu;