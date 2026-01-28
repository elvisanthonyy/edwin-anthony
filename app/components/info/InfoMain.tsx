import React from "react";
import localFont from "next/font/local";

const theBouquetList = localFont({
  src: "../../../public/fonts/The_Bouquet_List.ttf",
  display: "swap",
});

const InfoMain = () => {
  return (
    <div className="w-[88%] md:w-[40%] h-30  mx-auto text-center">
      <div className="info-animation overflow-hidden">
        <div
          className={`${theBouquetList.className} font-medium text-[26px] md:text-[32px] mb-3`}
        >
          Hi I'm Edwin Anthony
        </div>
        <div className="font-light text-xs md:text-sm">
          <span className="font-semibold">A Digital Illustrator</span> and
          <span className="font-semibold ml-1">Product Designer </span> with
          over four years of experience. I specialize in UI and Visual Design,
          crafting intuitive and visually striking experiences that solve
          problems and engage users.{" "}
          <span className="text-blue-500 underline">Read more</span>
        </div>
      </div>
    </div>
  );
};

export default InfoMain;
