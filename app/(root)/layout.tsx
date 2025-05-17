"use client";

import { useLenis } from "@/hooks/useLenis";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import Contact from "@/components/contact/Contact";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Layout = ({ children }: { children: React.ReactNode }) => {
  useLenis();

  useEffect(() => {
    document.body.addEventListener("mousemove", (dets) => {
      gsap.to(".mouse-follower", {
        opacity: 1,
        x: dets.clientX,
        y: dets.clientY,
        transform: "translate(-50%,-50%)",
        duration: 0.5,
        ease: "linear",
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="mouse-follower max-lg:hidden mix-blend-difference pointer-events-none fixed h-[2.5vh] w-[2.5vh] rounded-full bg-red-50 z-10 top-[0%] opacity-0 left-0"></div>
      {children}
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
