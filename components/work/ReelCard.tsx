"use client";

import Image from "next/image";

const ReelCard = ({ link, index }: { link: string; index: string }) => {
  return (
    <div
      className={`reel${index} w-[26vw] max-xl:w-[38vw] max-lg:w-[44vw] max-md:w-full h-[70vh]  overflow-hidden`}
    >
      <Image
        src={link}
        className="w-full h-full object-cover"
        alt="reel"
        width={1000}
        height={1000}
      ></Image>
    </div>
  );
};

export default ReelCard;
