"use client";

import TextSplit from "@/components/shared/animations/TextSplit";
import PortraitWorks from "@/components/work/PortraitWorks";
import ReelCard from "@/components/work/ReelCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect } from "react";

export default function Work() {
  useGSAP(() => {
    gsap.from(".contact-title span", {
      transform: "translateY(100%)",
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: ".contact-title",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
        // markers: true,
      },
    });
  });

  useEffect(() => {
    document.title = "Anuj Kelodiya - Work";
  }, []);

  return (
    <div className="main bg mm text-black">
      <section className="page1 w-full pt-[12vw] px-4 pb-[4vw] max-lg:pt-[20vw] max-md:pt-[24vw] max-sm:pt-[30vw] max-sm:pb-[6vw]">
        <div className="work-heading text-left">
          <h1 className="text-[22vw] tracking-tighter textt  leading-none overflow-hidden">
            <TextSplit text="work"></TextSplit>
          </h1>
        </div>
      </section>
      <section className="page2 w-full relative pt-[0vw]">
        <PortraitWorks
          alt="project video"
          link="https://images.unsplash.com/photo-1742268351423-6d04402e9090?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <PortraitWorks
          alt="project video"
          link="https://images.unsplash.com/photo-1741781650657-ce002002a996?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <PortraitWorks
          alt="project video"
          link="https://images.unsplash.com/photo-1696216997841-648877790ad4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </section>
      <section className="page3 relative px-4">
        <h2 className="textt text-[10vw] max-lg:text-[14vw] max-sm:text-[16vw] leading-none sticky inline-block pl-4 top-1/2 left-1/2 -translate-x-1/2 ">
          reels
        </h2>
        <div className="reels w-full px-4 overflow-hidden relative z-[1]">
          <div className="w-full flex py-[4vw]">
            <ReelCard
              index="1"
              link="https://images.unsplash.com/photo-1741627872533-52df24885303?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="w-full flex justify-end py-[8vw] relative z-[1]">
            <ReelCard
              index="2"
              link="https://images.unsplash.com/photo-1741627872533-52df24885303?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="w-full flex py-[4vw] relative z-[1]">
            <ReelCard
              index="3"
              link="https://images.unsplash.com/photo-1741627872533-52df24885303?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="w-full flex justify-end py-[8vw] relative z-[1]">
            <ReelCard
              index="4"
              link="https://images.unsplash.com/photo-1741627872533-52df24885303?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="w-full flex justify-center py-[8vw] pb-0 relative z-[1]">
            <ReelCard
              index="5"
              link="https://images.unsplash.com/photo-1741627872533-52df24885303?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
