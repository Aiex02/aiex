import React from "react";

export function AboutMe() {
  return (
    <div id="about" className="bg-zinc-800 flex items-center justify-center">
      <div className="bg-zinc-800 mt-64 p-2 shadow-2xl w-3/4 md:mx-96">
        <h2 className="text-2xl p-2 font-semibold text-white">About Me</h2>
        <p className="text-white p-2">
          Hello! Im Guilherme Aiex, a passionate Frontend Developer with a love
          for creating beautiful web applications. I currently reside in Brazil
          and Im a student of Information Systems. My goal is to blend my
          creativity and passion for design with my technical skills to create
          exceptional web experiences.
        </p>
      </div>
    </div>
  );
}
