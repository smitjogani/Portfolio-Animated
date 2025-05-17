"use client";

import Loader from "@/components/loader/Loader";
import TextSplit from "@/components/shared/animations/TextSplit";
import TextStaggerAnimation from "@/components/shared/animations/TextStaggerAnimation";
import Showreel from "@/components/shared/Showreel";
import PortraitWorks from "@/components/work/PortraitWorks";
import { slideInOut } from "@/utils/slideInOut";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTransitionRouter } from "next-view-transitions";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const router = useTransitionRouter();
  useGSAP(() => {
    gsap.from(".position-title span", {
      transform: "translateY(100%)",
      stagger: {
        amount: 1,
      },
      scrollTrigger: {
        trigger: ".line1",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });

    gsap.from(".specialising span", {
      transform: "translateY(105%)",
      stagger: {
        amount: 1,
      },
      scrollTrigger: {
        trigger: ".specialising",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });
    gsap.from(".work-section span", {
      transform: "translateY(100%)",
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: ".work-section",
        start: "top 80%",
        end: "top 40%",
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

  const loaded = () => {
    const tl = gsap.timeline();

    const headingAnimation = gsap.from(`.home-heading span`, {
      transform: "translateY(100%)",
      stagger: {
        amount: 0.6,
      },
      paused: true,
    });
    

    tl.to(".loader", {
      top: "-100%",
      delay: Math.random() * (3 - 1.5) + 1.5,
      duration: 1,
      onComplete: () => {
        if (headingAnimation) headingAnimation.play();
      },
      ease: "expo.inOut",
    });
  };

  useEffect(() => {
    loaded();
  }, []);

  return (
    <div className="main bg bb text-black">
      <Loader />
      <section className="page1 w-full pt-[8vw] max-xl:pt-[12vw] max-lg:pt-[14vw] max-md:pt-[20vw] max-sm:pt-[28vw] max-sm:pb-[10vw] py-[6vw] px-4">
        <div>
          <div className="mb-[-2vw] ml-[12vw]">
            <span className="text-2xl max-sm:text-lg secondary-text">
              portfolio
            </span>
          </div>
          <div className="home-heading text-left">
            <h1 className="text-[14vw] max-lg:text-[16vw] max-sm:text-[14vw] tracking-wide textt font-extrabold leading-none overflow-hidden">
              <TextSplit text="AK Studios"></TextSplit>
            </h1>
          </div>
          <div className="position ml-[40vw]">
            <span className="text-2xl max-sm:text-lg secondary-text">
              Visual Artist
            </span>
          </div>
        </div>
        <div className="secondary-text flex justify-end w-full pt-[4vw] max-xl:pt-[6vw]">
          <div className="w-[30%] max-xl:w-[35%] max-lg:w-[55%] max-md:w-[65%] max-sm:w-[80%]">
            <p className="ll text-2xl max-sm:text-lg">
              Elevate your visuals with cinematic edits & seamless motion
              effects.
            </p>
            <div className="mt-6">
              <Link
                scroll={false}
                onClick={() => {
                  router.push("/contact", {
                    onTransitionReady: () => slideInOut("contact"),
                  });
                }}
                href="/contact"
                className="btn text-white bg-black relative overflow-hidden transition-all hover:text-yellow-500 hover:bg-primary/90 px-6 py-3 max-sm:px-12 max-sm:text-sm"
              >
                Let’s talk
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Showreel link="https://cdn.prod.website-files.com/666066030b1447405865fff8%2F677e96fde9e05c3a1f266504_Filip%20Felbar%20Showreel%20Background-transcode.mp4"></Showreel>
      <section className="page3 w-full px-4 flex pt-[14vw]">
        <div className="role-model w-[32%] max-xl:w-[40%] max-md:w-[55%] h-[150vh] overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src="https://cdn.prod.website-files.com/666066030b1447405865fff8/674ef4bbe8fcbec7ae18ca8b_Filip%20Felbar%20-%20Intro%20Image-p-1600.webp"
            alt=""
            height={1000}
            width={1000}
          />
        </div>
        <div className="text px-4 pr-0 max-lg:pl-2 flex flex-col justify-between">
          <div>
            <h2 className="position-title text-[5vw] max-md:text-[27px] max-sm:text-[5vw] bb leading-[1] tracking-tighter">
              <span className="line line1 block overflow-hidden">
                <TextSplit text="Senior Video"></TextSplit>
              </span>

              <span className="line block line2 overflow-hidden">
                <TextSplit text="Editor crafting"></TextSplit>
              </span>

              <span className="line block line3 overflow-hidden">
                <TextSplit text="compelling visuals"></TextSplit>
              </span>

              <span className="line block line4 overflow-hidden">
                <TextSplit text="that captivate and"></TextSplit>
              </span>

              <span className="line line5 block overflow-hidden">
                <TextSplit text="engage audiences."></TextSplit>
              </span>
            </h2>
          </div>
          <div className="w-fit overflow-hidden bg-white">
            <TextStaggerAnimation
              href="/about"
              text="about me"
              className="about-me"
            />
          </div>

          <div className="specialising bb text-5xl max-xl:text-4xl max-md:text-[23px] max-sm:text-[3.6vw]">
            <span className="block overflow-hidden">
              <TextSplit text="specialising in:"></TextSplit>
            </span>
            <span className="block overflow-hidden">
              <TextSplit text="Video Editing"></TextSplit>
            </span>
            <span className="block overflow-hidden">
              <TextSplit text="Motion Graphics"></TextSplit>
            </span>
            <span className="block overflow-hidden">
              <TextSplit text="VFX"></TextSplit>
            </span>
            <span className="block overflow-hidden">
              <TextSplit text="Social Media Content"></TextSplit>
            </span>
            <span className="block overflow-hidden">
              <TextSplit text="Visual Storytelling"></TextSplit>
            </span>
            <span className="block overflow-hidden">
              <TextSplit text="Brand-Focused Edits"></TextSplit>
            </span>
          </div>
        </div>
      </section>
      <section className="page4 w-full px-4 pt-[10vw]">
        <div className="title text-center">
          <h2 className="work-section text-[10vw] max-lg:text-[14vw] max-sm:text-[16vw] leading-[.9] textt tracking-tighter font-extrabold">
            <span className="line block overflow-hidden">
              <TextSplit text="selected"></TextSplit>
            </span>
            <span className="line block overflow-hidden">
              <TextSplit text="works"></TextSplit>
            </span>
          </h2>
        </div>
        <div className="para text-center text-4xl max-md:text-3xl max-sm:text-xl ll flex justify-center pt-[6vw]">
          <p className="w-[70%] max-xl:w-[80%] max-lg:w-[90%] max-md:w-full">
            A collection of visually striking edits that showcase my
            storytelling, precision, and creative vision. Each project is
            crafted to captivate, engage, and leave a lasting impact.
          </p>
        </div>
        <div className="projects bb flex justify-center pt-[6vw]">
          <TextStaggerAnimation
            href="/work"
            text="view all projects"
            className="projects"
          />
        </div>
      </section>
      <section className="page5 w-full relative pt-[10vw]">
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
    </div>
  );
}
