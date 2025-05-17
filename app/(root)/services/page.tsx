"use client";

import HorizontalCard from "@/components/services/HorizontalCard";
import ProcessCard from "@/components/services/ProcessCard";
import TextSplit from "@/components/shared/animations/TextSplit";
import Showreel from "@/components/shared/Showreel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";

export default function Services() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: ".page6",
        start: "top 0%",
        end: "top -200%",
        pin: true,
        scrub: 1,
        // markers: true,
      },
    });

    tl.to(
      ".horizontal-scroller",
      {
        transform: "translateX(-100%)",
        left: "-100%",
      },
      "same"
    ).to(
      ".inner-line",
      {
        width: "100%",
      },
      "same"
    );

    gsap.from(".our-process span", {
      transform: "translateY(100%)",
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: ".our-process",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
        // markers: true,
      },
    });

    gsap.from(".faq span", {
      transform: "translateY(100%)",
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: ".faq",
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

  useEffect(() => {
    document.title = "Anuj Kelodiya - Services";
  }, []);
  return (
    <div className="main bg mm text-black">
      <section className="page1 w-full pt-[12vw] px-4 pb-[4vw] max-lg:pt-[20vw] max-md:pt-[24vw] max-sm:pt-[30vw] max-sm:pb-[6vw]">
        <div className="services-heading text-left">
          <h1 className="text-[22vw] tracking-tighter textt leading-none overflow-hidden">
            <TextSplit text="services"></TextSplit>
          </h1>
        </div>
      </section>
      <Showreel link="https://cdn.prod.website-files.com/666066030b1447405865fff8%2F677e96fde9e05c3a1f266504_Filip%20Felbar%20Showreel%20Background-transcode.mp4"></Showreel>
      <section className="page3 relative p-4">
        <span className="textt sticky inline-block top-20 left-0 text-[18vw] max-lg:text-[15vw] max-md:text-[14vw] max-sm:text-[12vw] tracking-tighter leading-none">
          01
        </span>
        <div className="flex justify-end relative">
          <div className="w-[70%] max-lg:w-[75%] max-md:w-[80%] max-sm:w-[83%]">
            <div className="line w-full h-[2px] bg-black"></div>
            <span className="bb inline-block py-4">THE MAIN PART</span>
            <div>
              <h2 className="text-[6vw] max-lg:text-[8vw] max-md:text-[10vw] max-sm:text-[11vw] whitespace-nowrap textt tracking-tighter">
                Product Design
              </h2>
              <p className="ll w-[90%] text-2xl max-lg:w-full max-md:text-lg">
                My editing approach goes beyond mere visual assembly, focusing
                on developing compelling, narrative-driven content that
                resonates across digital platforms. With a strong emphasis on
                storytelling, color grading, and motion graphics, I create
                videos that are engaging, technically precise, and emotionally
                impactful.
              </p>
            </div>
            <div className="process pt-[6vw] text-xl">
              <ProcessCard number="01" text="Video Editing & Post-Production" />
              <ProcessCard number="02" text="Motion Graphics Design" />
              <ProcessCard
                number="03"
                text="Color Grading & Color Correction"
              />
              <ProcessCard number="04" text="Sound Design & Audio Sync" />
              <ProcessCard
                number="05"
                text="Promotional & Social Media Content"
              />
              <ProcessCard number="06" text="Narrative Storytelling" />
            </div>
          </div>
        </div>
      </section>
      <section className="page4 relative p-4">
        <span className="textt sticky inline-block top-20 left-0 text-[18vw] max-lg:text-[15vw] max-md:text-[14vw] max-sm:text-[12vw] tracking-tighter leading-none">
          02
        </span>
        <div className="flex justify-end relative">
          <div className="w-[70%] max-lg:w-[75%] max-md:w-[80%] max-sm:w-[81%]">
            <div className="line w-full h-[2px] bg-black"></div>
            <span className="bb inline-block py-4">The Technical part</span>
            <div>
              <h2 className="text-[6vw] max-lg:text-[8vw] max-md:text-[10vw] leading-none max-sm:pb-4 max-sm:text-[11vw] textt tracking-tighter">
                Webflow Development
              </h2>
              <p className="ll w-[80%] max-lg:w-full text-xl max-sm:text-lg">
                Translating design into dynamic, functional web experiences is
                where I thrive. I’m passionate about transforming design systems
                into responsive, web-based environments, leveraging Webflow’s
                flexibility to create sustainable websites with flexibel and
                responsive components.
              </p>
            </div>
            <div className="process pt-[6vw]">
              <ProcessCard number="01" text="Landingpages" />
              <ProcessCard
                number="02"
                text="Designsystems (Figma <> Webflow)"
              />
              <ProcessCard number="03" text="Animated web solutions" />
            </div>
          </div>
        </div>
      </section>
      <section className="page5 relative p-4">
        <span className="textt sticky inline-block top-20 left-0 text-[18vw] max-lg:text-[15vw] max-md:text-[14vw] max-sm:text-[12vw] tracking-tighter leading-none">
          03
        </span>
        <div className="flex justify-end relative">
          <div className="w-[70%] max-lg:w-[75%] max-md:w-[80%] max-sm:w-[81%]">
            <div className="line w-full h-[2px] bg-black"></div>
            <span className="bb inline-block py-4">The Visionary part</span>
            <div>
              <h2 className="text-[6vw] max-lg:text-[8vw] max-md:text-[10vw] max-sm:pb-4 leading-none max-sm:text-[11vw] textt tracking-tighter">
                Branding & Vision
              </h2>
              <p className="ll w-[80%] max-lg:w-full text-xl max-sm:text-lg">
                UI design isn’t just about buttons and components — It is about
                reflecting the essence of a brand on digital functional
                platforms and strengthening brand authenticity at every user
                touchpoint. I love pushing beyond the conventional, transforming
                UI into a tool that elevates the brand to a new level.
              </p>
            </div>
            <div className="process pt-[6vw]">
              <ProcessCard number="01" text="Brand Design" />
              <ProcessCard number="02" text="Moodboards" />
              <ProcessCard number="03" text="Vision Concepts" />
              <ProcessCard number="04" text="Styleguides" />
            </div>
          </div>
        </div>
      </section>
      <section className="page6 h-screen w-full relative p-4 pt-[2vw] overflow-x-hidden max-sm:flex max-sm:flex-col max-sm:justify-center">
        <div className="title text-center pb-[4vw]">
          <h2 className="our-process text-[10vw] max-lg:text-[14vw] max-sm:text-[15vw] textt tracking-tighter font-extrabold">
            <span className="line block overflow-hidden">
              <TextSplit text="our process"></TextSplit>
            </span>
          </h2>
        </div>
        <div className="outer-line w-full h-[2px] bg-black/20 overflow-hidden">
          <div className="inner-line w-0 h-full bg-black"></div>
        </div>
        <div className="horizontal w-full relative">
          <div className="horizontal-scroller w-full relative flex pt-[8vw]">
            <HorizontalCard
              number="(1)"
              title="Discovery"
              para="Understand your vision, brand, and goals to align the editing process with your message."
            />
            <HorizontalCard
              number="(2)"
              title="Structure"
              para="I create a solid editing plan to ensure consistency and smooth flow throughout the video."
            />
            <HorizontalCard
              number="(3)"
              title="Design"
              para="I craft dynamic visuals—effects, transitions, and color grading—to enhance storytelling."
            />
            <HorizontalCard
              number="(4)"
              title="Build"
              para="I assemble footage, audio, and graphics, editing them into a seamless narrative."
            />
            <HorizontalCard
              number="(5)"
              title="Scale"
              para="I optimize the video for maximum impact across platforms, ensuring it performs well everywhere."
            />
            <HorizontalCard
              number="(6)"
              title="Scale"
              para="I optimize the video for maximum impact across platforms, ensuring it performs well everywhere."
            />
          </div>
        </div>
      </section>
      <section className="relative w-full items-center p-4">
        <div className="title text-center">
          <h2 className="faq text-[10vw] max-lg:text-[14vw] max-sm:text-[15vw] textt tracking-tighter font-extrabold">
            <span className="line block overflow-hidden">
              <TextSplit text="FAQ"></TextSplit>
            </span>
          </h2>
        </div>
        <div className="w-full flex justify-end">
          <div className="w-[85%] max-md:w-full">
            <Accordion
              type="single"
              collapsible
              className="w-full flex flex-col gap-8"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-5xl max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl tracking-tight bb font-light">
                  What makes your process unique?
                </AccordionTrigger>
                <AccordionContent className="ll text-lg w-[90%] max-md:w-full">
                  Our process is built on research, strategy, and adaptability.
                  As part of the Synthesis Consulting Group, a network of four
                  specialized agencies, we bring diverse expertise and deep
                  experience to every project. Whether working independently or
                  collaboratively, we deliver solutions that align with your
                  goals and create lasting impact.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-5xl max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl tracking-tight bb font-light">
                  Can you audit our current digital solution and suggest
                  improvements?
                </AccordionTrigger>
                <AccordionContent className="ll text-lg w-[90%] max-md:w-full">
                  Yes, we can! Our team is capable of conducting a variety of
                  audits to evaluate your digital solution comprehensively. From
                  assessing usability and design to technical performance and
                  scalability, we focus on uncovering opportunities for
                  improvement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-5xl max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl tracking-tight bb font-light">
                  Do you set measurable goals at the start of a project?
                </AccordionTrigger>
                <AccordionContent className="ll text-lg w-[90%] max-md:w-full">
                  Absolutely. We believe that success starts with clear
                  objectives. Together, we define measurable goals at the
                  beginning of each project, ensuring our solutions align with
                  your vision and deliver tangible results.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-5xl max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl tracking-tight bb font-light">
                  Can you maintain our existing website?
                </AccordionTrigger>
                <AccordionContent className="ll text-lg w-[90%] max-md:w-full">
                  Yes, we offer comprehensive maintenance services to keep your
                  website running smoothly. We specialize in managing the
                  technical side for platforms built on WordPress, Webflow, or
                  Laravel. For UX/UI, we can work with any platform, ensuring
                  your digital product continues to deliver an exceptional user
                  experience. From technical updates and bug fixes to ongoing
                  optimization, we ensure your platform stays secure, efficient,
                  and aligned with user needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-5xl max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl tracking-tight bb font-light">
                  What platforms or technologies do you use?
                </AccordionTrigger>
                <AccordionContent className="ll text-lg w-[90%] max-md:w-full">
                  From a design standpoint, we primarily work with Figma,
                  ensuring precision and collaboration throughout the design
                  process. On the development side, we specialize in platforms
                  like WordPress, Webflow, and Laravel. Additionally, we can
                  design projects that are built on other platforms by external
                  development teams, providing flexibility to meet your needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
