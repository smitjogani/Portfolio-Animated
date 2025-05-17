"use client";

import { slideInOut } from "@/utils/slideInOut";
import gsap from "gsap";
import { useTransitionRouter } from "next-view-transitions";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [flag, setFlag] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const router = useTransitionRouter();

  useEffect(() => {
    setFlag((prevFlag) => (prevFlag ? false : false));

    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        setIsVisible(
          lastScrollY.current > currentScrollY || currentScrollY < 10
        );
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <nav
      className={`w-full fixed top-5 z-10 flex justify-center ${
        isVisible
          ? "translate-y-0 transition-all duration-500 ease-in-out"
          : "-translate-y-[150%] transition-all duration-500 ease-in-out"
      }`}
    >
      <div className="w-[98%] custom-gradient text-white px-4 py-3 rounded-xl ">
        <div className="w-full flex justify-between items-center">
          <div className="nav-left flex gap-2 items-center mm">
            <div className="nav-logo">
              <Link
                scroll={false}
                onClick={() => {
                  if (pathname !== "/") {
                    router.push("/", {
                      onTransitionReady: () => slideInOut("home"),
                    });
                  }
                }}
                href="/"
              >
                <Image
                  src={"/img/head-logo.webp"}
                  alt="logo"
                  width={30}
                  height={30}
                  className="object-cover rounded-xs"
                ></Image>
              </Link>
            </div>
            <span className="uppercase bb max-lg:text-xs text-[#f7f3ef]">
              Visual Alchemist, crafting cinematic edits{" "}
              <span className="max-sm:hidden">& dynamic digital stories.</span>
            </span>
          </div>
          <div
            onClick={() => {
              if (!flag) {
                gsap.to(".main", {
                  filter: " blur(12px)",
                });
                gsap.to(".links", {
                  height: "auto",
                  duration: 1,
                  ease: "expo.inOut",
                  onComplete: () => {
                    gsap.to(".links", {
                      opacity: 1,
                    });
                  },
                });
                setFlag(true);
              } else {
                gsap.to(".links", {
                  overflow: "hidden",
                  height: "0",
                  ease: "expo.inOut",

                  duration: 0.7,
                  onComplete: () => {
                    gsap.to(".links", {
                      opacity: 0,
                    });
                  },
                });
                gsap.to(".main", {
                  filter: " blur(0px)",
                });
                setFlag(false);
              }
            }}
            className="nav-right cursor-pointer"
          >
            <i
              className={`${
                !flag ? "ri-menu-3-line" : "ri-close-large-fill"
              } text-3xl text-[#f7f3ef]`}
            ></i>
          </div>
        </div>
        <div className="links overflow-hidden opacity-0 h-0">
          <div className="flex justify-between gap-4 mt-4 overflow-hidden max-lg:flex-col max-lg:gap-6 max-lg:text-2xl">
            <Link
              scroll={false}
              onClick={() => {
                if (pathname !== "/") {
                  router.push("/", {
                    onTransitionReady: () => slideInOut("home"),
                  });
                }
              }}
              href="/"
              className="w-[20%] max-lg:w-full"
            >
              <div
                className={`${
                  pathname === "/"
                    ? "bg-[#f7f3ef] rounded-[.5vw] text-black"
                    : ""
                } nav-link overflow-hidden hover:text-black hover:px-[1.5vw] z-[1] relative w-full border p-3 flex justify-between items-center`}
              >
                <h2 className="mm text-2xl relative">Home</h2>
                <span className="mm relative max-sm:hidden">↗</span>
              </div>
            </Link>
            <Link
              scroll={false}
              onClick={() => {
                if (pathname !== "/about") {
                  router.push("/about", {
                    onTransitionReady: () => slideInOut("about"),
                  });
                }
              }}
              href="/about"
              className="w-[20%] max-lg:w-full"
            >
              <div
                className={`${
                  pathname === "/about"
                    ? "bg-[#f7f3ef] rounded-[.5vw] text-black"
                    : ""
                }
                 nav-link overflow-hidden hover:text-black hover:px-[1.5vw] z-[1] relative w-full border p-3 flex justify-between items-center`}
              >
                <h2 className="mm text-2xl relative">About</h2>
                <span className="mm relative max-sm:hidden">↗</span>
              </div>
            </Link>
            <Link
              scroll={false}
              onClick={() => {
                if (pathname !== "/work") {
                  router.push("/work", {
                    onTransitionReady: () => slideInOut("work"),
                  });
                }
              }}
              href="/work"
              className="w-[20%] max-lg:w-full"
            >
              <div
                className={`${
                  pathname === "/work"
                    ? "bg-[#f7f3ef] rounded-[.5vw] text-black"
                    : ""
                } nav-link overflow-hidden hover:text-black hover:px-[1.5vw] z-[1] relative w-full border p-3 flex justify-between items-center`}
              >
                <h2 className="mm text-2xl relative">Work</h2>
                <span className="mm relative max-sm:hidden">↗</span>
              </div>
            </Link>
            <Link
              scroll={false}
              onClick={() => {
                if (pathname !== "/services") {
                  router.push("/services", {
                    onTransitionReady: () => slideInOut("services"),
                  });
                }
              }}
              href="/services"
              className="w-[20%] max-lg:w-full"
            >
              <div
                className={`${
                  pathname === "/services"
                    ? "bg-[#f7f3ef] rounded-[.5vw] text-black"
                    : ""
                } nav-link overflow-hidden hover:text-black hover:px-[1.5vw] z-[1] relative w-full border p-3 flex justify-between items-center`}
              >
                <h2 className="mm text-2xl relative">Services</h2>
                <span className="mm relative max-sm:hidden">↗</span>
              </div>
            </Link>
            <Link
              scroll={false}
              onClick={() => {
                if (pathname !== "/contact") {
                  router.push("/contact", {
                    onTransitionReady: () => slideInOut("contact"),
                  });
                }
              }}
              href="/contact"
              className="w-[20%] max-lg:w-full"
            >
              <div
                className={`${
                  pathname === "/contact"
                    ? "bg-[#f7f3ef] rounded-[.5vw] text-black"
                    : ""
                } nav-link overflow-hidden hover:text-black hover:px-[1.5vw] z-[1] relative w-full border p-3 flex justify-between items-center`}
              >
                <h2 className="mm text-2xl relative">Contact</h2>
                <span className="mm relative max-sm:hidden">↗</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
