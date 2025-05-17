import React from "react";

const Showreel = ({ link }: { link: string }) => {
  return (
    <section className="page2 w-full h-screen max-lg:h-[90vh] max-md:h-[75vh] max-sm:h-[50vh] relative px-4">
      <video
        className="w-full h-full object-cover"
        playsInline
        muted
        autoPlay
        loop
        src={link}
      ></video>
    </section>
  );
};

export default Showreel;
