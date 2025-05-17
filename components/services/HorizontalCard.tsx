import React from "react";

const HorizontalCard = ({
  number,
  title,
  para,
}: {
  number: string;
  title: string;
  para: string;
}) => {
  return (
    <div className="card w-[50%] max-sm:w-full shrink-0">
      <span className="textt">{number}</span>
      <div>
        <h2 className="text-[6vw] max-sm:text-[10vw] tracking-tighter bb">{title}</h2>
      </div>
      <p className="w-[65%] max-sm:w-full ll text-xl">{para}</p>
    </div>
  );
};

export default HorizontalCard;
