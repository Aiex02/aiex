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
  }, []);

  const download = ()=>{
    const resumeURL = 'https://drive.google.com/file/d/1JxxuFo7N_ifY22WLptPRNkxrKu9brhDX/view?usp=sharing'
    window.open(resumeURL, "_blank");
  }

  return (
    <div id="home" className="bg-zinc-800 p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 flex flex-col items-center justify-center">
      <div className="text-white mt-64 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
        {text}
        {cursorVisible && <span>|</span>}
      </div>
      <div>
        <button onClick={download} className="mt-6 sm:mt-8 p-3 sm:p-4 bg-slate-700 text-white text-base sm:text-lg font-semibold rounded-full flex items-center space-x-2 hover:bg-blue-600" >
          <span>CV</span>
          <FaDownload />
        </button>
      </div>
    </div>
  );
}
