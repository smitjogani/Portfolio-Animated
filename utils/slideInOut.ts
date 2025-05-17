import gsap from "gsap";

export const slideInOut = (text: string) => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  gsap.to(".links", {
    height: "0",
  });

  if (text !== "home") {
    gsap.from(`.${text.replace(/^\//, "")}-heading span`, {
      transform: "translateY(100%)",
      delay: 1.2,
      stagger: {
        amount: 0.5,
      },
    });
  }
  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateY(0) rotate(0deg)",
      },
      {
        opacity: 0.2,
        transform: "translateY(-45%) rotate(-150deg)",
      },
    ],
    {
      duration: 2000,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        transform: "rotate(45deg)",
      },
      {
        clipPath: "polygon(0% 100%,100% 100%,100% 0%,0% 0%)",
        transform: "rotate(0deg)",
      },
    ],
    {
      duration: 2000,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};
