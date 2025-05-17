import Link from "next/link";
import React, { useState } from "react";
import TextSplit from "./TextSplit";
import gsap from "gsap";
import { slideInOut } from "@/utils/slideInOut";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";

interface TextProps {
  href: string;
  text: string;
  className: string;
  isNew?: boolean;
}

const TextStaggerAnimation = ({ href, text, className, isNew }: TextProps) => {
  const [flag, setFlag] = useState(true);
  const pathname = usePathname();
  const router = useTransitionRouter();

  return (
    <Link
      scroll={false}
      href={href}
      target={isNew ? "_blank" : ""}
      onClick={() => {
        if (pathname !== href) {
          router.push(`${href}`, {
            onTransitionReady: () => slideInOut(href),
          });
        }
      }}
      onMouseEnter={() => {
        if (flag) {
          setFlag(false);

          gsap.to(`.${className} span`, {
            transform: "translateY(-100%)",
            stagger: {
              amount: 0.5,
            },
            ease: "expo.out",
            onComplete: () => {
              setFlag(true);
            },
          });
        }
      }}
      onMouseLeave={() => {
        gsap.to(`.${className} span`, {
          transform: "translateY(0%)",
          stagger: {
            amount: -0.5,
          },
          ease: "expo.out",
        });
      }}
      className={`${className} bb overflow-hidden bg-white `}
    >
      <span className="text-5xl max-lg:text-3xl max-sm:text-xl  block px-2">
        <TextSplit text={text}></TextSplit>
      </span>
      <span className="text-5xl max-lg:text-3xl max-sm:text-xl bg-[#f0e9e4] h-0 block px-2">
        <TextSplit text={text}></TextSplit>
      </span>
    </Link>
  );
};

export default TextStaggerAnimation;
