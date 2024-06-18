import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaUserTie,
  FaVenusMars,
} from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";

const Model = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "closeAnyWhere") onClose();
  };

  const router = useRouter();

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha (Orissa)",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi (National Capital Territory of Delhi)",
    "Puducherry",
    "Jammu and Kashmir",
    "Ladakh",
  ];
  const departments = ["Health", "Education", "Finance", "Agriculture"];
  const occupations = ["Farmer", "Government-Jobs", "Leader"];
  const gender = ["Male", "Female", "Others"];
  const income = [
    "₹ 0-10000",
    "₹ 10000-50000",
    "₹ 50000-100000",
    "above ₹ 100000",
  ];

  const [category, setCategory] = useState("states");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [activeButton, setActiveButton] = useState("states"); // Track active button
  const [currentCategory, setCurrentCategory] = useState("State"); // Initialize with default category

  const handleCategoryChange = (category) => {
    setCategory(category);
    setCurrentCategory(category.charAt(0).toUpperCase() + category.slice(1)); // Capitalize first letter
    setActiveButton(category); // Update activeButton state
  };

  const handleCheckboxChange = (item) => {
    setSelectedFilters((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((filter) => filter !== item)
        : [...prevSelected, item]
    );
  };

  const renderItems = () => {
    let items;
    switch (category) {
      case "states":
        items = states;
        break;
      case "departments":
        items = departments;
        break;
      case "gender":
        items = gender;
        break;
      case "occupations":
        items = occupations;
        break;
      case "income":
        items = income;
        break;
      default:
        items = [];
    }

    return items.map((item) => (
      <div key={item} className="flex gap-3 mb-[20px] ">
        <input
          type="checkbox"
          id={item}
          name={item}
          checked={selectedFilters.includes(item)}
          onChange={() => handleCheckboxChange(item)}
        />
        <p className="text-red">{item}</p>
      </div>
    ));
  };

  const handleGoBack = () => {
    onClose(); // This will go back to the previous page
  };

  const buttonClasses = (buttonCategory) =>
    `mb-8 flex items-center rounded-[10px] p-2 transition-colors ${
      activeButton === buttonCategory ? "bg-gray-300" : "hover:bg-gray-300"
    }`;

  const iconClasses = (buttonCategory) =>
    `${activeButton === buttonCategory ? "text-gray-600" : ""}`;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex
       justify-center items-center"
      id="closeAnyWhere"
      onClick={handleClose}
    >
      <div className="w-[700px] h-[500px] bg-white text-black flex flex-col justify-center items-center relative rounded-lg">
        {/* Main Div */}
        <div className="flex w-full h-full">
          {/* Left Column */}
          <div className="w-[200px] p-[30px] bg-gray-100">
            <div className="mb-4">
              <div className="flex flex-col">
                <div
                  className={buttonClasses("states")}
                  onClick={() => handleCategoryChange("states")}
                >
                  <FaMapMarkerAlt className={`mr-3 ${iconClasses("states")}`} />
                  <button
                    className={`button transition-colors ${iconClasses(
                      "states"
                    )}`}
                  >
                    State
                  </button>
                </div>
                <div
                  className={buttonClasses("departments")}
                  onClick={() => handleCategoryChange("departments")}
                >
                  <FaBuilding
                    className={`mr-3 ${iconClasses("departments")}`}
                  />
                  <button
                    className={`button transition-colors ${iconClasses(
                      "departments"
                    )}`}
                  >
                    Department
                  </button>
                </div>
                <div
                  className={buttonClasses("occupations")}
                  onClick={() => handleCategoryChange("occupations")}
                >
                  <FaUserTie className={`mr-3 ${iconClasses("occupations")}`} />
                  <button
                    className={`button transition-colors ${iconClasses(
                      "occupations"
                    )}`}
                  >
                    Occupation
                  </button>
                </div>
                <div
                  className={buttonClasses("gender")}
                  onClick={() => handleCategoryChange("gender")}
                >
                  <FaVenusMars className={`mr-3 ${iconClasses("gender")}`} />
                  <button
                    className={`button transition-colors ${iconClasses(
                      "gender"
                    )}`}
                  >
                    Gender
                  </button>
                </div>
                <div
                  className={buttonClasses("income")}
                  onClick={() => handleCategoryChange("income")}
                >
                  <MdCurrencyRupee
                    className={`mr-3 ${iconClasses("income")}`}
                  />
                  <button
                    className={`button transition-colors ${iconClasses(
                      "income"
                    )}`}
                  >
                    Income
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-full p-[20px] relative">
            {/* First Div */}
            <div className="flex justify-between items-center ">
              <p className="font-bold">{currentCategory}</p>
              {/* Close button */}
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={handleGoBack}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Second Div */}
            <div className="w-full mb-[45px] flex-col overflow-y-auto mt-[15px]">
              <div className="mb-[20px] "></div>
              <div className="mb-4 ml-[20px]">{renderItems()}</div>
            </div>

            {/* Third Div */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full sm:w-auto max-w-[90%] sm:max-w-none">
              <div className="w-full sm:w-auto px-4 sm:px-8 py-2 bg-black text-white flex justify-center items-center rounded-lg">
                <button className="w-full sm:w-auto button font-bold hover:bg-gray-800 transition-colors">
                  Apply Filter
                </button>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
