import Image from "next/image";

interface ChildProps {
  scrollToResume: () => void;
  isResumeInView: boolean;
}

const NavBar = ({ scrollToResume, isResumeInView }: ChildProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="z-30 fixed left-[50%] text-nav-text items-center justify-between text-[15px] -translate-x-[50%] flex min-w-89.5 border-navactive-btn border rounded-[3000px] h-10 bg-navbar-back mx-auto mt-8 py-1">
      <div
        onClick={scrollToTop}
        className={`flex transition-all duration-500 ease-in cursor-pointer justify-center mx-1 items-center rounded-4xl h-full ${!isResumeInView && "bg-navactive-btn"} px-1`}
      >
        <div className="h-[80%] overflow-hidden mr-2 bg-black aspect-square rounded-full">
          <Image
            src={"head.svg"}
            height={1000}
            width={1000}
            alt="head"
            className="h-full"
          />
        </div>
        <div className="mr-10 text-white">EdwinDCreator</div>
      </div>
      <div
        onClick={scrollToResume}
        className={`${isResumeInView && "bg-navactive-btn"} px-3 transition-all h-full flex items-center duration-500 ease-in hover:px-5 rounded-2xl hover:mx-2 hover:bg-navactive-btn/50 cursor-pointer`}
      >
        Resume
      </div>
      <div className="px-4 transition-all h-full flex items-center duration-500 ease-in hover:px-5 rounded-2xl hover:mx-2 hover:bg-navactive-btn/50 cursor-pointer">
        Say Hello
      </div>
    </div>
  );
};

export default NavBar;
