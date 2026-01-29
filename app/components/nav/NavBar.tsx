import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface ChildProps {
  scrollToResume: () => void;
  scrollToContact: () => void;
  isResumeInView: boolean;
  isContactInView: boolean;
}

const NavBar = ({
  scrollToResume,
  scrollToContact,
  isResumeInView,
  isContactInView,
}: ChildProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="z-30 px-1 w-[90%] nav-animation fixed left-[50%] text-nav-text items-center text-[10px] md:text-[15px] -translate-x-[50%] flex md:min-w-89.5 md:w-auto border-navactive-btn border rounded-[3000px] h-12  md:h-10 bg-navbar-back mx-auto mt-6 md:mt-8 py-1">
      <div
        onClick={scrollToTop}
        className={`flex transition-all mr-0.5 md:mr-2 hover:px-4 w-42.25 hover:bg-navactive-btn/50 duration-500 ease-in cursor-pointer justify-center items-center rounded-4xl h-full ${!isResumeInView && "bg-navactive-btn"} px-1`}
      >
        <div className="h-[80%] flex shrink-0 overflow-hidden mr-2 bg-black aspect-square rounded-full">
          <Image
            src={"head.svg"}
            height={1000}
            width={1000}
            alt="head"
            className="h-full"
          />
        </div>
        <div className="mr-1 text-white">EdwinDCreator</div>
        <div className="mr-1 text-sm -rotate-45">
          <FaArrowRight />
        </div>
      </div>
      <div
        onClick={scrollToResume}
        className={`${isResumeInView && !isContactInView ? "bg-navactive-btn" : ""} px-4 mr-0.5 md:mr-2 transition-all h-full flex items-center duration-400 ease-in hover:pr-9 rounded-3xl md:rounded-2xl hover:bg-navactive-btn/50 cursor-pointer`}
      >
        Resume
      </div>
      <div
        onClick={scrollToContact}
        className={`${isContactInView && "bg-navactive-btn"} shrink-0 px-4 transition-all h-full flex items-center duration-400 ease-in hover:pr-9 rounded-3xl md:rounded-2xl hover:bg-navactive-btn/50 cursor-pointer`}
      >
        Say Hello
      </div>
    </div>
  );
};

export default NavBar;
