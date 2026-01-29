"use client";
import { IoClose } from "react-icons/io5";
import { FaArrowDown, FaAngleDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Footer from "../footer/Footer";
import { useState } from "react";

const AboutCard = () => {
  const router = useRouter();
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  return (
    <div
      className={`relative shadow-xl transition-all duration-800 ease-in-out pb-10 flex flex-col  p-6 about-animation  w-160 ${isPhotoOpen ? "h-220" : "h-138.75"}  bg-navbar-back rounded-[24px]`}
    >
      <div className="w-full z-20 items-center justify-between flex h-9.5 mb-8">
        <div
          onClick={() => router.push("/")}
          className="flex cursor-pointer justify-center items-center h-8.25 w-8 rounded-full bg-navactive-btn"
        >
          {" "}
          <IoClose className="text-nav-text" />
        </div>
        <div
          onClick={() =>
            isPhotoOpen ? setIsPhotoOpen(false) : setIsPhotoOpen(true)
          }
          className=" text-nav-text flex justify-center items-center rounded-full "
        >
          <div className="mr-2 text-[14px]">Photos</div>
          <FaAngleDown
            className={`mt-1 text-lg ${isPhotoOpen ? "-rotate-180" : "rotate-0"} transition-all duration-500 ease-in-out`}
          />
        </div>
      </div>

      <div
        className={`${isPhotoOpen ? "flex opacity-100 " : "hidden opacity-0"} transition-all rounded-3xl duration-700 ease-in mb-6 shrink-0 w-full h-[288.23px] bg-navactive-btn/30`}
      ></div>

      <div className="text-[14px] transition-all duration-500 text-nav-text mb-4">
        Hi, I'm Edwin Anthony a Digital Illustrator and Product Designer with
        over four years of experience. I specialise in UI and Visual Design,
        crafting intuitive and visually striking experiences that solve problems
        and engage users.
        <br />
        <br /> I've worked on diverse projects ranging from analytics platforms
        and learning management systems to social apps and marketing websites
        collaborating with teams at Mainstack, Tecton Studio, and Onebeam.{" "}
        <br />
        <br />
        My experience spans building dashboards, mobile/web apps, landing pages,
        and illustration systems. Alongside product design, I bring a strong
        foundation in digital illustration. <br />
        <br /> I've created mascots, comics, storyboards, and icon systems for
        products and campaigns, giving me the ability to merge usability with
        visual storytelling.
        <br />
        <br /> I thrive at the intersection of creativity and functionality,
        ensuring every design feels intuitive, engaging, and purposeful.
      </div>
      <div className="flex mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default AboutCard;
