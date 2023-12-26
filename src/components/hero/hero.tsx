'use client'
import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

export function Hero() {
  const [text, setText] = useState<string>("");
  const fullText: string = "Hi, I'm Guilherme Aiex,\n a Frontend Developer !";
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);

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
  }
  );
  
  return (
    <div id="home" className="bg-zinc-800 p-8 md:p-16 lg:p-24 xl:p-32 flex flex-col items-center justify-center">
      <div className="text-white mt-40 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
        {text}
        {cursorVisible && <span>|</span>}
      </div>
      <div>
        <button className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 p-3 sm:p-4 bg-slate-700 text-white text-lg sm:text-xl font-semibold rounded-full flex items-center space-x-2 hover:bg-blue-600">
          <a href="https://drive.google.com/file/d/1JxxuFo7N_ifY22WLptPRNkxrKu9brhDX/view?usp=drive_link" target="_blank" >CV</a>
          <FaDownload />
        </button>
      </div>
    </div>
  );
}
