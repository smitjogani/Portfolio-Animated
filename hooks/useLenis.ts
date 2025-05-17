"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation"; // For Next.js route changes
import Lenis from "@studio-freight/lenis";

export const useLenis = () => {
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // ⬇ Reset Scroll & Force Lenis to Recalculate Height on Route Change
    const resetLenis = () => {
      window.scrollTo(0, 0); // Reset browser scroll
      lenis.scrollTo(0, { immediate: true }); // Reset Lenis scroll position
    };

    resetLenis(); // Run when component mounts

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, [pathname]); // 🔥 Runs when route changes
};
