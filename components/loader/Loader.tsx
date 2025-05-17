"use client";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [greetings] = useState([
    { font: "textt", greeting: "Namaste" },
    { font: "ll", greeting: "Hello" },
    { font: "bb", greeting: "Hola" },
    { font: "textt", greeting: "Bonjour" },
    { font: "ll", greeting: "Guten Tag" },
    { font: "bb", greeting: "Nǐ hǎo" },
    { font: "textt", greeting: "Konnichiwa" },
    { font: "ll", greeting: "Zdravstvuyte" },
    { font: "bb", greeting: "As-salamu alaykum" },
    { font: "text", greeting: "Annyeonghaseyo" },
  ]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 10);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader text-6xl max-lg:text-3xl text-center custom-gradient fixed top-0 left-0 h-screen w-full bg-black z-50 flex justify-center items-center">
      <h2 className={`text-white ${greetings[index].font}`}>
        {greetings[index].greeting}
      </h2>
    </div>
  );
};

export default Loader;
