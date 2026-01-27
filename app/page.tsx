"use client";
import NavBar from "./components/nav/NavBar";
import Image from "next/image";
import InfoMain from "./components/info/InfoMain";
import ResumeMain from "./components/resume/ResumeMain";
import WorkMain from "./components/work/WorkMain";
import { useRef, useEffect, useState, use } from "react";
import Footer from "./components/footer/Footer";
import ContactMe from "./components/contactMe/ContactMe";

const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleNav, setIsVisibleNav] = useState(false);
  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          setIsVisibleNav(true);
        } else {
          setIsVisibleNav(false);
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible, isVisibleNav };
};

export default function Home() {
  const [angle, setAngle] = useState(0);
  const [isResumeInView, setIsResumeInView] = useState(false);
  const [pos, setPos] = useState({ x: 0 });

  const scrollToResume = () => {
    if (!resumeRef.ref.current) return;
    resumeRef?.ref?.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    if (!contactRef.ref.current) return;
    contactRef?.ref?.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const workRef = useScrollAnimation();
  const resumeRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  useEffect;
  return (
    <div className="flex flex-col min-h-screen ">
      <NavBar
        scrollToContact={scrollToContact}
        scrollToResume={scrollToResume}
        isResumeInView={resumeRef.isVisibleNav}
        isContactInView={contactRef.isVisibleNav}
      />
      <div
        onMouseLeave={() => {
          setTimeout(() => {
            setPos({ x: 0 });
          }, 500);

          setAngle(0);
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();

          const x = e.clientX - rect.left - rect.width / 2;
          setPos({ x: x });
          /*const y = e.clientY - rect.top - rect.height / 2;

          const deg = Math.atan2(20, x) * (180 / Math.PI) - 10;

          setAngle(deg / 7);*/
        }}
        className="flex cursor-pointer 
        transition-all ease-in duration-900 left-[50%] -translate-x-[50%] head-animation w-40 h-90 -top-5 absolute mx-auto"
        style={{
          transform: `rotate(${angle}deg) translateX(${pos.x}px)`,
        }}
      >
        <Image
          src={"Picture.svg"}
          height={1000}
          width={1000}
          alt="picture"
          className="w-full"
        />
      </div>
      <main className="w-full pt-80 flex flex-col items-center">
        <InfoMain />
        <div className="w-[40%] illus-animation  p-7 mt-16">
          <Image
            src={"Illustration.svg"}
            height={2000}
            width={2000}
            alt="illustration"
            className="w-full"
          />
        </div>
        <div
          ref={workRef.ref}
          className={`${workRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"} transition-all duration-700 ease-in w-[40%] mt-16}`}
        >
          <WorkMain />
        </div>
        <div
          ref={resumeRef.ref}
          className={`w-[40%] mb-20 mt-16 ${resumeRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} transition-all duration-700 ease-in`}
        >
          <ResumeMain />
        </div>
        <div
          ref={contactRef.ref}
          className={`${contactRef.isVisible ? "opacity-100" : "opacity-0"} transition-all duration-700 ease-in w-[45%] mt-16}`}
        >
          <ContactMe />
        </div>
      </main>
      <Footer />
    </div>
  );
}
