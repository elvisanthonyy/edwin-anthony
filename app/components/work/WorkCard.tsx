import React from "react";
import { useState } from "react";
import Image from "next/image";

const WorkCard = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex w-full md:w-[288px] top-0 left-0 cursor-pointer relative h-[195px] rounded-3xl"
    >
      <div className="flex items-end w-full md:w-full h-full absolute bottom-0 left-0 rounded-3xl">
        <Image
          src={"Subtract.svg"}
          height={1000}
          width={1000}
          alt="/folder-top"
          className="w-full object-cover"
        />
      </div>
      <div className="flex box-border h-[137.5px] absolute justify-between left-[50%] -translate-x-[50%] w-[263px] top-4 left-0">
        <div
          className={`w-[117.42px] z-1 absolute flex shrink-0 h-[92.45px] ${hover ? "-translate-y-8 -translate-x-5 -rotate-23" : "translate-y-0 "} shadow-sm transition-all ease-in duration-700  bg-green-400 top-[7.18px] border-[2.5px] rounded-[3.75px] border-workcard-border`}
        ></div>
        <div
          className={`w-[117.42px] z-3 absolute flex shrink-0 h-[92.45px] ${hover ? "-translate-y-14 -rotate-10 -translate-x-3" : "-rotate-[12.49deg]"}  transition-all ease-in duration-700 shadow-sm  bg-purple-600 top-[27.18px] left-[39.18px] border-[2.5px] rounded-[3.75px] border-workcard-border`}
        ></div>
        <div
          className={`w-[117.42px] z-2 absolute flex shrink-0 h-[92.45px] ${hover ? "-translate-y-14 rotate-10" : "translate-y-0 rotate-[15.47deg] translate-x-3"} transition-all ease-in duration-700 shadow-sm  bg-yellow-500 top-3 left-[78.9px] border-[2.5px] rounded-[3.75px] border-workcard-border`}
        ></div>
        <div
          className={`w-[117.42px] z-1 absolute flex shrink-0 h-[92.45px] ${hover ? "-translate-y-12 translate-x-5 rotate-23" : "translate-y-0 rotate-[15.47deg]"} transition-all shadow-sm ease-in duration-700  bg-blue-400 top-[18px] right-2 border-[2.5px] rounded-[3.75px] border-workcard-border`}
        ></div>
      </div>
      <div className="flex items-end w-full z-5 backdrop-blur-[4px] md:w-full h-auto absolute bottom-0 left-0 rounded-3xl">
        <Image
          src={"folder-top.svg"}
          height={1000}
          width={1000}
          alt="/folder-top"
          className="w-full h-full"
        />
      </div>
      <div className="absolute z-10 left-4 bottom-7 w-19.25 h-6">
        <Image
          src={"folder-name.svg"}
          height={500}
          width={500}
          className="w-full"
          alt="folder-name"
        />
      </div>
    </div>
  );
};

export default WorkCard;
