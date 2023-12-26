import Link from "next/link";
import React from "react";

interface SquareProps {
  title: string;
  description: string;
  link: string
}

const Square: React.FC<SquareProps> = ({ title, description, link }) => {
  return (
    <div className="bg-zinc-800 p-4 shadow-2xl rounded-lg text-white flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
      <Link target="_blank" href={link}>
        <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          View Project
        </button>
      </Link>
    </div>
  );
};

export function Projects() {
  const squaresInfo = [
    {
      title: "Alfa Lógica",
      description:"Using Next.Js for project a website",
      link: "https://alfa-logica.vercel.app/pt"
    },
    {
      title: "Alfa Ritll",
      description:"Using Next.Js for project a website",
      link: "https://alfa-lake.vercel.app/pt"
    },
    
  ];

  return (
    <div id="projects" className="bg-zinc-800 py-10 shadow-2xl mt-64">
      <h2 className="text-3xl text-white text-center font-semibold mb-6">
        My Projects
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto max-w-7xl">
        {squaresInfo.map((square, index) => (
          <Square
            key={index}
            title={square.title}
            description={square.description}
            link={square.link}
          />
        ))}
      </div>
    </div>
  );
}
