import React from "react";
import { useState } from "react";

const WorkCard = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="w-full md:w-65 cursor-pointer relative h-45 rounded-3xl bg-linear-to-r from-blue-500 to-blue-700"
    >
      <div className="flex absolute justify-between w-full top-6 left-0">
        <div
          className={`w-23 h-14 ${hover ? "-translate-y-8 -translate-x-5 -rotate-23" : "translate-y-0 "} shadow-sm transition-all ease-in duration-700  bg-red-600 rounded-lg border-2 border-gray-100`}
        ></div>
        <div
          className={`w-23 h-14 ${hover ? "-translate-y-14 -rotate-10 -translate-x-3" : "translate-y-0 rotate-6"} top-2 relative transition-all ease-in duration-700 shadow-sm  bg-yellow-400 rounded-lg border-2 border-gray-100 `}
        ></div>
        <div
          className={`w-23 h-14 ${hover ? "-translate-y-14 rotate-10" : "translate-y-0 -rotate-6 translate-x-3"} relative transition-all ease-in duration-700 shadow-sm  bg-orange-500 rounded-lg border-2 border-gray-100 `}
        ></div>
        <div
          className={`w-23 h-14 ${hover ? "-translate-y-12 translate-x-5 rotate-23" : "translate-y-0 rotate-6"} transition-all shadow-sm ease-in duration-700  bg-green-600 rounded-lg border-2 border-gray-100 `}
        ></div>
      </div>
      <div className="w-full md:w-65 shadow-xl h-30 absolute bottom-0 left-0  bg-linear-to-r to-blue-500 from-blue-700/98 rounded-3xl"></div>
    </div>
  );
};

export default WorkCard;
