"use client";
import NavBar from "./components/nav/NavBar";
import Image from "next/image";
import InfoMain from "./components/info/InfoMain";
import ResumeMain from "./components/resume/ResumeMain";
import WorkMain from "./components/work/WorkMain";
import { useRef, useEffect, useState, use } from "react";

export default function Home() {
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const [isResumeInView, setIsResumeInView] = useState(false);

  const scrollToResume = () => {
    resumeRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsResumeInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      },
    );
    if (resumeRef.current) observer.observe(resumeRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect;
  return (
    <div className="flex flex-col min-h-screen ">
      <NavBar scrollToResume={scrollToResume} isResumeInView={isResumeInView} />
      <div className="flex w-40 h-90 -top-5 relative mx-auto">
        <Image
          src={"/picture.svg"}
          height={1000}
          width={1000}
          alt="picture"
          className="w-full"
        />
      </div>
      <main className="w-full flex flex-col items-center">
        <InfoMain />
        <div className="w-[40%] mt-15">
          <Image
            src={"/illustration.svg"}
            height={2000}
            width={2000}
            alt="illustration"
            className="w-full"
          />
        </div>
        <div className="w-[40%] mt-10">
          <WorkMain />
        </div>
        <div className="w-[40%] mb-20 mt-10" ref={resumeRef}>
          <ResumeMain />
        </div>
      </main>
    </div>
  );
}
