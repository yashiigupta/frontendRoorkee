import { IoArrowBackOutline } from "react-icons/io5";
import { GoShareAndroid } from "react-icons/go";
import styles from '../styles/details.module.css';
import { useRouter } from "next/router";

export default function ShowDetails()
{
  const router = useRouter();
  const { data } = router.query;
  let parsedData;

  if (data) {
    parsedData = JSON.parse(decodeURIComponent(data));
  }
  const handleBack = () => {
    router.push('/');
  }
  return (
    <div className={styles.container}>
      <div className={styles.schemesContainer}>
        <button className = {styles.backBtn} onClick = {handleBack}><IoArrowBackOutline className = {styles.backArrow}/> Back</button>
        <div className={styles.schemesSection}>
          <p className={styles.heading}>{parsedData ? parsedData.scheme_name : 'Loading...'}</p>
          <div>
            <button className={styles.engBtn}><GoShareAndroid className = {styles.shareBtn} />Share scheme</button>
          </div>
          </div>
          <hr className={styles.horizontalRule} />
          <div className={styles.detailShow}>
            {parsedData && (<div>
              <div className={styles.details}>
                <p className = {styles.itemCategory}>Department</p>
                <p className={styles.item}>{parsedData ? parsedData.category : 'Loading...'}</p>
              </div>
              <hr className={styles.horizontalRule} />
              <div className={styles.details}>
                <p className = {styles.itemCategory}>Beneficiaries</p>
                <p className={styles.item}>{parsedData ? parsedData.beneficiary_category : 'Loading...'}</p>
              </div>
              <hr className={styles.horizontalRule} />
              <div className={styles.details}>
                <p className = {styles.itemCategory}>Description</p>
                <p className={styles.item}>{parsedData ? parsedData.scheme_objective : 'Loading...'}</p>
              </div>
              <hr className={styles.horizontalRule} />
              <div className={styles.details}>
                <p className = {styles.itemCategory}>Eligiblity Criteria</p>
                <ul className={styles.eligiblityList}>
                  <li className={styles.eligiblityItems}>Income: {parsedData ? parsedData.eligibility_criteria.Income : 'Loading...'}</li>
                  <li className={styles.eligiblityItems}>Age: {parsedData ? parsedData.eligibility_criteria.Age : 'Loading...'}</li>
                  <li className={styles.eligiblityItems}>Community: {parsedData ? parsedData.eligibility_criteria.Community : 'Loading...'}</li>
                  <li className={styles.eligiblityItems}>OtherDetails: {parsedData ? parsedData.eligibility_criteria.OtherDetails : 'Loading...'}</li>
                </ul>
              </div>
              <hr className={styles.horizontalRule} />
              <div className={styles.details}>
                <p className = {parsedData ? styles.itemCategory : 'Loading...'}>Sponsored by</p>
                <p className={styles.item}>{parsedData ? parsedData.funding_by : 'Loading...'}</p>
              </div>
            <hr className={styles.horizontalRule} />
          </div>)}
        </div>
        <div className={styles.applyContainer}><button className={styles.applyBtn}><a href = "https://edistricts.tn.gov.in:8443/certificates_csc" target = "_blank" className={styles.link}>Apply</a></button></div>
      </div>
    </div>
  );
}