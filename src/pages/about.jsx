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
          <p className={styles.heading}>{parsedData.scheme_name}</p>
          <div>
            <button className={styles.engBtn}><GoShareAndroid className = {styles.shareBtn} />Share scheme</button>
          </div>
          </div>
          <hr className={styles.horizontalRule} />
          <div className={styles.detailShow}>
            {parsedData && (<div>
              <div className={styles.details}>
                <p className = {styles.itemCategory}>Department</p>
                <p className={styles.item}>{parsedData.category}</p>
              </div>
              <hr className={styles.horizontalRule} />
              <div className={styles.details}>
                <p className = {styles.itemCategory}>Beneficiaries</p>
                <p className={styles.item}>{parsedData.beneficiary_category}</p>
              </div>
              <hr className={styles.horizontalRule} />
              <div className={styles.details}>
                <p className = {styles.itemCategory}>Description</p>
                <p className={styles.item}>{parsedData.scheme_objective}</p>
              </div>
              <hr className={styles.horizontalRule} />
              <div className={styles.details}>
                <p className = {styles.itemCategory}>Eligiblity Criteria</p>
                <ul className={styles.eligiblityList}>
                  <li className={styles.eligiblityItems}>Income: {parsedData.eligibility_criteria.Income}</li>
                  <li className={styles.eligiblityItems}>Age: {parsedData.eligibility_criteria.Age}</li>
                  <li className={styles.eligiblityItems}>Community: {parsedData.eligibility_criteria.Community}</li>
                  <li className={styles.eligiblityItems}>OtherDetails: {parsedData.eligibility_criteria.OtherDetails}</li>
                </ul>
              </div>
              <hr className={styles.horizontalRule} />
              <div className={styles.details}>
                <p className = {styles.itemCategory}>Sponsored by</p>
                <p className={styles.item}>{parsedData.funding_by}</p>
              </div>
            <hr className={styles.horizontalRule} />
          </div>)}
        </div>
        <div className={styles.applyContainer}><button className={styles.applyBtn}><a href = "https://edistricts.tn.gov.in:8443/certificates_csc" target = "_blank" className={styles.link}>Apply</a></button></div>
      </div>
    </div>
  );
}