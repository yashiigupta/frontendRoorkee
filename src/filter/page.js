// components/Filter.js
"use client";
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaBuilding, FaUserTie, FaVenusMars } from 'react-icons/fa';
import { MdCurrencyRupee } from 'react-icons/md';

const Filter = () => {
  const states = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland", "Odisha (Orissa)","Punjab","Rajasthan","Sikkim", "Tamil Nadu", "Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu","Lakshadweep","Delhi (National Capital Territory of Delhi)","Puducherry","Jammu and Kashmir","Ladakh"];
  const departments = ['Health', 'Education', 'Finance', 'Agriculture'];
  const occupations = ['Farmer', 'Government-Jobs', 'Leader'];
  const gender = ['Male' , 'Female', 'Others'];
  const income = ['₹ 0-10000', '₹ 10000-50000', '₹ 50000-100000', 'above ₹ 100000'];

  const [category, setCategory] = useState('states');

  const renderItems = () => {
    let items;
    switch (category) {
      case 'states':
        items = states;
        break;
      case 'departments':
        items = departments;
        break;
      case 'gender':
        items = gender;
        break;
      case 'occupations':
        items = occupations;
        break;  
      case 'income':
        items = income;
        break;
      default:
        items = [];
    }

    return items.map((item) => (
      <div key={item} className='flex gap-3 mb-[20px] '>
        <input type="checkbox" id={item} name={item} />
        <p className='text-red'>{item}</p>
      </div>
    ));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[700px] h-[500px] bg-white text-black flex relative rounded-lg">



        {/* Left Column */}
        <div className="w-[200px] p-[30px] bg-gray-200">
          <div className="mb-4">
            <div className="flex flex-col">
              <div className="mb-8 flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <button 
                  className="button hover:bg-gray-300 transition-colors hover:border hover:border-gray-600 hover:border-opacity-50 transition-all rounded-md"
                  onClick={() => setCategory('states')}
                >
                  State
                </button>
              </div>
              <div className="mb-8 flex items-center">
                <FaBuilding className="mr-2" />
                <button 
                  className="button hover:bg-gray-300 transition-colors hover:border hover:border-gray-600 hover:border-opacity-50 transition-all rounded-md"
                  onClick={() => setCategory('departments')}
                >
                  Department
                </button>
              </div>
              <div className="mb-8 flex items-center">
                <FaUserTie className="mr-2" />
                <button 
                  className="button hover:bg-gray-300 transition-colors hover:border hover:border-gray-600 hover:border-opacity-50 transition-all rounded-md"
                  onClick={() => setCategory('occupations')}
                >
                  Occupation
                </button>
              </div>
              <div className="mb-8 flex items-center">
                <FaVenusMars className="mr-2" />
                <button 
                  className="button hover:bg-gray-300 transition-colors hover:border hover:border-gray-600 hover:border-opacity-50 transition-all rounded-md"
                  onClick={() => setCategory('gender')}
                >
                  Gender
                </button>
              </div>
              <div className="flex items-center">
                <MdCurrencyRupee className="mr-2" />
                <button 
                  className="button hover:bg-gray-300 transition-colors hover:border hover:border-gray-600 hover:border-opacity-50 transition-all rounded-md"
                  onClick={() => setCategory('income')}
                >
                  Income
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Right Column */}
        <div className="w-1/2 p-4 flex-col overflow-y-auto ml-0 bg-red">
          <div className="mb-4">
            {renderItems()}
          </div>
        </div>


        {/* Filter button */}
        <div className="absolute bottom-4 right-4 flex justify-center items-center">
          <div className="h-[40px] w-[110px] bg-black text-white flex justify-center items-center rounded-lg">
            <button className="button font-bold hover:bg-gray-800 transition-colors">Apply Filter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;