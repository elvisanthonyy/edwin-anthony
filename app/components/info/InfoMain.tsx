"use client";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";

const theBouquetList = localFont({
  src: "../../../public/fonts/The_Bouquet_List.ttf",
  display: "swap",
});

const InfoMain = () => {
  const router = useRouter();
  return (
    <div className="w-[88%] md:w-[40%] min-h-30  mx-auto text-center">
      <div className="info-animation overflow-hidden">
        <div
          className={`${theBouquetList.className} font-medium text-[36px] md:text-[32px] mb-3`}
        >
          Hi I'm Edwin Anthony
        </div>
        <div className="font-light text-md md:text-[16px]">
          <span className="font-semibold">A Digital Illustrator</span> and
          <span className="font-regular ml-1">Product Designer </span> with over
          four years of experience. I specialize in UI and Visual Design,
          crafting intuitive and visually striking experiences that solve
          problems and engage users.{" "}
          <span
            onClick={() => router.push("/about")}
            className="text-blue-500 underline cursor-pointer"
          >
            Read more
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoMain;
