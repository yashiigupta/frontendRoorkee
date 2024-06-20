import Model from '@/pages/model';
import { useState } from 'react';
import { FaBuilding, FaMapMarkerAlt, FaUserTie, FaVenusMars } from 'react-icons/fa';
import { IoArrowBackOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { TbBuilding } from "react-icons/tb";
import { TfiBag } from "react-icons/tfi";
import { BsGenderFemale } from "react-icons/bs";
import { MdCurrencyRupee } from "react-icons/md";
import styles from '../styles/schemes.module.css';

export default function Scholarships()
{
  return (
    <>
      <div className="bg-white font-sans">
        <button className="flex items-center justify-between p-0 border-none mb-5 text-base bg-white">
          <IoArrowBackOutline className="mr-1 text-xl" /> Back
        </button>
        <div className="flex justify-between flex-wrap">
          <h1 className="mt-0 mb-4 text-[30px] font-semibold">Scholership</h1>
          <div>
            <button className="font-semibold p-2 rounded-lg border border-gray-300 bg-white mr-2">Regional Language</button>
            <button className="font-semibold p-2 rounded-lg border border-gray-300 bg-white px-7">English</button>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.checkBtn}><FiMapPin className={styles.checkIcons}/> State</button>
        <button className={styles.checkBtn}><TbBuilding className={styles.checkIcons}/> Department</button>
        <button className={styles.checkBtn}><TfiBag className={styles.checkIcons}/> Occupation</button>
        <button className={styles.checkBtn}><BsGenderFemale className={styles.checkIcons}/> Gender</button>
        <button className={styles.checkBtn}><MdCurrencyRupee className={styles.checkIcons}/> Income</button>
      </div>
      {/* <Model isVisible={selectedCategory !== null} category={selectedCategory} onClose={handleCloseModal}/> */}
    </>
  );
}