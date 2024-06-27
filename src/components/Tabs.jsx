import { useState } from "react";
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
    <div className="my-[20px] flex justify-center items-center">
      <button
        className={`flex-grow text-center font-sm py-[16px] px-[16px] rounded-[8px] text-semibold border-none text-[16px] cursor-pointer font-sans ${
          activeTab === "Schemes"
            ? "bg-button-blue text-white"
            : "bg-hover-gray hover:bg-button-blue hover:text-white"
        }`}
        onClick={() => handleTabClick("Schemes")}
      >
        Schemes
      </button>
      <button
        className={`flex-grow text-center font-sm py-[16px] px-[16px] rounded-[8px] text-semibold border-none text-[16px] cursor-pointer font-sans ${
          activeTab === "Job Openings"
            ? "bg-button-blue text-white"
            : "bg-hover-gray hover:bg-button-blue hover:text-white"
        }`}
        onClick={() => handleTabClick("Job Openings")}
      >
        Job Openings
      </button>
      <button
        className={`flex-grow text-center font-sm py-[16px] px-[16px] rounded-[8px] text-semibold border-none text-[16px] cursor-pointer font-sans ${
          activeTab === "Scholarships"
            ? "bg-button-blue text-white"
            : "bg-hover-gray hover:bg-button-blue hover:text-white"
        }`}
        onClick={() => handleTabClick("Scholarships")}
      >
        Scholarships
      </button>
    </div>
    </div>
  );
}