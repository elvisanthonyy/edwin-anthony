import React from "react";
import localFont from "next/font/local";

const theBouquetList = localFont({
  src: "../../../public/fonts/The_Bouquet_List.ttf",
  display: "swap",
});

const ContactMe = () => {
  return (
    <div
      className={`flex rounded-2xl flex-col py-10 items-center justify-center h-64.5 bg-white my-5 mb-20 w-full`}
    >
      <div className={`text-3xl ${theBouquetList.className}`}>
        I'm sure you're convinced
      </div>
      <div className="h-16 shrink-0 w-50 mt-8 rounded-[300px] text-white flex justify-center items-center bg-navbar-back">
        Contact Me
      </div>
    </div>
  );
};

export default ContactMe;
