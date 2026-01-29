import React from "react";
import localFont from "next/font/local";
import WorkCard from "./WorkCard";

const theBouquetList = localFont({
  src: "../../../public/fonts/The_Bouquet_List.ttf",
  display: "swap",
});

const WorkMain = () => {
  return (
    <div className="w-full h-auto md:h-80">
      <div
        className={`w-full text-2xl md:text-3xl ${theBouquetList.className} h-14 flex items-center border-b border-b-navactive-btn/20`}
      >
        Work
      </div>
      <div className="flex md:mt-[48px]  mt-5 md:flex-row flex-col w-full min-h-40  md:h-auto  items-center md:items-end justify-between">
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  );
};

export default WorkMain;
