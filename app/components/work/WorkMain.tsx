import React from "react";
import localFont from "next/font/local";
import WorkCard from "./WorkCard";

const theBouquetList = localFont({
  src: "../../../public/fonts/The_Bouquet_List.ttf",
  display: "swap",
});

const WorkMain = () => {
  return (
    <div className="w-full h-80">
      <div
        className={`w-full text-3xl ${theBouquetList.className} h-15 flex items-center border-b-[1px] border-b-navactive-btn/20`}
      >
        Work
      </div>
      <div className="flex w-full h-[80%] px-1 items-end justify-between">
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  );
};

export default WorkMain;
