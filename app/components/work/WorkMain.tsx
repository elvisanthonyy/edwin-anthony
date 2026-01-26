import React from "react";
import localFont from "next/font/local";

const theBouquetList = localFont({
  src: "../../../public/fonts/The_Bouquet_List.ttf",
  display: "swap",
});

const WorkMain = () => {
  return (
    <div className="w-full h-100">
      <div
        className={`w-full text-3xl ${theBouquetList.className} h-15 flex items-center border-b-[1px] border-b-navactive-btn/20`}
      >
        Work
      </div>
    </div>
  );
};

export default WorkMain;
