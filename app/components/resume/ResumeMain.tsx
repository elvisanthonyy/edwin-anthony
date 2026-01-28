import React from "react";
import localFont from "next/font/local";
import ResumeComp from "./ResumeComp";

const theBouquetList = localFont({
  src: "../../../public/fonts/The_Bouquet_List.ttf",
  display: "swap",
});

const ResumeMain = () => {
  return (
    <div className="w-full h-100">
      <div
        className={`w-full text-2xl md:text-3xl ${theBouquetList.className} h-15 flex items-center border-b-[1px] border-b-navactive-btn/20`}
      >
        Resume
      </div>
      <div className="mt-10">
        <ResumeComp
          companyName="Mainstack"
          position="UI & Visual Design"
          time="Nov 2024"
        />
        <ResumeComp
          companyName="Tecton Studio"
          position="Product Design"
          time="Aug 2024"
        />
        <ResumeComp
          companyName="OneBeam"
          position="Product Design"
          time="Aug 2024"
        />
        <ResumeComp
          companyName="Cruz"
          position="Digital Illustrator"
          time="July 2024"
        />
        <ResumeComp
          companyName="Xspark360"
          position="Digital Illustrator"
          time="Jan 2022"
        />
      </div>
    </div>
  );
};

export default ResumeMain;
