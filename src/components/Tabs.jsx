import styles from '../styles/tabs.module.css';
export default function Tabs()
{
  return (
    <div className={styles.tabsSection}>
      <button className={styles.tabBtn}>Schemes</button>
      <button className={styles.tabBtn}>Job Openings</button>
      <button className={styles.tabBtn}>Scholarships</button>
    </div>
  )
}