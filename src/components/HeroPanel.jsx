import React from "react";
import NavBar from "./NavBar";
import Image from "next/image";
import MainPageImage from "../assets/backgroundimg.png";

const MainPage = () => {
  return (
    <div className="mb-[210px]">
      <NavBar />

      {/* Main page image */}
      <div className="absolute top-0 w-full z-0">
        <div className="relative h-60 brightness-50">
          <Image
            src={MainPageImage}
            alt="Loading Image..."
            layout="fill"
            objectFit="cover"
            objectPosition="center bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;