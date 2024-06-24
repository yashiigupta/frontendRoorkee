import React from "react";
import { MdExpandMore } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-2 pl-24 pr-24 z-10 relative ">
      {/* LogoImage */}
      <div className="text-white">
        {/* <img className="h-16 w-16 text-white" alt="logo" /> */}
        Logo 
      </div>

      {/* English Button */}
      <div className="border border-2 border-white rounded-[13px]">
        <button className="bg-none text-black px-4 py-1 rounded-lg flex items-center text-white hover:bg-white hover:text-black">
          English <MdExpandMore className="font-semibold" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;