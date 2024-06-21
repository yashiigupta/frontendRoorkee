import { IoArrowBackOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import styles from '../styles/tabs.module.css';

export default function Tabs(props) {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust breakpoint as needed
    };

    checkScreenSize(); // Check initial screen size

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className={styles.tabsSection}>
      <button className={styles.tabBtn} onClick={() => props.setComponent("Schemes")}>Schemes</button>
      <button className={styles.tabBtn} onClick={() => props.setComponent("Job Openings")}>Job Openings</button>
      <button className={styles.tabBtn} onClick={() => props.setComponent("Scholarships")}>Scholarships</button>
    </div>
  )
}
