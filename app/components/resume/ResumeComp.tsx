import React from "react";

interface ChildProps {
  companyName: string;
  position: string;
  time: string;
}

const ResumeComp = ({ companyName, position, time }: ChildProps) => {
  return (
    <div className="flex mb-5 justify-between">
      <div className="flex">
        <div className="w-11 h-11 mr-5 bg-black rounded-lg"></div>
        <div className="">
          <div className="font-semibold">{companyName}</div>
          <div className="text-sm text-navactive-btn">{position}</div>
        </div>
      </div>

      <div className="h-full text-sm flex items-center">{time}</div>
    </div>
  );
};

export default ResumeComp;
