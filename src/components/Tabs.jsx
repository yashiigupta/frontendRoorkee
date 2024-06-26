import { IoArrowBackOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import styles from "../styles/tabs.module.css";
import BackButton from "./BackButton";

export default function Tabs(props) {
  const [activeTab, setActiveTab] = useState("Schemes");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    props.setComponent(tab);
  };

  return (
    <div>
      <BackButton/>
    <div className="mt-5 flex justify-center items-center mb-5">
      <button
        className={`flex-grow text-center font-sm py-3 rounded-md border-none text-sm cursor-pointer font-sans ${
          activeTab === "Schemes"
            ? "bg-button-blue text-white"
            : "bg-gray-100 hover:bg-button-blue hover:text-white"
        }`}
        onClick={() => handleTabClick("Schemes")}
      >
        Schemes
      </button>
      <button
        className={`flex-grow text-center font-sm py-3 rounded-md border-none text-sm cursor-pointer font-sans ${
          activeTab === "Job Openings"
            ? "bg-button-blue text-white"
            : "bg-gray-100 hover:bg-button-blue hover:text-white"
        }`}
        onClick={() => handleTabClick("Job Openings")}
      >
        Job Openings
      </button>
      <button
        className={`flex-grow text-center font-sm py-3 rounded-md border-none text-sm cursor-pointer font-sans ${
          activeTab === "Scholarships"
            ? "bg-button-blue text-white"
            : "bg-gray-100 hover:bg-button-blue hover:text-white"
        }`}
        onClick={() => handleTabClick("Scholarships")}
      >
        Scholarships
      </button>
    </div>
    </div>
  );
}
