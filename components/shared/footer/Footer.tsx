"use client";
import { getIndianTime } from "@/lib/getIndiaTime";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const emptyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (footerRef.current && emptyRef.current) {
      emptyRef.current.style.height = `${footerRef.current.clientHeight}px`;
    }
  }, []);
  return (
    <>
      <section
        ref={footerRef}
        className="footer fixed custom-gradient z-[-1] bg-black text-white bottom-0 w-full pt-[6vw] flex flex-col gap-6"
      >
        <div className="flex justify-between px-12 max-sm:px-4 text-lg max-lg:text-sm  max-lg:flex-wrap max-sm:flex-col max-sm:gap-8 max-sm:text-sm">
          <div className="flex flex-col gap-1 max-lg:w-1/2 max-sm:w-full">
            <h3 className="bb text-white/55">Contact Me</h3>
            <Link
              href={"tel:+919399142719"}
              className="ll block hover:opacity-85 transition-all"
            >
              +91 9399142719
            </Link>
            <Link
              href={"mailto:smitjogani00@gmail.com"}
              className="ll block hover:opacity-85 transition-all"
            >
              smitjogani00@gmail.com
            </Link>
          </div>
          <div className="flex flex-col gap-1 max-lg:w-1/2 max-lg:items-end max-lg:pb-[5vw] max-sm:w-full max-sm:items-start max-sm:pb-[0vw]">
            <h3 className="bb text-white/65">Follow Me</h3>
            <Link
              target="_blank"
              href={"https://www.instagram.com/smit_jogani__"}
              className="ll group flex items-center gap-1"
            >
              <i className="ri-instagram-line text-2xl  transition-all group-hover:text-red-500 opacity-50 mr-1"></i>{" "}
              <span>instagram</span>
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/smitjogani/"}
              className="ll group flex items-center gap-1"
            >
              <i className="ri-linkedin-box-fill text-2xl  transition-all group-hover:text-blue-500 opacity-50 mr-1"></i>{" "}
              <span>linkedin</span>
            </Link>
          </div>
          <div className="flex flex-col gap-1 w-[22%] max-lg:w-1/2 max-sm:w-full">
            <span className="ll block">
              Visual storytelling the way it should be crafted for impact,
              designed for you.
            </span>
          </div>
          <div className="flex flex-col gap-5 max-lg:items-end max-lg:text-end max-sm:w-full max-sm:items-start max-sm:text-start">
            <div>
              <h3 className="bb text-white/65">Remote from India</h3>
              <span className="ll block">{`23° 1' 38.39" N / 77° 1' 5.89" E`}</span>
            </div>
            <div className="max-sm:hidden">
              <h3 className="bb text-white/65">Local Time</h3>
              <span className="ll block">{getIndianTime()}</span>
            </div>
            <div>
              <h3 className="bb text-white/65">Current Status</h3>
              <span className="relative inline-block">
                <span className="flex justify-center items-center">
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                  </span>
                  Available
                </span>
              </span>
            </div>
            <div className="mt-8 max-sm:hidden">
              <h3
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bb text-white/65 cursor-default w-fit"
              >
                Scroll To Top <i className="ri-arrow-up-line"></i>
              </h3>
            </div>
          </div>
        </div>
        <div className="pb-3 flex flex-col gap-2 max-sm:gap-4 leading-0 pt-[2vw]">
          <div className="footer-text text-center">
            <h2 className="text-[14vw] max-lg:text-[13vw] mix-blend-difference whitespace-nowrap tracking-wide textt font-extrabold leading-none">
               Smit Jogani
            </h2>
          </div>
          <div className="text-center ll max-lg:text-sm max-sm:text-sm relative z-[1]">
            <span>
              design & developed by{" "}
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/smitjogani/"}
                className="underline cursor-pointer"
              >
                Smit
              </Link>
              <i className="ri-heart-fill"></i> | copyright © 2025
            </span>
          </div>
        </div>
      </section>

      <section
        ref={emptyRef}
        className={`relative w-full pointer-events-none`}
      ></section>
    </>
  );
};

export default Footer;
