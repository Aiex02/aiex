"use client";

import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Guilherme Aiex,\n a Frontend Developer !";
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setCursorVisible(false);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="bg-zinc-800 p-80 flex flex-col items-center justify-center">
      <div className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
        {text}
        {cursorVisible && <span>|</span>}
      </div>
      <div>
        <button className="mt-14 p-4 bg-slate-700 text-white text-lg font-semibold rounded-full flex items-center space-x-2 hover:bg-blue-600">
          <span>CV</span>
          <FaDownload />
        </button>
      </div>
    </div>
  );
}
