import Image from "next/image";

interface ChildProps {
  companyName: string;
  position: string;
  time: string;
  logo: string;
}

const ResumeComp = ({ companyName, position, time, logo }: ChildProps) => {
  return (
    <div className="flex mb-5 items-center justify-between">
      <div className="flex h-full items-center">
        <div className="flex justify-center items-center w-8 h-8 md:w-11 md:h-11 mr-5 bg-black rounded-lg p-3.5">
          <Image
            src={logo}
            height={300}
            width={300}
            alt="logo"
            className="w-full"
          />
        </div>
        <div className="">
          <div className="text-[16px] font-regular md:text-lg">
            {companyName}
          </div>
          <div className="text-xs md:text-[14px] text-resume-card-date">
            {position}
          </div>
        </div>
      </div>

      <div className="h-full text-resume-card-date text-xs md:text-[14px] flex items-center">
        {time}
      </div>
    </div>
  );
};

export default ResumeComp;
