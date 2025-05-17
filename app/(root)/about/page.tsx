"use client";

import TextSplit from "@/components/shared/animations/TextSplit";
import TextStaggerAnimation from "@/components/shared/animations/TextStaggerAnimation";
import Showreel from "@/components/shared/Showreel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    gsap.to(".main", {
      backgroundColor: "#17191B",
      scrollTrigger: {
        scroller: "body",
        trigger: ".page4",
        start: "top 80%",
        end: "top 0%",
        scrub: 1,
        // markers: true,
      },
    });
    gsap.to(".page4 , .page5", {
      backgroundColor: "#f7f3ef",
      scrollTrigger: {
        scroller: "body",
        trigger: ".page5",
        start: "top 80%",
        end: "top 0%",
        scrub: 1,
        // markers: true,
      },
    });

    gsap.from(".creating span", {
      transform: "translateY(100%)",
      stagger: {
        amount: 1.5,
      },
      scrollTrigger: {
        trigger: ".creating",
        start: "top 80%",
        end: "top 10%",
        scrub: 1,
        // markers: true,
      },
    });

    gsap.from(".building span", {
      transform: "translateY(100%)",
      stagger: {
        amount: 1.5,
      },
      scrollTrigger: {
        trigger: ".building",
        start: "top 80%",
        end: "top 10%",
        scrub: 1,
        // markers: true,
      },
    });
    gsap.from(".music span", {
      transform: "translateY(100%)",
      stagger: {
        amount: 1.5,
      },
      scrollTrigger: {
        trigger: ".music",
        start: "top 80%",
        end: "top 10%",
        scrub: 1,
        // markers: true,
      },
    });
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
  }, []);

  useEffect(() => {
    document.title = "Anuj Kelodiya - About";
  }, []);

  return (
    <div className="main bg bb text-black">
      <section className="page1 w-full pt-[12vw] max-lg:pt-[20vw] max-md:pt-[24vw] max-sm:pt-[30vw] max-sm:pb-[6vw] px-4 pb-[4vw]">
        <div className="about-heading text-left">
          <h1 className="text-[22vw] tracking-tighter textt  leading-none overflow-hidden">
            <TextSplit text="about"></TextSplit>
          </h1>
        </div>
      </section>
      <Showreel link="https://cdn.prod.website-files.com/666066030b1447405865fff8%2F677e96fde9e05c3a1f266504_Filip%20Felbar%20Showreel%20Background-transcode.mp4"></Showreel>
      <section className="page3 relative">
        <span className="bb sticky mix-blend-difference text-red-50 inline-block pl-4 top-1/2 -translate-y-1/2">
          Introduction
        </span>
        <div className="h-screen w-full flex justify-center items-center px-4">
          <h2 className="namaste text-[20vw] tracking-tighter textt leading-none">
            <span className="block overflow-hidden">
              <TextSplit text="namaste"></TextSplit>
            </span>
          </h2>
        </div>
        <div className="h-screen w-full flex justify-center items-center px-4">
          <span className="text-lg bb">{`Hi, I’m Anuj`}</span>
        </div>

        <div className="creating h-screen w-full text-center px-4">
          <h2 className=" text-[12vw] leading-[1] tracking-tighter textt">
            <span className="block overflow-hidden">
              <TextSplit text="creating"></TextSplit>
            </span>
            <span className="block overflow-hidden">
              <TextSplit text="standout digital"></TextSplit>
            </span>
            <span className="block overflow-hidden">
              <TextSplit text="edit since"></TextSplit>
            </span>
            <span className="block overflow-hidden">
              <TextSplit text="2016"></TextSplit>
            </span>
          </h2>
        </div>
        <div className="h-screen w-full flex justify-center items-center px-4">
          <span className="text-5xl ll text-center w-[75%] max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-lg:w-[85%]">
            {`As a dynamic video editor, I specialize in turning ordinary moments into extraordinary experiences. 
            With technical skills across Premiere Pro, After Effects, DaVinci Resolve, and expanding 
            motion graphics expertise, I craft visual stories that connect, engage, and captivate.`}
          </span>
        </div>
      </section>
      <section className="page4 custom-gradient text-white  relative">
        <span className="bb sticky inline-block pl-4 top-1/2 -translate-y-1/2">
          Experience
        </span>
        <div className="h-screen w-full flex justify-center items-center textt px-4">
          <h2 className="text-[20vw] tracking-tighter bb">also</h2>
        </div>
        <div className="h-screen w-full flex justify-center items-center px-4">
          <span className="text-lg bb">I’m a designer specialising in</span>
        </div>

        <div className="building h-screen w-full text-center px-4">
          <h2 className="text-[12vw] leading-[1] tracking-tighter textt">
            <span className="block overflow-hidden">
              <TextSplit text="building visual"></TextSplit>
            </span>
            <span className="block overflow-hidden">
              <TextSplit text="narratives that"></TextSplit>
            </span>
            <span className="block overflow-hidden">
              <TextSplit text="captivate"></TextSplit>
            </span>
          </h2>
        </div>
        <div className="h-screen w-full flex justify-center items-center px-4">
          <span className="text-5xl ll text-center w-[75%] max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-lg:w-[85%]">
            While my journey is just beginning, my commitment to creativity and
            continuous learning drives every project. Each edit is a canvas,
            where technical skill meets artistic vision to create memorable
            visual experiences that transform ordinary moments into
            extraordinary stories.
          </span>
        </div>
      </section>
      <section className="page5 relative">
        <span className="bb sticky inline-block pl-4 top-1/2 mix-blend-difference text-red-50 -translate-y-1/2">
          Self promotion
        </span>
        <div className="h-screen w-full flex justify-center items-center px-4">
          <h2 className="text-[22vw] tracking-tighter textt">oh</h2>
        </div>
        <div className="h-screen w-full flex justify-center text-center items-center px-4">
          <span className="text-lg bb">
            {`since you've been scrolling so long, interested in listen to my
            music?`}
          </span>
        </div>

        <div className="h-screen w-full text-center px-4">
          <h2 className="music text-[10vw] leading-[1] tracking-tighter textt">
            <span className="block overflow-hidden">
              <TextSplit text="music is art"></TextSplit>
            </span>
            <span className="block overflow-hidden">
              <TextSplit text="jesse and the shit"></TextSplit>
            </span>
            <span className="block overflow-hidden">
              <TextSplit text="I cook is boom"></TextSplit>
            </span>
          </h2>
          <div className="overflow-hidden bg-white w-fit m-auto mt-12">
            <TextStaggerAnimation
              href="/#"
              text="youtube"
              className="contact"
            />
          </div>
        </div>
        <div className="h-screen w-full flex justify-center items-center px-4">
          <span className="text-5xl ll text-center w-[75%] max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-lg:w-[85%]">
            {`More than just music, this channel is a platform for thoughtful storytelling through hip-hop. 
            Focused on creating meaningful lyrics that inspire and connect, each track aims to elevate the 
            art form with depth, skill, and genuine expression.`}
          </span>
        </div>
      </section>
      <section className="page6 relative p-4 h-screen max-lg:h-[90vh] max-md:h-[75vh] max-sm:h-[50vh] w-full bg">
        <Image
          className="w-full h-full object-cover"
          src="https://cdn.prod.website-files.com/666066030b1447405865fff8/674ef6cc80b693672fdac03c_Filip-Felbar-Domestika-Course.webp"
          alt=""
          width={1000}
          height={1000}
        />
      </section>
    </div>
  );
}
