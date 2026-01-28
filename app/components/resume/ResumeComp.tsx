import React from "react";

interface ChildProps {
  companyName: string;
  position: string;
  time: string;
}

const ResumeComp = ({ companyName, position, time }: ChildProps) => {
  return (
    <div className="flex mb-5 items-center justify-between">
      <div className="flex h-full items-center">
        <div className="w-8 h-8 md:w-11 md:h-11 mr-5 bg-black rounded-lg"></div>
        <div className="">
          <div className="font-semibold text-sm md:text-lg">{companyName}</div>
          <div className="text-xs md:text-sm text-navactive-btn">
            {position}
          </div>
        </div>
      </div>

      <div className="h-full text-xs md:text-sm flex items-center">{time}</div>
    </div>
  );
};

export default ResumeComp;
