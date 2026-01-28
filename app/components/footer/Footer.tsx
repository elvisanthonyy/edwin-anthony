import { FaBehance, FaLinkedinIn, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mx-auto flex justify-center h-12 md:h-14 p-1.5 md:p-2 mb-10 w-45 md:w-51 bg-navbar-back rounded-[20px]">
      <div className="flex justify-center items-center text-gray-200 text-lg h-full aspect-square rounded-xl mr-2 bg-footer-btn">
        <FaBehance />
      </div>
      <div className="flex justify-center items-center text-gray-200 text-lg h-full aspect-square rounded-xl mr-2 bg-footer-btn">
        <FaLinkedinIn className="-rotate-2" />
      </div>
      <div className="flex justify-center items-center text-gray-200 text-lg h-full aspect-square rounded-xl mr-2 bg-footer-btn">
        <FaGlobe />
      </div>
      <div className="flex justify-center items-center text-gray-200 text-lg h-full aspect-square rounded-xl bg-footer-btn">
        <FaXTwitter />
      </div>
    </div>
  );
};

export default Footer;
