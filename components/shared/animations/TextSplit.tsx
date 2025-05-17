import React from "react";

const TextSplit = ({ text }: { text: string }) => {
  return (
    <>
      {`${text}`.split("").map((word, i) => (
        <span className="inline-block" key={i}>
          {word === " " ? "\u00A0" : word}
        </span>
      ))}
    </>
  );
};

export default TextSplit;
