import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

const theBouquetList = localFont({
  src: "../../../public/fonts/The_Bouquet_List.ttf",
  display: "swap",
});

const ContactMe = () => {
  return (
    <div
      className={`flex relative rounded-2xl flex-col  items-center justify-end h-64.5 bg-white my-5 mb-20 w-full`}
    >
      <div className={`text-[40px] relative top-9 ${theBouquetList.className}`}>
        I'm sure you're convinced
      </div>
      <div className="flex items-center relative h-51.5 overflow-hidden w-full ">
        <div className="flex shrink-0 w-[247.14px]  mt-5">
          <Image
            src={"left-contact-illus.svg"}
            height={1000}
            width={1000}
            alt="left illus"
            className="w-full"
          />
        </div>
        <div className="h-13 md:h-16 text-sm md:text-md shrink-0 w-40 md:w-50 rounded-[300px] text-white flex justify-center items-center bg-navbar-back">
          Contact Me
        </div>
        <div className="flex shrink-0 w-[247.14px]">
          <Image
            src={"right-contact-illus.svg"}
            height={1000}
            width={1000}
            alt="left illus"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
